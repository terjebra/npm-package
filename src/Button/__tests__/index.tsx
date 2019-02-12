import * as React from "react";
import { render, cleanup } from "react-testing-library";
import Button from "../../Button";

afterEach(cleanup);
describe("My button", () => {
  it("should contains name", () => {
    const { getByText } = render(<Button title="My button" />);
    getByText("My button");
  });
});
