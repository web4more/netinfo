import test from "node:test";
import assert from "node:assert";

globalThis.Navigator ??= class Navigator {};
globalThis.navigator ??= new Navigator();

await import("../dist/polyfill.js");

test("navigator.connection", () => {
  console.debug("navigator.connection", {
    downlink: navigator.connection.downlink,
    downlinkMax: navigator.connection.downlinkMax,
    effectiveType: navigator.connection.effectiveType,
    rtt: navigator.connection.rtt,
    type: navigator.connection.type,
  });
  assert(navigator.connection);
});

test("navigator.connection.downlink", () => {
  assert(navigator.connection.downlink);
});

test("navigator.connection.downlinkMax", () => {
  assert(navigator.connection.downlinkMax);
});

test("navigator.connection.effectiveType", () => {
  assert(navigator.connection.effectiveType);
});

test("navigator.connection.rtt", () => {
  assert(navigator.connection.rtt);
});

test("navigator.connection.type", () => {
  assert(navigator.connection.type);
});
