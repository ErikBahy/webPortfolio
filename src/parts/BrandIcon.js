/* eslint-disable react/jsx-filename-extension */
import React from "react";

import Button from "elements/Button";

export default function BrandIcon() {
  return (
    <Button className="" type="link" href="/">
      <p className="text-theme-blue text-4xl">
        Correct
        <span style={{ color: "#2a8041" }} className="text-theme-purple">
          Assistant
        </span>
      </p>
    </Button>
  );
}
