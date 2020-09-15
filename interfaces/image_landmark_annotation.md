# Image Landmark Annotation

Image landmark annotation allows you to annotate sets of related points, such as the positions on a human body while dancing, positions of legs of a pig on a treadmill, or the movement of landmarks on a face.

Landmark annotation was originally proposed [in this issue](https://github.com/UniversalDataTool/universal-data-tool/issues/285).

## Schema

```javascript
{
  "interface": {
    "type": "image_landmark_annotation",

    // Different configurations of poses / keypoints
    "keypointDefinitions": {
      
      // This is a pose definition for the upper half of a human
      human: {
      
        // Each landmark is a point on the pose.
        landmarks: {
          head: {
            label: "Head",
            color: "#f00",
            // The default position is the position relative to the cursor
            // in [image_width%, image_height%] to place this point at when
            // a pose is created
            defaultPosition: [0, -0.05],
          },
          sternum: {
            label: "Torso",
            color: "#0f0",
            defaultPosition: [0, 0],
          },
          leftElbow: {
            label: "Left Elbow",
            color: "#00f",
            defaultPosition: [-0.05, 0],
          },
          rightElbow: {
            label: "Right Elbow",
            color: "#00f",
            defaultPosition: [0.05, 0],
          },
        },
        
        // The connections will determine what lines are drawn between points, they
        // are only aesthetic
        connections: [
          ["head", "sternum"],
          ["sternum", "leftElbow"],
          ["sternum", "rightElbow"],
        ]
      }
    }
  },
  "samples": [
    {
      // URL pointing to image
      "imageUrl": "https://..."
    },
    {
      "videoUrl": "https://....mp4",
      "videoFrameAt": 2000 // ms
    },
    {
      "videoUrl": "https://....mp4",
      "videoFrame": 48 // frame #
    }
  },
  "examples": [
    {
      "imageUrl": "https://...",
      // Can be array or object depending on the value of `interface.multipleRegions`
      "annotation": [{/* Shape */}]
    }
  ]
}
```

## Shapes

Different regions have different JSON representations. All the numbers are represented as a percentage of the image width and height, not as pixels. Using the image width and height, they can easily be converted to pixels.

| Region         | Description                                             | JSON Representation                                                                        |
| -------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `keypoints`    | One pose or set of keypoints                            | `{ regionType: "keypoints", points: KeypointsObject }`                                     |

### `KeypointsObject`

An example KeypointsObject is show below. All `x` and `y` are in percentage of image width or percentage of image height.

```
{
  regionType: "keypoints",
  points: {
    head: { x: 0.54, y: 0.2 },
    sternum: { x: 0.57, y: 0.3 },
    leftElbow: { x: 0.4, y: 0.39 },
    rightElbow: { x: 0.7, y: 0.32 }
  }
}
```


## Examples

### Animal Classification

```javascript
{
  "interface": {
    "type": "image_landmark_annotation",

    // Different configurations of poses / keypoints
    "keypointDefinitions": {
      
      // This is a pose definition for the upper half of a human
      human: {
      
        // Each landmark is a point on the pose.
        landmarks: {
          head: {
            label: "Head",
            color: "#f00",
            // The default position is the position relative to the cursor
            // in [image_width%, image_height%] to place this point at when
            // a pose is created
            defaultPosition: [0, -0.05],
          },
          sternum: {
            label: "Torso",
            color: "#0f0",
            defaultPosition: [0, 0],
          },
          leftElbow: {
            label: "Left Elbow",
            color: "#00f",
            defaultPosition: [-0.05, 0],
          },
          rightElbow: {
            label: "Right Elbow",
            color: "#00f",
            defaultPosition: [0.05, 0],
          },
        },
        
        // The connections will determine what lines are drawn between points, they
        // are only aesthetic
        connections: [
          ["head", "sternum"],
          ["sternum", "leftElbow"],
          ["sternum", "rightElbow"],
        ]
      }
    }
  },
  "samples": [
    {
      // URL pointing to image
      "imageUrl": "https://media.gettyimages.com/photos/dog-and-cat-picture-id151350785",
      "annotation": {
        regionType: "keypoints",
        points: {
          head: { x: 0.54, y: 0.2 },
          sternum: { x: 0.57, y: 0.3 },
          leftElbow: { x: 0.4, y: 0.39 },
          rightElbow: { x: 0.7, y: 0.32 }
        }
      }
    }
  ]
}
```
