# Video Segmentation

> ***Unstable*** This is currently a draft

The `video_segmentation` interface allows you to classify videos or place bounding boxes, polygons or regions with labels on a video.

## Schema

```javascript
{
  "interface": {
    "type": "video_segmentation",
    "description"?: MarkdownDescription,
  },
  "taskData": [
    // These are all different types of task data that are acceptable
    { videoUrl: "https://..." }
  ],
  "examples": [
    {
      data: { videoUrl: "https://..." },
      output: [/** Regions **/]
    }
  ]
}
```
## Output

TODO
