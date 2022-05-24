import assert from "node:assert";

export function assert_int_eq(x, y) {
  return () => {
    assert.equal(x, y);
  };
}

export function int_add(x, y) {
  return x + y;
}
