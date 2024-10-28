import React from "react";
import { render } from "@testing-library/react-native";
import ListScreen from "./ListScreen";
import { useFetchDrinks } from "./hooks/useFetchDrinks";

jest.mock("./hooks/useFetchDrinks");

describe("ListScreen Component", () => {
  it("displays a loading message when fetching data", () => {
    (useFetchDrinks as jest.Mock).mockReturnValue({
      drinks: [],
      loading: true,
      error: null,
    });

    const { getByText } = render(<ListScreen />);

    expect(getByText("Loading...")).toBeTruthy();
  });

  it("displays an error message when an error occurs", () => {
    (useFetchDrinks as jest.Mock).mockReturnValue({
      drinks: [],
      loading: false,
      error: "Failed to load drinks",
    });

    const { getByText } = render(<ListScreen />);

    expect(getByText("Failed to load drinks")).toBeTruthy();
  });

  it("renders the list of drinks when data is successfully fetched", () => {
    const drinks = [
      { id: "1", name: "Coke" },
      { id: "2", name: "Pepsi" },
      { id: "3", name: "Fanta" },
    ];

    (useFetchDrinks as jest.Mock).mockReturnValue({
      drinks,
      loading: false,
      error: null,
    });

    const { getByText } = render(<ListScreen />);

    expect(getByText("Drinks")).toBeTruthy();

    drinks.forEach((drink) => {
      expect(getByText(`${drink.id}: ${drink.name}`)).toBeTruthy();
    });
  });
});
