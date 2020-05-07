import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import starter from "./mod.ts";

Deno.test("test starter function", (): void => {
  assertEquals(starter("abc"), "abc");
});

Deno.test({
  name: "test starter function",
  fn(): void {
    assertEquals(starter("foo bar"), "foo bar");
  },
});
