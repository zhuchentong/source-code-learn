import { describe, expect, it } from "vitest";
import { omit } from "~/omit";

describe("omit test", () => {
  const obj = { a: 1, b: 2, c: 3, d: { e: { x: "x", y: "y" } } };

  it("basic type test", async () => {
    expect(omit(obj, ["a"])).not.toHaveProperty("a");
    expect(omit(obj, ["b"])).not.toHaveProperty("b");
    expect(omit(obj, ["b"])).not.toHaveProperty("b");
    expect(omit(obj, ["d"])).not.toHaveProperty("d");
    expect(omit(obj, ["d"])).not.toHaveProperty("d");
  });

  it("nest type test", async () => {
    const data = omit(obj, ["d.e.x"]);
    expect(data).toHaveProperty("a");
    expect(data).toHaveProperty("d");
    expect(data.d).toHaveProperty("e");
    expect(data.d.e).toHaveProperty("y");
    expect(data.d.e).not.toHaveProperty("x");
  });
});
