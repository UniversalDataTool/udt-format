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
    
    // Optional: The type of region allowed. By default, any region is acceptable.
    "regionTypesAllowed": ["bounding-box", "polygon", "full-segmentation", "point"],
    
    // Pull from a common list of labels
    "labelType": "animals",
        
    // What does the region represent?
    "regionDescription": "faces",
    
    // Should multiple regions be created?
    "multipleRegions": true,
    
    // What is the smallest allowed area per region as a percentage of the image area?
    "minimumRegionSize": 0.01,
    
    // Are regions allowed to overlap?
    "overlappingRegions": true,
    
    // For a region to be acceptable, how much overlap should it have with the solution set?
    "regionMinAcceptableDifference": 0.1
  },
  "taskData": [
    {
      // URL pointing to image
      "imageUrl": "https://..."
    }
  },
  "examples": [
    {
      "data": : { "imageUrl": "https://..." },
      // Can be array or object depending on the value of `interface.multipleRegions`
      "output": [{/* Shape */}]
    }
  ]
}
```

## Shapes

Different regions have different JSON representations. All the numbers are represented as a percentage of the image width and height, not as pixels. Using the image width and height, they can easily be converted to pixels.

| Region | Description | JSON Representation |
| ------ | ----------- | ------------------- |
| `bounding-box` | Rectangle | `{ regionType: "bounding-box", centerX, centerY, width, height }` |
| `point` | Point | `{regionType: "point", x, y }` |
| `polygon` | Closed polygon | `{regionType: "polygon", points: [{x,y}, {x,y}, ...] }` |
| `line` | Line made up of points | `{regionType: "line", points: [{x,y}, {x,y}, ...] }}` |

If `multipleRegions` is `true`, then regions in the input and output are expressed as arrays.

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
