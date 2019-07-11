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
