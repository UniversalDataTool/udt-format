# Time Series

> In Review: This format is still being reviewed by the community.

Label timestamps or durations in audio, video or time series data.

## Simple Example

```json
{
  "interface": {
    "type": "time_series",
    "timeFormat": "dates",
    "enabledTools": ["create-durations", "label-durations"],
    "durationLabels": ["@seveibar is speaking"]
  },
  "samples": [
    {
      "audioUrl": "https://example.com/seveibar-podcast.mp3",
      "annotation": {
        "durations": [
          { "start": 500, "end": 2000, "label": "@seveibar is speaking" }
        ]
      }
    }
  ]
}
```

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
    "timeFormat": "dates",

    "enabledTools": ["create-durations", "label-durations", "create-timestamps", "label-timestamps"],

    // Can the user manually type a new label? (free text)
    "allowCustomLabels": true,

    // Labels that can be used for durations
    "durationLabels": ["buy during this time", "sell during this time"],

    // Labels that can be used for timestamps
    "timestampLabels": ["earnings call starts", "CEO is ousted"],

    // OPTIONAL: If provided, you can layer or stack graphs
    "graphs": [ { "keyName": "value" } ] // default

    /*
    // Here's an example where we put two pieces of data on the same plot

    "graphs": [
      // if two graphs share the same row, they'll be placed on top of eachother
      // if a row isn't provided, the data corresponding to the key will get it's own row
      { "keyName": "val1", "row": 0, "color": "red" },
      { "keyName": "val2", "row": 0, "color": "blue" }
    ]
    */
  },
  "samples": [
    {
      "timeData": [
        { "time": 0, "value": 100 },
        { "time": 1000, "value": 50 },
        //...

        // You can graph any "keyName" from the "graphs" array here
        { "time": 0, "val1": 0, "val2": 0 },
        { "time": 1000, "val2": 10 },
        { "time": 2000, "val1": 100 },
        { "time": 5000, "val1": 100, "val2": 100 },

        // Times can also be specified as dates or duration strings
        { "time": "10.5s", "value": 10 },
        { "time": "1h 30m", "value": 20 },
        { "time": "02/27/1996", "value": 30 }
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

## CSV Format

Each row of the CSV is a datapoint. You'll want a column called "date" or "time", then you can have columns named
anything you want, just make sure you specify the column names in `interface.graphs`. For example, let's say you
want to load in [tesla.csv](https://gist.githubusercontent.com/philaturner/644b3e8bd17641766d90f38d475edcc6/raw/a6c35e97a89eda49098def90fe2e750ceb898f79/tesla.csv), you'll need to have a UDT file that looks like this:

```javascript
{
  "name": "New time_series Dataset",
  "interface": {
    "type": "time_series",
    "timeFormat": "dates",
    "enabledTools": [
      "create-durations",
      "label-durations"
    ],
    "graphs": [
      {
        "keyName": "high",
        
      },
      {
        "keyName": "low"
      }
    ]
  },
  "samples": [
    {
      "_id": "sdjceu96y",
      "csvUrl": "https://gist.githubusercontent.com/philaturner/644b3e8bd17641766d90f38d475edcc6/raw/a6c35e97a89eda49098def90fe2e750ceb898f79/tesla.csv"
    }
  ]
}
```

You can also combine lines so they appear on the same row using the `row` key (this looks a lot better for the
tesla data!)

```javascript
{
  "name": "New time_series Dataset",
  "interface": {
    "type": "time_series",
    "timeFormat": "dates",
    "enabledTools": [
      "create-durations",
      "label-durations"
    ],
    "graphs": [
      {
        "keyName": "high",
        "row": 0
      },
      {
        "keyName": "low",
        "row": 0
      }
    ]
  },
  "samples": [
    {
      "_id": "sdjceu96y",
      "csvUrl": "https://gist.githubusercontent.com/philaturner/644b3e8bd17641766d90f38d475edcc6/raw/a6c35e97a89eda49098def90fe2e750ceb898f79/tesla.csv"
    }
  ]
}
```
