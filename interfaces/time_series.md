# Time Series

> In Review: This format is still being reviewed by the community.

Label timestamps or durations in audio, video or time series data.

## Schema

```javascript
{
  "interface": {
    "type": "time_series",
    
    // time_format determines how the time axis will be displayed to the user
    // "dates": Display as dates with time
    // "none": Display time as a number. For example, if each data point was taken at a new iteration
    //         or over a short period of time
    // "duration": Display everything relative to the first data point but converted to a time. This
                   is how a video or audio editing application might display time
                   e.g. "1:20:00" to mean "1 hour and 20 minutes past the start"
    "time_format": "dates",

    "enabledTools": ["create-durations", "label-durations", "create-timestamps", "label-timestamps"],

    // Can the user manually type a new label? (free text)
    "allowCustomLabels": true,

    // Labels that can be used for timestamps/durations
    "labels": ["buy here", "sell here"]
  },
  "samples": [
    {
      "timeData": [
        { "time": 0, "value": 100 },
        { "time": 1000, "value": 50 },
        { "time": 2000, "value": 50 },
      ],
      
      // This will appear in the sample after labeling, can also be provided for viewing data
      // Times will be in the same format as the "timeData", e.g. unix epoch milliseconds
      "annotation": {
        "durations": [
          { "start": 0, "end": 500, "label": "buy here" }
        ],
        "timestamps": [
          { "time": 1000, "label": "label for 1 second mark"  }
        ]
      }
    },
    // These are also valid
    { "audioUrl": "http://example.com/audio.mp3" },
    { "videoUrl": "http://example.com/video.mp4" },
    { "csvUrl": "http://example.com/csv_with_time_and_value_columns.csv" }
  ]
}
```
