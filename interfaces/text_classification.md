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
      output: { "label": "gryffindor" }
    }
  ]
}
```

## Output

Output will be either the label id or an array of label ids depending `interface.multiple`.

```javascript
// Input
{
  "document": "Harry"
}

// Output
{
  "label": "gryffindor"
}
```

For multiple classifications, the output will be shown as an array.

```javascript
// Input
{
  "document": "Could you label me?"
}

// Output
{
  "labels": ["question", "about-labeling"]
}
```
