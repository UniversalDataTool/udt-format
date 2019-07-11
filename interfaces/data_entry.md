# Data Entry

The `data_entry` interface allows you to collect data using a form. It's ideal for many data entry, classification or research purposes.

* Markdown description containing images, links or instructions. Per-task and/or universal description.
* Create a custom `surveyjs` JSON file. [This tool is very helpful](https://surveyjs.io/create-survey/).
* PDF URLs, Image URLs, External Site URL or markdown description for each task.

## Schema

```javascript
{
  "interface": {
    "type": "data_entry",
    "description"?: MarkdownDescription,
    "surveyjs": SurveyJSObject
  },
  "taskData": [
    // These are all different types of task data that are acceptable
    { pdfUrl: "https://..." },
    { markdown: "## Some Content" },
    { imageUrl: "https://..." },
    { url: "https://" },
    { surveyjs: SurveyJSObject, markdown: "..." }
  ]
}
```

