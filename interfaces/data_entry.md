# Data Entry

The `data_entry` interface allows you to collect data using a form. It's ideal for many data entry, classification or research purposes.

- Markdown description containing images, links or instructions. Per-task and/or universal description.
- Create a custom `surveyjs` JSON file. [This tool from surveyjs.io is very helpful](https://surveyjs.io/create-survey/). To manually create the object, [reference this specification](https://github.com/CollegeAI/material-survey/blob/master/docs/material-survey-format.md).
- PDF URLs, Image URLs, External Site URL or markdown description for each task.

## Schema

```javascript
{
  "interface": {
    "type": "data_entry",
    "description"?: MarkdownDescription,
    "surveyjs": SurveyJSObject
  },
  "samples": [
    // These are all different types of task data that are acceptable
    { pdfUrl: "https://..." },
    { markdown: "## Some Content" },
    { imageUrl: "https://..." },
    { url: "https://" },
    { surveyjs: SurveyJSObject, markdown: "..." },
    { preloadedOutput: { "FieldName": "..." } }
  ],
  "examples": [
    {
      pdfUrl: "https://...",
      output: { "FieldName": "..." }
    }
  ]
}
```

## Output

The output of data entry tasks is given by SurveyJS. Check the "Test Survey" tab using the [SurveyJS tool](https://surveyjs.io/create-survey/).
