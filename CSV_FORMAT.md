# Universal Data Tool Format (*.udt.csv) Specification

***UNSTABLE***

A `*.udt.csv` file can be used the same way as a `*.udt.json` file. An example `*.udt.csv` file is show below:

TODO

For information on how this is converted to and from a JSON representation [see the JAC CSV format specification](https://github.com/seveibar/jac-format).

## Motivation

The Universal Data Tool format is natively in JSON, but many times it's easier to inspect and process data in a simple CSV format where each row represents a sample. However, limitations to how metadata can be stored in CSV files make this difficult. As a result we store some metadata in the first rows of a `*.udt.csv` file.

The structure of a `*.udt.csv` 
