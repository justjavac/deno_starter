import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import starter from "./mod.ts";

Deno.test({
  name: "test starter function",
  fn(): void {
    assertEquals(starter("abc"), "abc");
  },
});

Deno.test(function myTestFunction(): void {
  assertEquals(starter("foo bar"), "foo bar");
});
