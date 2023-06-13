# Simple Pattern Matching

For complex logic sometime switch is not enough. There's a pattern matching proposal but it's not ready yet.
https://github.com/tc39/proposal-pattern-matching

## Getting Started

```sh
npm i @eatsjobs/ts-pattern-matching
```

## Usage

```typescript
  import type { Predicate, Handler } from "@eatsjobs/ts-pattern-matching";
  import match from "@eatsjobs/ts-pattern-matching";

  type Input = { a: boolean };
  const predicate: Predicate<Input> = (input) => {
    return input.a
  };

  const handler: Handler<string> = (input: Input) => {
    return "this will executed if predicate returns true"
  };

  
  const string = match<Input, string>({ a: true })
    .when(predicate, handler)
    .when(..., ...)
    .otherwise(() => "default string") // default handler
    .run();

```
