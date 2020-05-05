# Text Classification

Categorize text.

- Markdown instruction containing instructions
- List of categories with descriptions
- Classify into one or more categories.

## Schema

```javascript
{
  "interface": {
    "type": "text_classification",
    "description"?: MarkdownDescription,
    "multiple": false,
    "labels": [
      {
        "id": "gryffindor",
        "displayName": "Gryffindor",
        "description"?: "Daring, strong nerve and chivalry."
      },
      {
        "id": "slytherin",
        "displayName": "Slytherin",
        "description"?: "Cunning and ambitious. Possibly dark wizard."
      }
    ]
  },
  "samples": [
    // These are all different types of task data that are acceptable
    {
      "document": "Harry",
    },
    {
      "document": "Malfoy",
    }
  ],
  "examples": [
    {
      // same as samples...
      "annotation": "gryffindor"
    }
  ]
}
```

## Annotation

Annotation will be either the label id or an array of label ids depending `interface.multiple`.

```javascript
// Input Data
{
  "document": "Harry"
}

// Annotation
"gryffindor"
```

For multiple classifications, the annotation will be shown as an array.

```javascript
// Input Data
{
  "document": "Could you label me?"
}

// Annotation
{
  "labels": ["question", "about-labeling"]
}
```
