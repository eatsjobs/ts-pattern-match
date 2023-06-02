import assert from "node:assert";
import test from "node:test";
import match from "../index";

test.describe("Pattern Matching", function () {
  test.it("should return the handler object if predicate returns true", () => {
    const result = match<{ a: boolean }, { response: string }>({ a: true })
      .when(
        (input) => input.a,
        () => {
          return { response: "a is true" };
        }
      )
      .run();
    assert.deepEqual(result, { response: "a is true" });
  });

  test.it("should return the otherwise object if predicates returns false", () => {
    const result = match<{ a: string }, { response: string }>({
      a: "whatever",
    })
      .when(
        (input) => input.a === "whenever",
        () => {
          return { response: "a is whenever" };
        }
      )
      .when(
        (input) => input.a === "something",
        () => {
          return { response: "a is something" };
        }
      )
      .otherwise(() => ({ response: "nor of the two" }))
      .run();
    assert.deepEqual(result, { response: "nor of the two" });
  });
});
