# Composite

Use the `composite` interface type to combine several interfaces together.

## Schema

```javascript
{
  "interface": {
    "type": "composite",

    "fields": [
      {
        "fieldName": "some_field_name",
        "interface": { /*... OHA interface definition ...*/ }
      }
    ]
  },
  "samples": [
    {
      /*
        Any applicable task data for the defined interfaces
      */
    }
  },
  "examples": [
    {
      /* ... same information as samples ... */

      // Expected annotation
      "annotation": {
        // Each key is a fieldName, the annotation is the annotation from that interface
        "some_field_name": {/*... whatever annotation goes with the interface defined for this field ...*/}
      }
    }
  ]
}
```
