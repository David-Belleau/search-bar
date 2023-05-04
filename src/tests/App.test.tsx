import { render, screen } from "@testing-library/react";
import App from "../App";

test("check elements presence", () => {
  render(<App />);
  expect(screen.getByLabelText("bat")).toBeInTheDocument();
  expect(screen.getByRole("textbox")).toBeInTheDocument();
  expect(screen.getByLabelText("search")).toBeInTheDocument();
});
