# Linkset

Index
-----

 * Introduction
 * Requirements
 * Recommended modules and packages
 * Installation
 * Usage
 * Development
 * Maintainers

## Introduction

Serialization and utility library for application/linkset+json documents.

The RFC 9264 specification defines two formats and associated media types for representing sets of links as standalone documents. This library provides various utilities to work with the JSON based format of RFC 9264.

Read more about the linkset specification on [RFC 9264 on datatracker.ietf.org website](https://datatracker.ietf.org/doc/rfc9264/).

## Requirements

This project has no other node package as dependency.


## Installation

Install the package via `npm`:

```sh
$ npm i @drupal/linkset
```

## Usage

```js
import { denormalize, parse } from '@drupal/linkset';
```

### Function `denormalize`

Denormalizes a set of links into an instance of a Linkset.


|Params | Type | Description |
| ---   | ---  | ---         |
| normalized | `NormalizedLinksetInterface ` | JavaScript object representing linkset |

E.g. usage

```js
import { denormalize } from '@drupal/linkset';
// Fetch the linkset data using your custom logic.
const linksetDataString = custom_function_to_fetch_linkset_data_as_string();
// Use denormalize to convert the data.
// Notice the usage of JSON.parse which converts JSON string into a
// JavaScript object.
const linkset = denormalize(JSON.parse(linksetDataString));
```

### Function `parse`

Parses an application/linkset+json document into a Linkset instance.

The difference between `denormalize` and `parse` is the input parameter.
`parse` expects a JSON string, while `denormalize` expects an object.

|Params | Type | Description |
| ---   | ---  | ---         |
| json | `string ` | The JSON Data string adhering to linkset specificaiton |

E.g. usage

```js
import { parse } from '@drupal/linkset';
// Fetch the linkset data using your custom logic.
const linksetDataString = custom_function_to_fetch_linkset_data_as_string();
// Use the `parse` utility to convert the data.
const linkset = parse(linksetDataString);
```

### TypeScript Support

For those who are developing using TypeScript, you can import the available types as shown below.

E.g. usage

```js
import {
    LinkInterface,
    LinksetInterface,
    NormalizedLinksetInterface,
    NormalizableLinksetInterface } from '@drupal/linkset';

```

## Development

Development of this project is currently happening in [Drupal.org](https://www.drupal.org/project/linkset)


## Maintainers

Current maintainers:

 * Gabe Sullice ([gabesullice](https://www.drupal.org/u/gabesullice))
 * Brian Perry([brianperry](https://www.drupal.org/u/brianperry))
