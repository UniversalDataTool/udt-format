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
    "phraseBank"?: Array<string> | UrlToCSV,
    "onlyUseWordsInPhraseBank": boolean, // defaults to false
    "transcriptionType": "simple" | "proper" //defaults to simple
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

Each task output is a string representation of an audio file. The output format is determined by `interface.transcriptionType`.

## Simple Transcription Type

* All numbers written in their full string form. e.g. 100 is written one hundred. This is because numbers can be pronounced in different ways, e.g. one thousand five hundred and fifteen hundred. [There are libraries to convert number words to numbers](https://pypi.org/project/word2number/)
* All characters are lower case.
* In general, punctuation such as commas, hyphens, apostrophes and ellipses are not present.
* If a letter is spoken e.g. "ABC" is written as "a. b. c."

## Proper Transcription Type

* All numbers written in their full string form. e.g. 100 is written one hundred. This is because numbers can be pronounced in different ways, e.g. one thousand five hundred and fifteen hundred. [There are libraries to convert number words to numbers](https://pypi.org/project/word2number/)
* Sentences are capitalized. Proper nouns are capitalized.
* Commas and other punctuation is used appropriately and sometimes ambiguously.
