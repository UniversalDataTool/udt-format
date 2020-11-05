# Filesystem Storage of UDT Files

UDT datasets can be broken down into files in a filesystem for easier storage. Cloud storage
of UDT files can mimic the proposed filesystem structure to make UDT datasets easier to browse
and edit.

The diagram below shows an example of the directory structure.

```
.
├── index.json
├── assets
│   ├── audio.mp3
│   └── image.png
└── samples
    ├── custom-id-can-be-anything.json
    ├── sample-custom-id-1.json
    └── sample-custom-id-2.json
```

Here's an overview of the different file types/directories:

* **index.json**: An index containing interface details of the dataset and any other top-level UDT json keys
* **assets**: Any files used within samples
* **samples**: Exclusively UDT sample files. Each JSON file within represents a single sample of `dataset.samples`

## sample.json

Each sample file represents a single sample.

```json
{
  // Any image url can be used here, we're using an s3 url here, but it could be https:// for file://
  "imageUrl": "s3://my-bucket/assets/audio.mp3",
  "annotation": {
      // ...
  }
}
```

If absolute paths to resources are not possible, the word `$PROJECT_DIR` can be used instead.

{
  "imageUrl": "$PROJECT_DIR/assets/audio.mp3",
  "annotation": {
      // ...
  }
}
```

