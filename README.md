Lord Of The Rings SDK

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

This SDK has been created for a purpose of making a bridge to [Lord Of The Rings API](https://the-one-api.dev/).
With this SDK you are able to have an access to movies API of LoTR.
Simple to install and easy to use.

[Requirements](#requirements)

[Installation](#installation)

[SDK Initialization](#sdk-initialization)

[Before use](#before-use)

[SDK Methods](#sdk-methods)

- [Movies](#movies)

[Development](#development)

- [Testing](#testing)
- [Design](#design)

[Contacts](#contacts)

---

## Requirements

For using all the functionality you will need to register at the [API WebSite](https://the-one-api.dev/sign-up).
After success registration you will have an **API key**, that will be used for normal work of the SDK.

## Installation

First, run the following script in your command line:

```bash
npm install trots-vitalii-sdk
```

## SDK Initialization

You have to import SDK to your application and provide following arguments to it:

- **apiKey** *(key that was retrieved from API)*
- **options** *(optional parameter to set cache and logger)*

Options argument is not a requirement.
It has two properties

- **cacheTime**: Number *(time in milliseconds to reset cache)*
- **loggerEnabled**: Boolean *(initialize an SDK with logger)*

### CommonJS

Common JS SDK initialization example with setting cache reset to 10 seconds and enabling logger:

```javascript
const { LoTRSdk } = require('trots-vitalii-sdk');

const sdk = LoTRSdk('_YourApiKey', { cacheTime: 10000, loggerEnabled: true });
```

### ES Modules

ES Modules SDK initialization example with disabled logger and no cache:

```javascript
import { LoTRSdk } from 'trots-vitalii-sdk';

const sdk = LoTRSdk('_YourApiKey', { loggerEnabled: false });
```

## Before use

We recommend enabling the cache as the API has a limit on the number of requests (about 1 request per 6 seconds on average). Note that you will need to initialize SDK at the top level, to use the same scope for all users and share cached responses between them.

## SDK methods

SDK is created to make developers life easier. However it is just a layer between developers and API.

### Methods

Initialized SDK includes block of functions to operate with movies API of LoTR site.

- getAllMovies(params);
- searchMovieByName(name, params);
- getMovie(id);
- getQuotesOfMovie(id, params);

```javascript
import { LoTR } from 'trots-vitalii-sdk';

const sdk = LoTR(apiKey);
sdk.movies.getAllMovies()
   .then((result) => console.log(result));
```

### Params object

Object called **params** is an optional object and might consist following properties:

- **limit**?: number;
- **offset**?: number;
- **page**?: number;
- **sort**?: Array<Array<string, string>>;
- **filters**?: Array<Array<string, string, string>>;

#### Recommendations

1. Use **offset** and **page** properties separately. It's about a pagination concept, choose one to proceed with.

2. You can use **sort** property to apply sorting. Not every endpoint supports it, so make sure you are tested such use case in advance.
You have to provide an array of arrays to **sort**, where each nested array has two string elements: field name and direction.

3. You can use **filters** property to apply filtering. Not every endpoint supports it, so make sure you are tested such use case in advance. You have to provide an array of arrays to **filter**, where each nested array has three elements: field name, operator and value(s). Value can be string or array of strings.

**Sorting example:**

```javascript
import { LoTRSdk } from 'trots-vitalii-sdk';

const sdk = LoTRSdk(apiKey);
const params = { sort: [['name', 'desc']] };
sdk.movies.getAllMovies(params)
   .then((result) => console.log(result));
```

**Filtering example:**

```javascript
import { LoTRSdk } from 'trots-vitalii-sdk';

const sdk = LoTRSdk(apiKey);
const params = { filters: [['name', '=', 'Return']] };
sdk.movies.getAllMovies(params)
   .then((result) => console.log(result));
```

### Error handling

For making a usage of current SDK more slight and safe we are not returning or throwing any errors from inside of it. In the success scenario you will always have a response. Consider that `undefined` is a response of failure. To understand a reason of it, please initialize SDK with logger enabled.

## Development

### Testing

Testing is available for development purpose, you may discover test cases in our [GitHub Repository](https://github.com/VitaliyTrots/LoTR_sdk)

It's developed with a help of **Jest** testing framework on a unit, integration and acceptance levels.

For this you will need to install development dependencies first:

```bash
npm i
```

**Unit tests**
To run unit tests, execute following script:

```bash
npm run test:unit
```

**Integration tests**
To run integration tests, execute following script:

```bash
npm run test:integration
```

**E2E tests**
To run e2e tests, execute following script:

```bash
npm run test:e2e
```
