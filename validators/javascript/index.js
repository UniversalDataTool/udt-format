const { superstruct } = require("superstruct");
const isUrl = require("is-url");

const struct = superstruct({
  types: {
    url: (v) => isUrl(v) && v.length < 2048,
  },
});

const { intersection, optional, literal, partial, pick, union, lazy } = struct;

const LanguageId = "string"; // TODO "en", etc.

let Interface;

const AudioTranscriptionInterface = pick({
  type: literal("audio_transcription"),
  description: optional("string"),
  language: optional(LanguageId),
  phraseBank: union(["url", ["string"]]),
  transcriptionType: union([literal("simple"), literal("proper")]),
});

const CompositeInterface = pick({
  type: literal("composite"),
  fields: [
    pick({
      fieldName: "string",
      interface: lazy(() => Interface),
    }),
  ],
});

const TextClassificationInterface = pick({
  type: literal("text_classification"),
  description: optional("string"),
  multiple: optional("boolean"),
  labels: union([
    ["string"],
    [
      pick({
        id: "string",
        displayName: optional("string"),
        description: optional("string"),
      }),
    ],
  ]),
});

const TextEntityRecognitionInterface = pick({
  type: union([
    literal("text_entity_recognition"),
    literal("named_entity_recognition"),
  ]),
  labels: union([
    ["string"],
    [
      pick({
        id: "string",
        displayName: optional("string"),
        description: optional("string"),
      }),
    ],
  ]),
});

const VideoSegmentationInterface = pick({
  type: literal("video_segmentation"),
});

const DataEntryInterface = pick({
  type: literal("data_entry"),
});

const ImageClassificationInterface = pick({
  type: literal("image_classification"),
  multiple: optional("boolean"),
  labels: [
    pick({
      id: "string",
      displayName: optional("string"),
      description: optional("string"),
    }),
  ],
});

const ImageSegmentationInterface = pick({
  type: literal("image_segmentation"),
  labels: union([
    ["string"],
    [
      pick({
        id: "string",
        displayName: optional("string"),
        description: optional("string"),
      }),
    ],
  ]),
  regionTypesAllowed: optional(
    union([
      literal("bounding-box"),
      literal("polygon"),
      literal("full-segmentation"),
      literal("point"),
      literal("pixel-mask"),
    ])
  ),
  regionDescription: optional("string"),
  multipleRegionLabels: optional("boolean"),
  multipleRegions: optional("boolean"),
  minimumRegionSize: optional("number"),
  overlappingRegions: optional("boolean"),
  regionMinAcceptableDifference: optional("number"),
});

Interface = union([
  AudioTranscriptionInterface,
  DataEntryInterface,
  ImageClassificationInterface,
  ImageSegmentationInterface,
  VideoSegmentationInterface,
  TextClassificationInterface,
  CompositeInterface,
]);

let Annotation;
const ImageClassificationAnnotation = pick({});
const ImageSegmentationAnnotation = pick({});
const VideoSegmentationAnnotation = pick({});
const DataEntryAnnotation = "object";
const TextEntityRecognitionAnnotation = pick({
  entities: [
    pick({
      text: "string",
      label: "string",
      start: "number",
      end: "number",
    }),
  ],
});
const TextClassificationAnnotation = "string";
const AudioTranscriptionAnnotation = pick({});
const CompositeAnnotation = struct.function((value) => {
  if (typeof value !== "object") return false;
  for (const subValue of Object.values(value)) {
    if (!Annotation(subValue)) return false;
  }
  return true;
});

Annotation = union([
  "null",
  ImageClassificationAnnotation,
  ImageSegmentationAnnotation,
  VideoSegmentationAnnotation,
  DataEntryAnnotation,
  TextEntityRecognitionAnnotation,
  TextClassificationAnnotation,
  CompositeAnnotation,
]);

const BaseSample = pick({
  customId: optional("string"),
});

const GenericSample = intersection([
  BaseSample,
  partial({
    customId: "string",
    markdown: "string",
    document: "string",
    imageUrl: "url",
    videoUrl: "url",
    pdfUrl: "url",
    audioUrl: "url",
    url: "url",
    videoFrameAt: "number",
    surveyjs: "object",
  }),
]);

const AudioTranscriptionSample = intersection([
  BaseSample,
  pick({
    audioUrl: "url",
    annotation: optional(AudioTranscriptionAnnotation),
  }),
]);

const DataEntrySample = intersection([
  GenericSample,
  pick({
    annotation: optional(AudioTranscriptionAnnotation),
  }),
]);

const TextEntityRecognitionSample = intersection([
  BaseSample,
  pick({
    document: "string",
    annotation: optional(TextEntityRecognitionAnnotation),
  }),
]);

const TextClassificationSample = intersection([
  BaseSample,
  pick({
    document: "string",
    annotation: optional(TextClassificationAnnotation),
  }),
]);

const CompositeSample = intersection([
  GenericSample,
  pick({
    document: "string",
    annotation: optional(CompositeAnnotation),
  }),
]);

const ImageSegmentationSample = intersection([
  BaseSample,
  union([
    pick({ imageUrl: "string" }),
    pick({ pdfUrl: "string" }),
    pick({ videoUrl: "string", videoFrameAt: "number" }),
  ]),
  pick({
    annotation: optional(ImageSegmentationAnnotation),
  }),
]);

const ImageClassificationSample = intersection([
  BaseSample,
  union([
    pick({ imageUrl: "string" }),
    pick({ pdfUrl: "string" }),
    pick({ videoUrl: "string", videoFrameAt: "number" }),
  ]),
  pick({
    annotation: optional(ImageClassificationAnnotation),
  }),
]);

const VideoSegmentationSample = intersection([
  BaseSample,
  pick({
    videoUrl: "string",
    annotation: optional(VideoSegmentationAnnotation),
  }),
]);

const Sample = union([
  CompositeSample,
  AudioTranscriptionSample,
  TextEntityRecognitionSample,
  ImageClassificationSample,
  ImageSegmentationSample,
  VideoSegmentationSample,
  DataEntrySample,
]);

const UDTFormat = union([
  pick({
    interface: AudioTranscriptionInterface,
    samples: optional([AudioTranscriptionSample]),
  }),
  pick({
    interface: TextEntityRecognitionInterface,
    samples: optional([TextEntityRecognitionSample]),
  }),
  pick({
    interface: TextClassificationInterface,
    samples: optional([TextClassificationSample]),
  }),
  pick({
    interface: ImageClassificationInterface,
    samples: optional([ImageClassificationSample]),
  }),
  pick({
    interface: ImageSegmentationInterface,
    samples: optional([ImageSegmentationSample]),
  }),
  pick({
    interface: DataEntryInterface,
    samples: optional([DataEntrySample]),
  }),
]);

module.exports = {
  default: UDTFormat,
  UDTFormat,
  Sample,
  Annotation,
  Interface,
};
