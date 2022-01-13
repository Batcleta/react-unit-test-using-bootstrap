import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Calculadora", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("must to clean the number input field", () => {
    render(<App />);
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("C"));
    expect(screen.getByTestId("txtNumeros")).toHaveValue("0");
  });

  it("must Sum 2 + 3 and get 5 as result", () => {
    render(<App />);
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("3"));
    fireEvent.click(screen.getByText("="));
    expect(screen.getByTestId("txtNumeros")).toHaveValue("5");
  });

  it("must subtratc 10 from 65 ans get 55 as return", () => {
    const { getByText } = render(<App />);
    fireEvent.click(screen.getByText("6"));
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("-"));
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("0"));
    fireEvent.click(screen.getByText("="));
    expect(screen.getByTestId("txtNumeros")).toHaveValue("55");
  });

  it("must divide 10 to 1.25 and get 8 as result", () => {
    render(<App />);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("0"));
    fireEvent.click(screen.getByText("/"));
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("."));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("="));
    expect(screen.getByTestId("txtNumeros")).toHaveValue("8");
  });

  it("must mutiplay 156 for 99 ans get 15.444 as result", () => {
    render(<App />);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("6"));
    fireEvent.click(screen.getByText("*"));
    fireEvent.click(screen.getByText("9"));
    fireEvent.click(screen.getByText("9"));
    fireEvent.click(screen.getByText("="));
    expect(screen.getByTestId("txtNumeros")).toHaveValue("15444");
  });
});
