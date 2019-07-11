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
  // Interface details
  "interface": { /* see "Interfaces" */ },
  
  // Data for tasks to be performed
  // E.g. Each task could be 1 image to be annotated, 1 paragraph to be annotated etc.
  "taskData": [ /* see the task data spec for the chosen interface */ ],
  
  // Optional: solution examples, can be used to evaluate workers
  "examples": [ /* see example spec for chosen interface  */ ],
  
  // Optional: delivery parameters, e.g. budget or timeframe to complete within
  "delivery": { /* see delivery spec */ }
}
```

## Interfaces

Click the link on any interface to see it's full schema, examples, and specification details.

| Interface          | Description                                   |
| ------------------ | --------------------------------------------- |
| [image_label](https://github.com/OpenHumanAnnotation/open-human-annotation-task-format/blob/master/interfaces/image_label.md)        |  Assign label(s) to an image or a predefined region of an image  |
| [image_segmentation](https://github.com/OpenHumanAnnotation/open-human-annotation-task-format/blob/master/interfaces/image_segmentation.md) |  Surround region(s) of an image, optionally labeling region(s).                                             |
| video_label | Assign label(s) to a video or region(s) 
| [data_entry](https://github.com/OpenHumanAnnotation/open-human-annotation-task-format/blob/master/interfaces/data_entry.md)    | Retrieve fields from source(s) or the internet.                                              |
| text_sentiment_analysis | Analyze the sentiment of a message.                                              |
| text_content_moderation | Analyze content for profanity, bullying or custom criteria.                                              |
| transcription      | Derive text from images or video.                                              |
| deduplication      | Compare information and remove duplicates.                                              |
| text_correction    | Proofread text.                                              |
| video_label | Assign label(s) to a video or labels to regions within an image |
| video_segmentation | Surround region(s) containing objects within a video, optionally tagging object(s) |
| [text_classification](https://github.com/OpenHumanAnnotation/open-human-annotation-task-format/blob/master/interfaces/text_classification.md) |  Categorize text.                                             |
| [text_entity_recognition](https://github.com/OpenHumanAnnotation/open-human-annotation-task-format/blob/master/interfaces/text_entity_recognition.md) |  Label named entities in text.                                             |

## Delivery

If the dataset is being uploaded to a provider, this provides information regarding your timeline and desired accuracy.

```javascript
{
  // Optional: Desired accuracy for the resultant set
  "targetAccuracy": 0.99,

  // Optional: Target amount of time for the task to be completed in
  "targetDeliveryTime": "6 hours",

  // Optional: Maximum budget in USD,
  "maxBudget": 75.00
}
```

