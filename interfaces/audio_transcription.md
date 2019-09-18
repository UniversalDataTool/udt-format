# Audio Transcription

The `audio_transcription` interface allows you to convert audio int o transcribed text.

* Markdown description containing images, links or instructions. Per-task and/or universal description.

## Schema

```javascript
{
  "interface": {
    "type": "audio_transcription",
    "description": "MarkdownDescription",
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

Each `taskOutput` is a string.
