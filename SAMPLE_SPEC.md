# Sample Spec

Every JSON dataset has a `samples` array containing each unit of work to be labeled.

Not every interface can accept every type of data. Check the interface specification to determine how exactly to format the sample.

## Images

```json
{
  "imageUrl": "https://example.com/image1.png"
}
```

## Audio

```json
{
  "audioUrl": "https://example.com/audio.mp3"
}
```

## Video

```json
{
  "videoUrl": "https://example.com/video.mp4"
}
```

## Text / Markdown / Documents

```json
{
  "document": "some string"
}
```

```json
{
  "markdown": "# title\nSome **markdown**."
}
```

```json
{
  "textUrl": "https://example.com/example.txt"
}
```

## Time Data

The unit of `"time"` can be either a duration (time since start) or a unix epoch time. The
representation of time is configured in the interface.

```javascript
{
  "timeData": [
    { "time": 0, "value": 0 }, // Keys other than "value" are fine as well
    { "time" : 500, "value": 0.75 },
    { "time" : 1000, "value": 1 }
  ]
}
```

If a `time` interface is selected, each row of the CSV URL will become an object in `timeData`. The header
will be used to determine the keys of each JSON object.

```json
{
  "csvUrl": "https://example.com/example.csv"
}
```

## PDFs

```json
{
  "pdfUrl": "https://example.com/document.pdf"
}
```
