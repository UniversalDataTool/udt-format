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
| image_label        |                                               |
| image_segmentation |                                               |
| data_collection    |                                               |
| sentiment_analysis |                                               |
| content_moderation |                                               |
| transcription      |                                               |
| deduplication      |                                               |
| text_correction    |                                               |

### image_label Interface

```javascript
{
}
```

## Task Data



## Example

