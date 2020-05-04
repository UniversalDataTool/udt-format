# Image Classification

`image_classification` is for training an AI to classify a region of an image (or an entire image). Classifications come from an existing set of possible answers.

For complex answer logic, text questions, and multiple simultaneous classifications use the [data_entry](https://github.com/OpenHumanAnnotation/oha-format/blob/master/interfaces/data_entry.md) type with `imageUrl`s in `samples`.

## Schema

```javascript
{
  "interface": {
    "type": "image_classification",

    // A list of labels available
    "labels": ["human", "dog", "cat"],
    /* Also valid:
    "labels": [
      { "id": "human", "displayName": "Human", "description": "A person." },
      { "id": "dog", "displayName": "Dog", "description": "A furry four legged creature" },
      { "id": "cat", "displayName": "Cat", "description": "Furry creature with whiskers" }
     ]
    */
  },
  "samples": [
    {
      // URL pointing to image
      "imageUrl": "https://...",

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
