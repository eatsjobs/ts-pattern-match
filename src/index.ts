export type Predicate<Input> = (v: Input) => boolean;
export type Handler<Input, Output> = (v: Input) => Output;

export interface Match<Input, Output> {
  when: (predicate: Predicate<Input>, handler: Handler<Input, Output>) => this;
  run: () => Output;
  otherwise: (handler: Handler<Input, Output>) => this;
}

function match<Input, Output>(value: Input): Match<Input, Output> {
  const cases = new Set<[Predicate<Input>, Handler<Input, Output>]>();
  let defaultHandler: Handler<Input, Output>;
  return {
    when(predicate: Predicate<Input>, handler: Handler<Input, Output>) {
      cases.add([predicate, handler]);
      return this;
    },
    otherwise(handler: Handler<Input, Output>) {
      defaultHandler = handler;
      return this;
    },
    run(): Output {
      for (const [predicate, handler] of cases) {
        if (predicate(value)) {
          return handler(value);
        }
      }
      if (typeof defaultHandler !== "function") {
        throw new Error("Match case miss default handler or is not a function");
      }
      return defaultHandler(value);
    },
  };
}

export default match;
