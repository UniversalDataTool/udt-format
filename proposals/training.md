# Training

Complex datasets may require in-depth instructions for annotators to correctly provide solutions. The top-level "training" key allows
a dataset creator to create a course, full specification and exams to prepare annotators to label a dataset. The course can also give
more details that clarify the intent of the project to the annotator, which can improve results.

> Note: The UDT format already provides a mechanism for creating "examples" via the root-level "example" key. This is an
> extension to "examples" that guides annotators through the learning process.

## Training Overview

1. Markdown Explanations (including images)
2. Multiple Choice Tests with Instant Feedback
3. Graded, Retakable Multiple choice Test
4. Decision Tree Tests
5. Are these correct or incorrect?
6. Tests with IOU error feedback (instant feedback)
7. Tests with incomplete UDT mini-datasets that need to be completed
8. Tests where answers are not given (Final Exam)
