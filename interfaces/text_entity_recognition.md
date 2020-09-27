# Named Entity Recognition (recognize words/phrases in text)

Label named entities in text.

- Markdown instruction containing instructions.
- List of entities with descriptions.


## Schema

```javascript
{
  "interface": {
    "type": "text_entity_recognition", // or "named_entity_recognition"
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
  "samples": [
    {
      "document": "This text document is broken into selectable chunks."
    }
  ],
  // OPTIONAL
  "examples": [{
    "document": "This strainer makes a great hat, I'll wear it while I serve spaghetti",
    "annotation": {
      "entities": [
        { text: "strainer", label: "hat", start: 5, end: 12 },
        { text: "spaghetti", label: "food", start: 60, end: 68 }
      ]
    }
  }]
}
```

> The "start" and "end" are indices that are inclusive. That is, `word[start]` is the starting
> character, and `word[end]` is the ending character of each entity.

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
