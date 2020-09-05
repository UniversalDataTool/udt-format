# Image Segmentation

`image_segmentation` is for training an AI to to determine an area or outline within an image and potentially classify the identified area. Typically classifications come from an existing set of possible answers.

## Schema

```javascript
{
  "interface": {
    "type": "image_segmentation",

    // A list of labels available
    "labels": ["human", "dog", "cat"],
    /* Also valid:
    "labels": [
      { "id": "human", "displayName": "Human", "description": "A person." },
      { "id": "dog", "displayName": "Dog", "description": "A furry four legged creature" },
      { "id": "cat", "displayName": "Cat", "description": "Furry creature with whiskers" }
     ],
    */
    
    "allowedArea": { "x": 0, "y": 0, "width": 1, "height": 1 }, // by default, the entire image

    // Optional: The type of region allowed. By default, any region is acceptable.
    "regionTypesAllowed": ["bounding-box", "polygon", "point"],

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
    {
      // URL pointing to image
      "imageUrl": "https://..."
    },
    {
      "videoUrl": "https://....mp4",
      "videoFrameAt": 2000 // ms
    },
    {
      "videoUrl": "https://....mp4",
      "videoFrame": 48 // frame #
    }
  },
  "examples": [
    {
      "imageUrl": "https://...",
      // Can be array or object depending on the value of `interface.multipleRegions`
      "annotation": [{/* Shape */}]
    }
  ]
}
```

## Shapes

Different regions have different JSON representations. All the numbers are represented as a percentage of the image width and height, not as pixels. Using the image width and height, they can easily be converted to pixels.

| Region         | Description                                             | JSON Representation                                                                                                                                                         |
| -------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bounding-box` | Rectangle                                               | `{ regionType: "bounding-box", centerX, centerY, width, height }`                                                                                                           |
| `point`        | Point                                                   | `{regionType: "point", x, y }`                                                                                                                                              |
| `polygon`      | Closed polygon                                          | `{regionType: "polygon", points: [{x,y}, {x,y}, ...] }`                                                                                                                     |
| `line`         | Line made up of points                                  | `{regionType: "line", points: [{x,y}, {x,y}, ...] }}`                                                                                                                       |
| `pixel-mask`   | A 2d matrix where each cell represents a classification | `{regionType: "pixel-mask", matrix: [[0,0,1,1,1, ...], [0,0,1,1,1, ...], [0,0,1,1,1,...], ...], centerX, centerY, width, height, classifications: ["someRegionId", ...] }}` |

If `multipleRegions` is `true`, then regions in the input and annotation are expressed as arrays.

Regions can also have a `color` property which takes a CSS web color.

### Region Acceptance Criteria

The correct region is known as the target region (`T`). A region submitted by a worker is the candidate region (`C`).

#### Minimum Acceptable Difference

The Minimum Acceptable Difference technique determines the accuracy of a candidate region by examining the amount of the regions that are not overlapping relative to the total size of the target region.

The area of `T` and `C` that is overlapping (where both regions are on top of eachother) is `Overlap(T,C)`. The area that is not overlapping is `Difference(T,C)`.

`relativeDifference = Difference(T,C) / Area(T)`

As the candidate region becomes less aligned, larger than or smaller than target region, the `relativeDifference` increases.

`0.1` is a good rule of thumb for a minimum acceptable difference. If you decrease the minimum acceptable difference, consider the quality of your examples.

## Examples

### Animal Classification

```javascript
{
  "interface": {
    "selectedTaskType": "image_segmentation",
    "labels": [
      {
        "id": "cat",
        "description": "Feline Mammal"
      },
      {
        "id": "dog",
        "description": "Canine Mammal"
      }
    ],
    "multipleRegions": true,
    "minimumRegionSize": 0.01,
    "overlappingRegions": true,
    "regionMinAcceptableDifference": 0.1
  },
  "samples": [
    {
      "imageUrl": "https://media.gettyimages.com/photos/dog-and-cat-picture-id151350785"
    },
    {
      "imageUrl": "https://media.gettyimages.com/photos/guess-who-rules-the-roost-in-that-house-picture-id500927195"
    },
    {
      "imageUrl": "https://media.gettyimages.com/photos/she-simply-loves-animals-picture-id499806311"
    }
  ]
}
```
