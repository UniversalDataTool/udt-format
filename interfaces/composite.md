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
  "taskData": [
    {
      /*
        Any applicable task data for the defined interfaces
      */
    }
  },
  "examples": [
    {
      /* ... same information as taskData ... */
      
      // Expected output
      "output": {
        // Each key is a fieldName, the output is the output from that interface
        "some_field_name": {/*... whatever output goes with the interface defined for this field ...*/}
      }
    }
  ]
}
```
