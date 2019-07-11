# Image Segmentation

`image_segmentation` is for training an AI to to determine an area or outline within an image and potentially classify the identified area. Typically classifications come from an existing set of possible answers. For building a set of classifications, see the [set_builder](#set-builder) interface.

## Schema

```javascript
{
  "interface": {
    "type": "image_segmentation",
  
    // A list of labels available
    "availableLabels": ["human", "dog", "cat"],
    /* Also valid:
    "availableLabels": [
      { "id": "human", "name": "Human", "description": "A person." },
      { "id": "dog", "name": "Dog", "description": "A furry four legged creature" },
      { "id": "cat", "name": "Cat", "description": "Furry creature with whiskers" }
     ]
    */
    
    // Pull from a common list of labels
    "labelType": "animals",
    
    // How regions are specified in input and output
    "regionFormat": "percentage_xywh"
        
    // What does the region represent? See common region descriptions.
    "regionDescription": "faces",
    
    // Should multiple regions be created?
    "multipleRegions": true,
    
    // What is the smallest allowed size per region as a percentage of the image area?
    "minimumRegionSize": 0.01,
    
    // Are regions allowed to overlap?
    "overlappingRegions": true,
    
    // For a region to be acceptable, how much overlap should it have with the solution set?
    "regionMinAcceptableDifference": 0.1
  },
  "taskData": [
    {
      // URL pointing to image
      "imageUrl": "https://...",

      // Path to image. Available if upload is zip.
      "imagePath": "imgs/myimage1.jpg"
    }
  },
  "examples": [
    {
      /* ... same information as taskData ... */
      
      // Expected output
      "output": {/* determined by regionFormat*/}
    }
  ]
}
```

## Region Formats

| Region Format | Description |
| ------------- | ----------- |
| percentage_xywh | A four element array \[X,Y,Width,Height\] where X,Y is the percentage coordinate of the top left of a region with (0,0) in the top left corner. Width and Height are expressed as a percentage of the image.
| pixel | Indicate whether each pixel is part of the region |
| percentage_polyline_xy | An array of lines making up a closed shape, where each line is an array containing an array containing the coordinates e.g. \[\[\[x1,y1\],\[x2,y2\], \[x3,y3\]\]\] |

If `multipleRegions` is `true`, then regions are expressed as arrays.

e.g. if the `regionFormat` is `percentage_xywh`

| `multipleRegions` | `region`/`output` |
| ----------------- | ----------------- |
| `false`           | `[0.1,0.2,0.5,0.5]` |
| `true`            | `[[0.1,0.2,0.5,0.5], [0.4, 0.2, 0.2, 0.2]]` |

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
  "targetAccuracy": 0.98,
  "targetDeliveryTime": "24 hours",
  "interface": {
    "selectedTaskType": "image_segmentation",
    "availableLabels": [
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
  "taskData": [
    {
      "imageUrl": "https://media.gettyimages.com/photos/dog-and-cat-picture-id151350785"
    },
    {
      "imageUrl": "https://media.gettyimages.com/photos/guess-who-rules-the-roost-in-that-house-picture-id500927195"
    },
    {
      "imageUrl": "https://media.gettyimages.com/photos/she-simply-loves-animals-picture-id499806311"
    }
  ],
  "examples": []
}
```
