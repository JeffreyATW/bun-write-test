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

While running `nodeserver` or `bunserver`, run this in a separate terminal pane:

```yarn cypress run spec```

Test will fail with Bun 1.0.7 and pass with Node 18+.

## Sample packet captures

See `bunserver.pcapng` and `nodeserver.pcapng` and compare the differences between the (multiple) Hypertext Transfer Protocol sections.
