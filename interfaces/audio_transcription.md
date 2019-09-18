# Audio Transcription

The `audio_transcription` interface allows you to convert audio into transcribed text.

* Markdown description containing images, links or instructions. Per-task and/or universal description.

## Schema

```javascript
{
  "interface": {
    "type": "audio_transcription",
    "description": "MarkdownDescription",
    "language"?: LanguageString, // defaults to english
    "phraseBank"?: Array<string> | UrlToCSV
  },
  "taskData": [
    { audioUrl: "https://...." }
  ],
  "examples": [
    {
      data: { audioUrl: "https://..." },
      output: "..."
    }
  ]
}
```

## Output

Each task output is a string representation of an audio file.
