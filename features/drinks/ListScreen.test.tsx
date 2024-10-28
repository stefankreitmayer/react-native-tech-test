import React from "react";
import { render } from "@testing-library/react-native";
import ListScreen from "./ListScreen";

describe("ListScreen Component", () => {
  it("renders the header correctly", () => {
    const { getByText } = render(<ListScreen />);

    expect(getByText("Drinks")).toBeTruthy();
  });

  it("renders each drink item in the list", () => {
    const { getByText } = render(<ListScreen />);

    expect(getByText("1: Coke")).toBeTruthy();
    expect(getByText("2: Pepsi")).toBeTruthy();
    expect(getByText("3: Fanta")).toBeTruthy();
  });
});
