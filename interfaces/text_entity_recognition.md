# Named Entity Recognition (recognize words/phrases in text)

Label named entities in text.

- Markdown instruction containing instructions.
- List of entities with descriptions.


## Schema

```javascript
{
  "interface": {
    "type": "text_entity_recognition", // or "named_entity_recognition"
    
    "description": "# MarkdownDescription", // optional
    "overlapAllowed": false, // optional
    
    // You can also provide labels as a string, e.g. ["food", "hat"]
    "labels": [
      {
        "id": "food",
        "displayName": "Food", // optional
        "description": "Edible item." // optional
      },
      {
        "id": "hat",
        "displayName": "Hat", // optional
        "description": "Something worn on the head." // optional
      }
    ]
  },
  "samples": [
    {
      "document": "This text document is broken into selectable chunks.",
      
      // annotation can be undefined for new samples
      "annotation": [
        { "text": "strainer", "label": "hat", "start": 5, "end": 12 },
        { "text": "spaghetti", "label": "food", "start": 60, "end": 68 }
      ]
    }
  ]
}
```

> The "start" and "end" are indices that are inclusive. That is, `word[start]` is the starting
> character, and `word[end]` is the ending character of each entity.
