# udt-format javascript validator

`npm install udt-format`

```javascript
import UDTFormat, { Sample } from "udt-format"

// Throws error if invalid UDT Format
UDTFormat({
  interface: {
    type: "audio_transcription",
  },
  samples: [],
})

Sample({
  audioUrl: "https://asdasd",
})
```
