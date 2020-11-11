# Text Entity Relations / Dependencies

Label relationships between entities in text.

## Schema

```javascript
{
  "interface": {
    "type": "text_entity_relations",
    "description"?: MarkdownDescription,
    "entityLabels": [
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
    ],
    "relationLabels": [
      {
        "id": "subject-doing",
        "displayName"?: "Subject Doing",
        "description"?: "X subject is doing Y verb"
      }
    ],

    // Optional: The regex that captures a single word
    "wordSplitRegex": "[a-zA-ZÀ-ÿ]+"
  },
  "samples": [
    {
      "document": "This text document is broken into selectable chunks."
    }
  ],
}
```

> The "start" and "end" are indices that are inclusive. That is, `word[start]` is the starting
> character, and `word[end]` is the ending character of each entity.

## Examples

```javascript
// dataset.samples[0]
{
  "document": "This strainer makes a great hat, I'll wear it while I serve spaghetti!"
}

// dataset.samples[0].annotation
{
  "entities": [
    { text: "strainer", label: "hat", start: 5, end: 13, textId: "id1" },
    { text: "spaghetti", label: "food", start: 60, end: 69, textId: "id2" },
    { text: "I'll", start: 33, end: 37, textId: "id3" },
    { text: "wear", start: 38, end: 42, textId: "id4" }
  ],
  "relations": [
    { from: "id3", to: "id4", label: "subject-doing" }
  ]
}
```
