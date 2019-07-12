# Text Classification

Categorize text.

* Markdown instruction containing instructions
* List of categories with descriptions
* Classify into one or more categories.

## Schema

```javascript
{
  "interface": {
    "type": "data_entry",
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
  "taskData": [
    // These are all different types of task data that are acceptable
    {
      "document": "Harry"
    },
    {
      "document": "Malfoy"
    }
  ],
  // After completion...
  "taskOutput": [
    { "label": "gryffindor" },
    { "label": "slytherin" }
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
  "label": ["question", "about-labeling"]
}
```
