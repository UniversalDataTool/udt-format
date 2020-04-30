# Video Segmentation

The `video_segmentation` interface allows you to classify videos or place bounding boxes, polygons or regions with labels on a video.

## Schema

```javascript
{
  "interface": {
    "type": "video_segmentation",
    "description"?: MarkdownDescription,

    // A list of labels available
    "availableLabels": ["human", "dog", "cat"],
    /* Also valid:
    "availableLabels": [
      { "id": "human", "name": "Human", "description": "A person." },
      { "id": "dog", "name": "Dog", "description": "A furry four legged creature" },
      { "id": "cat", "name": "Cat", "description": "Furry creature with whiskers" }
     ],
    */

    // Optional: The type of region allowed. By default, any region is acceptable.
    "regionTypesAllowed": ["bounding-box", "polygon", "full-segmentation", "point", "pixel-mask"],

    // What does the region represent?
    "regionDescription": "faces",

    // Should there be multiple classifications for each region?
    "multipleRegionLabels": false,

    // Should multiple regions be created?
    "multipleRegions": true,

    // What is the smallest allowed area per region as a percentage of the image area?
    "minimumRegionSize": 0.01,

    // Are regions allowed to overlap?
    "overlappingRegions": true,

    // For a region to be acceptable, how much overlap should it have with the solution set?
    "regionMinAcceptableDifference": 0.1
  },
  "samples": [
    // These are all different types of task data that are acceptable
    { videoUrl: "https://..." }
  ],
  "examples": [
    {
      videoUrl: "https://...",
      annotation: [/** Regions **/]
    }
  ]
}
```
