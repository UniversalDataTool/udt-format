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
      "annotation": {
        "entities": [
          {
            "text": "text document",
            "label": "hat",
            "start": 5,
            "end": 18
          },
          {
            "text": "selectable chunks",
            "label": "food",
            "start": 34,
            "end": 51
          }
        ]
      }
    }
  ]
}
```

<details>
  <summary>JSON Example without comments</summary>
  ```json
  {
  "interface": {
    "type": "text_entity_recognition",
    "description": "# MarkdownDescription",
    "overlapAllowed": false,
    "labels": [
      {
        "id": "food",
        "displayName": "Food",
        "description": "Edible item."
      },
      {
        "id": "hat",
        "displayName": "Hat",
        "description": "Something worn on the head."
      }
    ]
  },
  "samples": [
    {
      "document": "This text document is broken into selectable chunks.",
      "annotation": {
        "entities": [
          {
            "text": "text document",
            "label": "hat",
            "start": 5,
            "end": 18
          },
          {
            "text": "selectable chunks",
            "label": "food",
            "start": 34,
            "end": 51
          }
        ]
      }
    }
  ]
}
  ```
</details>

> The "start" and "end" are indices that are inclusive. That is, `word[start]` is the starting
> character, and `word[end]` is the ending character of each entity.

