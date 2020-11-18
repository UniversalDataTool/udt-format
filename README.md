# Universal Data Tool (UDT) Format

This document describes the Universal Data Tool format, an open-source format for describing task descriptions for human annotation jobs.

The following items are examples of human annotation tasks...

- Drawing bounding boxes around objects or people in images.
- Identifying key words and intent of text conversations
- Collecting and augmenting data via internet research

To test the UDT format, check out the [Universal Data Tool](https://universaldatatool.com/).

## Schema

```javascript
{
  // Interface details
  "interface": { /* see "Interfaces" */ },

  // Data to be labeled (images, paragraphs, etc.)
  "samples": [ /* see the sample data spec for the chosen interface */ ]
}
```

## Interfaces

Click the link on any interface to see it's full schema, examples, and specification details.

| Interface                                                                                                                            | Description                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| [image_label](https://github.com/UniversalDataTool/udt-format/blob/master/interfaces/image_label.md)                                 | Assign label(s) to an image or a predefined region of an image                     |
| [image_segmentation](https://github.com/UniversalDataTool/udt-format/blob/master/interfaces/image_segmentation.md)                   | Surround region(s) of an image, optionally labeling region(s).                     |
| [image_pixel_segmentation](https://github.com/UniversalDataTool/udt-format/blob/master/interfaces/image_pixel_segmentation.md)       | Label or classify pixels in an image (AKA Full Image Segmentation).                |
| [data_entry](https://github.com/UniversalDataTool/udt-format/blob/master/interfaces/data_entry.md)                                   | Retrieve fields from source(s) or the internet.                                    |
| [audio_transcription](https://github.com/UniversalDataTool/udt-format/blob/master/interfaces/audio_transcription.md)                 | Derive text from audio.                                                            |
| [video_segmentation](https://github.com/UniversalDataTool/udt-format/blob/master/interfaces/video_segmentation.md)                   | Surround region(s) containing objects within a video, optionally tagging object(s) |
| [text_classification](https://github.com/UniversalDataTool/udt-format/blob/master/interfaces/text_classification.md)                 | Categorize text.                                                                   |
| [text_entity_recognition](https://github.com/UniversalDataTool/udt-format/blob/master/interfaces/text_entity_recognition.md)         | Label named entities in text.                                                      |
| [text_entity_relations](https://github.com/UniversalDataTool/udt-format/blob/master/interfaces/text_entity_relations.md)             | Label relationships or dependencies between text entities.                         |
| [audio_entity_identification](https://github.com/UniversalDataTool/udt-format/blob/master/interfaces/audio_entity_identification.md) | Identify timestamps and transcribe audio (speaker identification).                 |
| [time_series](https://github.com/UniversalDataTool/udt-format/blob/master/interfaces/time_series.md)                                 | Identify timestamps and durations in a variety of time series data sources.        |
| deduplication                                                                                                                        | Compare information and remove duplicates.                                         |
| text_sentiment_analysis                                                                                                              | Analyze the sentiment of a message.                                                |
| text_content_moderation                                                                                                              | Analyze content for profanity, bullying or custom criteria.                        |
| text_correction                                                                                                                      | Proofread text.                                                                    |
| video_classification                                                                                                                 | Assign label(s) to a video or labels to regions within an image                    |
| visual_transcription                                                                                                                 | Derive text from images or video.                                                  |
| [composite](https://github.com/UniversalDataTool/udt-format/blob/master/interfaces/composite.md)                                     | Combine multiple UDT interfaces.                                                   |

## FAQ

**What types of data are supported?**

Check out the [interfaces](#interfaces) section.

**How do I reference sample files on my computer?**

If your files are on your computer rather than the internet and not available via a URL,
use the `file://` protocol instead of `https://`.

For example, `file:///home/yourname/Downloads/cat.jpg` will link to the cat
picture you have in your Downloads directory.

**How do I know if I formatted the file properly?**

1. Paste or upload into the Universal Data Tool (`Setup > Edit JSON`)
2. If python, use [universaldatatool pip package](https://github.com/UniversalDataTool/python-universaldatatool)
3. Use a package/module/script from the validators directory (e.g. [npm install udt-format](#))

**What is a UDT dataset? What is a UDT Sample?**

A UDT Dataset Object is the JSON object containing the `samples` and `interface`. A UDT Dataset file is written
`dataset.udt.json`. A dataset gives you everything you need to view and edit data.

A UDT Sample Object is the JSON object containing things like `imageUrl` and an `annotation`. They are contained within
a dataset. A Sample represents a unit of work for a labeler (as opposed to a single piece of data). For example, you might
have 4 Samples corresponding to different sections of a single image. However, most of the time there is one Sample for
each data asset (image, video, document etc.)

> In the [filesystem proposal](https://github.com/UniversalDataTool/udt-format/blob/master/proposals/filesystem.md) samples
> are saved to separate files with the format `sample-<SAMPLE_ID>.json`, but Sample Objects are within a dataset file.

## Principles

The purpose of the Universal Data Tool Format is to make attaining human annotations simple and effective for organizations with AI and machine learning datasets. To this end, this format aims to accomplish all of the following important objectives...

- **Complete Specificity** such that no additional documents or conversations are required to perform the task.
- **Simplicity and Human Readability** so that datasets can be easily examined in the JSON format and understood
- **Specificity** such that no additional documents or conversations are required to start labeling

**The Universal Data Tool Format is built to be a standard format, suitable for many different tools and APIs. The format precedes and defines the
scope of the [Universal Data Tool](https://universaldatatool.com)**

## Notes

The scope of this document is broad and expected to undergo many iterations as advancements in the field define new interfaces for analyzing data and new types of datasets. Sections of the API that are subject to change are marked with **_UNSTABLE_**.
