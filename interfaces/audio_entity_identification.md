# Audio Entity Identification (Speaker Identification)

Identify time ranges within an audio sample e.g. identify speakers in an audio sample.

## Schema

```javascript
{
  "interface": {
    "type": "audio_entity_identification", // or "audio_speaker_identification"
    "description": "MarkdownDescription",

    "labels": ["dog-barking", "human"],

    // These are used if you also want to do a transcription. See audio_transcription for more details.
    "transcribe": false,
    "language"?: LanguageString, // defaults to english
    "phraseBank"?: UrlToCSV,
    "onlyUseWordsInPhraseBank": boolean, // defaults to false
    "transcriptionType": "simple" | "proper" //defaults to simple
  },
  "samples": [
    {
      audioUrl: "https://...."
    }
  ],
  "examples": [
    {
      audioUrl: "https://...",
      annotation: {
        entities: [
          {
            start: 1200, // start time in ms of speaker
            end: 3500,   // end time in ms of speaker
            classification: "dog-barking",

            // Only if transcribe: true
            transcription: "..."
        ]
      }
    }
  ]
}
```
