# Simple Pattern Matching

## Getting Started

    ```
    npm i @eatsjobs/ts-pattern-matching
    ```

## Usage

  ```
  import match from "@eatsjobs/ts-pattern-matching"

  const predicate = (input) => {
    return input.a
  };

  const handler = () => {
    return "this will executed if predicate returns true"
  };

  const string = PatternMatch({ a: true })
    .when(predicate, handler)
    .when(..., ...)
    .otherwise(() => {}) // default handler
    .run();

  ```
