# Image Pixel Segmentation

`image_pixel_segmentation` is for training an AI to classify every pixel in an image.

## Schema

```javascript
{
  "interface": {
    "type": "image_pixel_segmentation",

    // A list of labels available
    "labels": ["human", "dog", "cat"],
    /* Also valid:
    "labels": [
      { "id": "human", "displayName": "Human", "description": "A person." },
      { "id": "dog", "displayName": "Dog", "description": "A furry four legged creature" },
      { "id": "cat", "displayName": "Cat", "description": "Furry creature with whiskers" }
     ],
    */
    
    // Allowed area to annotate on the image
    // Note: This can also be placed on individual samples
    "allowedArea": { "x": 0, "y": 0, "width": 1, "height": 1 }, // by default, the entire image
    
    // The engine to use for automatic segmentation (filling in pixels with guesses)
    "autoSegmentationEngine": {
      "autoseg": { "version": "alpha" } // this is the default engine
      // "simple-polygon-mask": {}
    }
  },
  "samples": [
    {
      // URL pointing to image
      "imageUrl": "https://..."
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

## Output Shapes

Different regions have different JSON representations. All the numbers are represented as a percentage of the image width and height, not as pixels. Using the image width and height, they can easily be converted to pixels.

| Region         | Description                                             | JSON Representation                                                                                                                                                         |
| -------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bounding-box` | Rectangle                                               | `{ regionType: "bounding-box", centerX, centerY, width, height }`                                                                                                           |
| `point`        | Point                                                   | `{regionType: "point", x, y }`                                                                                                                                              |
| `polygon`      | Closed polygon                                          | `{regionType: "polygon", points: [{x,y}, {x,y}, ...] }`                                                                                                                     |

*Note: You can query an API, use a CLI, or use the UDT to convert shapes into masks using your auto segmentation engine,
but this functionality is still being documented. For more information, reach out on [slack](https://join.slack.com/t/universaldatatool/shared_invite/zt-d8teykwi-iOSOUfxugKR~M4AJN6VL3g)*
