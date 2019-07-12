# Text Entity Recognition

Label named entities in text.

* Markdown instruction containing instructions.
* List of entities with descriptions.

## Schema

```javascript
{
  "interface": {
    "type": "data_entry",
    "description"?: MarkdownDescription,
    "overlapAllowed": false,
    "labels": [
      {
        "id": "food",
        "displayName"?: "Food",
        "description"?: "Edible item."
      },
      {
        "id": "hat",
        "displayName"?: "Hat",
        "description"?: "Something worn on the head."
      }
    ]
  },
  "taskData": [
    {
      "document": "This strainer makes a great hat, I'll wear it while I serve spaghetti!"
    }
  ]
}
```

## Output Format

```javascript
// Input
{
  "document": "This strainer makes a great hat, I'll wear it while I serve spaghetti!"
}

// Output
{
  "entities": [
    { text: "strainer", label: "hat", start: 5, end: 13 },
    { text: "spaghetti", label: "food", start: 60, end: 69 }
  ]
}
```
