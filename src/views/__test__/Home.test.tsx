import "@testing-library/jest-dom/extend-expect"; // Provides additional matchers for Jest
import { cleanup, render, screen } from "@testing-library/react";
import Home from "../Home";

afterEach(() => {
  cleanup();
});

describe("Home", () => {
  it("should render the correct heading", () => {
    render(<Home />);
    const heading = screen.getByText("Manage your media");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("in an easy way");
    const greenText = screen.getByTestId("heading-colorfull");

    expect(greenText).toHaveStyle("color: var(--chakra-colors-green-400)");
  });

  it('should render the "Media" button', () => {
    render(<Home />);
    const addButton = screen.getByRole("button", { name: "Media" });
    expect(addButton).toBeInTheDocument();
    expect(addButton).toHaveTextContent("Media");
  });
});
