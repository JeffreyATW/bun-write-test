## Setup

Install Node:

https://nodejs.org/

Install Bun:

```curl -fsSL https://bun.sh/install | bash```

Install Yarn:

```corepack enable```

## Run

```yarn nodeserver```

or

```yarn bunserver```

## Test

Node's attempt to parse the HTTP response will fail with the server from Bun 1.0.7, and pass with the server from Node 18+.

While running `nodeserver` or `bunserver`, run either of these in a separate terminal pane:

### Node

```yarn nodeclient```

### Cypress

```yarn cypress run spec```

## Sample packet captures

See `bunserver.pcapng` and `nodeserver.pcapng` and compare the differences between the (multiple) Hypertext Transfer Protocol sections.
