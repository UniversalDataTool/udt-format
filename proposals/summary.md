# Summary

> **UNSTABLE** This is a work in progress

The top-level `summary` key can be used to deliver a smaller overview of an entire dataset. This is useful in settings where the UDT Dataset is massive and
not available in it's entirety to users (only through a collaborative server).

A summary is redundant when the dataset is provided in full, so this property does not need to be in a \*.udt.json file, i.e. it's optional.

```javascript
{
  summary: {
    samples: [
      {
        _id: "id1",
        hasAnnotation: false,
        version: 0
      },
      // ...
    ]
  }
}
```
