# Image Label

`image_label` is for training an AI to classify a region of an image (or an entire image). Classifications come from an existing set of possible answers.

For complex answer logic, text questions, and multiple simultaneous classifications use the [data_entry](https://github.com/OpenHumanAnnotation/oha-format/blob/master/interfaces/data_entry.md) type with `imageUrl`s in `samples`.

## Schema

```javascript
{
  "interface": {
    "type": "image_label",

    // A list of labels available
    "availableLabels": ["human", "dog", "cat"],
    /* Also valid:
    "availableLabels": [
      { "id": "human", "name": "Human", "description": "A person." },
      { "id": "dog", "name": "Dog", "description": "A furry four legged creature" },
      { "id": "cat", "name": "Cat", "description": "Furry creature with whiskers" }
     ]
    */
  },
  "samples": [
    {
      // URL pointing to image
      "imageUrl": "https://...",

      // Path to image. Available if upload is zip.
      "imagePath": "imgs/myimage1.jpg"

      // Region to be labeled (if not specified, entire image is labeled)
      "region": {/* determined by regionFormat */}
    }
  },
  "examples": [
    {
      /* ... same information as samples ... */

      // Expected annotation
      "annotation": "label"
    }
  ]
}
```
