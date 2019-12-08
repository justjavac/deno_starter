import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import starter from "./mod.ts";

test({
  name: "test starter function",
  fn(): void {
    assertEquals(starter("abc"), "abc");
  }
});

test(function myTestFunction(): void {
  assertEquals(starter("foo bar"), "foo bar");
});
