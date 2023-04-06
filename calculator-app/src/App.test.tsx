import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Calculator App tests", () => {
  test("Renders calculator", () => {
    render(<App />);

    const output = screen.getByTestId("output");
    expect(output).toBeVisible();
    expect(output).toHaveTextContent("0");

    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toBe(19);

    for (let i = 0; i < 10; i++) {
      expect(screen.getByRole("button", { name: `${i}` })).toBeInTheDocument();
    }

    expect(screen.getByRole("button", { name: "AC" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "C" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "*" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "/" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "." })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "=" })).toBeInTheDocument();
  });

  test("Does addition correctly", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "0" }));
    fireEvent.click(screen.getByRole("button", { name: "+" }));
    fireEvent.click(screen.getByRole("button", { name: "5" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));
    expect(screen.getByTestId("output")).toHaveTextContent("15");
  });
  test("Does substraction correctly", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "0" }));
    fireEvent.click(screen.getByRole("button", { name: "-" }));
    fireEvent.click(screen.getByRole("button", { name: "5" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));
    expect(screen.getByTestId("output")).toHaveTextContent("5");
  });
  test("Does multiply correctly", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "0" }));
    fireEvent.click(screen.getByRole("button", { name: "*" }));
    fireEvent.click(screen.getByRole("button", { name: "5" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));
    expect(screen.getByTestId("output")).toHaveTextContent("50");
  });
  test("Does division correctly", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "0" }));
    fireEvent.click(screen.getByRole("button", { name: "/" }));
    fireEvent.click(screen.getByRole("button", { name: "5" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));
    expect(screen.getByTestId("output")).toHaveTextContent("2");
  });

  test("Does Clear Correctly", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "0" }));
    fireEvent.click(screen.getByRole("button", { name: "C" }));
    expect(screen.getByTestId("output")).toHaveTextContent("0");
  });

  test("Does AC Correctly", () => {
    render(<App />);
    const plusButton = screen.getByRole("button", { name: "+" });
    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "0" }));

    fireEvent.click(plusButton);
    fireEvent.click(screen.getByRole("button", { name: "0" }));
    expect(plusButton).toHaveStyle({ borderColor: "#fff" });
    fireEvent.click(screen.getByRole("button", { name: "AC" }));
    expect(screen.getByTestId("output")).toHaveTextContent("0");
    expect(plusButton).not.toHaveStyle({ borderColor: "#fff" });
  });
});
