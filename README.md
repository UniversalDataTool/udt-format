# Open Human Annotation Task Format

This document describes the Open Human Annotation format, an open-source format for describing task descriptions for human annotation jobs.

The following items are examples of human annotation tasks...
* Drawing bounding boxes around objects or people in images.
* Identifying key words and intent of text conversations
* Collecting and augmenting data via internet research

## Structure

The scope of this document is broad and expected to undergo many iterations as advancements in the field define new interfaces for analyzing data and new types of datasets. Sections of the API that are subject to change are marked with ***UNSTABLE***.

## Principles

The purpose of the Open Human Annotation Format is to make attaining human annotations simple and effective for organizations with AI and machine learning datasets. To this end, this format aims to accomplish all of the following important objectives...
* **Complete Specificity** such that no custom documents or conversations are required to perform the task.
* A framework for **Predictable Quality**, so the accuracy and tolerance of the output dataset is known.
* A framework for **Instantaneous Quoting** such that AI organizations can instantly see the cost of a project and compare with other providers to get the best rate.

## Terminology

* **Resultant Set** The solution dataset resulting from the human annotations

## Schema

```javascript
{
  // Optional: Desired accuracy for the resultant set
  "targetAccuracy": 0.99,
  
  // Optional: Target amount of time for the task to be completed in
  "targetDeliveryTime": "6 hours",
  
  // Optional: Maximum budget in USD,
  "maxBudget": 75.00,
  
  // Interface details
  "interface": { /* See Interface Specification */ },
  
  // Data for tasks to be performed
  // E.g. Each task could be 1 image to be annotated, 1 paragraph to be annotated etc.
  "taskData": [ /* See Task Data Specification */ ],
  
  // Solution examples, can be used to evaluate workers
  "examples": [ /* See Example Specification */ ]
}
```

## Interfaces

| Interface          | Description                                   |
| ------------------ | --------------------------------------------- |
| image_label        |  Assign label(s) to an image or a predefined region of an image  |
| image_segmentation |  Surround region(s) of an image, optionally labeling region(s).                                             |
| video_label | Assign label(s) to a video or region(s) 
| data_collection    | Retrieve information from source(s) or the internet.                                              |
| text_sentiment_analysis | Analyze the sentiment of a message.                                              |
| text_content_moderation | Analyze content for profanity, bullying or custom criteria.                                              |
| transcription      | Derive text from images or video.                                              |
| deduplication      | Compare information and remove duplicates.                                              |
| text_correction    | Proofread text.                                              |
| video_label | Assign label(s) to a video or labels to regions within an image |
| video_segmentation | Surround region(s) containing objects within a video, optionally tagging object(s) |

### image_label

TODO image of labeling interface.

`image_label` is for training an AI to classify a region of an image (or an entire image). Typically classifications come from an existing set of possible answers. For building a set of classifications, see the [set_builder](#set-builder) interface.

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
    
    // Pull from a common list of labels
    "labelType": "animals",
    
    // How regions are specified in input and output
    "regionFormat": "percentage_xywh",
  },
  "taskData": [
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
      /* ... same information as taskData ... */
      
      // Expected output
      "output": "label"
    }
  ]
}
```

### image_segmentation

TODO image of segmentation interface.

`image_segmentation` is for training an AI to to determine an area or outline within an image and potentially classify the identified area. Typically classifications come from an existing set of possible answers. For building a set of classifications, see the [set_builder](#set-builder) interface.

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
    
    // 
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


## Task Data



## Example

## Misc

### Region Formats

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

