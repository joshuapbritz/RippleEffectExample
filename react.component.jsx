import React from "react";
import { RippleEffect } from "./index.react";

export function Button() {
  return <button onMouseDown={(e) => RippleEffect(e)}>Click Me</button>;
}
