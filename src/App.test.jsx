import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

let wrapper = null;

describe("App renders", () => {
  beforeEach(() => {
    wrapper = render(<App />);
  });

  it("renders", () => {
    const hello = wrapper.getByText("Hello App");

    expect(hello).toBeTruthy();
  });
});
