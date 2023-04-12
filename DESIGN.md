# SDK Design

This SDK is built up by following Clean Architecture principles. The main idea is to provide hybrid package without dependencies to fit different development strategies.
Clean Architecture splits the layers between developers and API. It manages reducing of dependencies by giving a single vector of layers interaction. It makes code more flexible and scalable. So new changes will not effect any existing code.

---

## Elements

### API

As API is a source, that we can not change it stands as a core inside of the system. We may run acceptance tests time to time, to understand if changes has appeared at the API side.

### Interfaces

This layer is simply reflecting all possible queries to API. It's gonna be changed just in case the API will be extend or critically changed.

---

## Features

### Cache

Useful for reducing repeating requests to LoTR API as it has a limit on the number of requests.

### Logger

Useful for debugging purposes.
