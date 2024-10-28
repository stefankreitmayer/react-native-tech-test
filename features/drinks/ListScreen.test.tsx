import React from "react";
import { render, screen } from "@testing-library/react-native";
import ListScreen from "./ListScreen";
import { useFetchDrinks } from "./hooks/useFetchDrinks";

jest.mock("./hooks/useFetchDrinks");

// Create an array of 15 drinks, enough to test the limit
const drinks = Array.from({ length: 15 }, (_, i) => ({
  id: `${i + 1}`,
  name: `Test Drink ${i + 1}`,
  thumbnail: "https://example.com/image.jpg",
  category: "Test Category",
  instructions: "Test instructions",
  ingredients: ["Ingredient 1", "Ingredient 2"],
}));

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
    (useFetchDrinks as jest.Mock).mockReturnValue({
      drinks,
      loading: false,
      error: null,
    });

    const { getByText } = render(<ListScreen />);

    expect(getByText("Drinks")).toBeTruthy();

    drinks.slice(0, 10).forEach((drink) => {
      expect(getByText(drink.name)).toBeTruthy();
    });
  });

  it("limits the number of initial items shown", () => {
    (useFetchDrinks as jest.Mock).mockReturnValue({
      drinks,
      loading: false,
      error: null,
    });

    const { getByText } = render(<ListScreen />);

    expect(getByText("Drinks")).toBeTruthy();

    // Only the first 10 drinks should be displayed
    drinks.slice(0, 10).forEach((drink) => {
      expect(getByText(drink.name)).toBeTruthy();
    });

    // The 11th drink should not be displayed
    expect(screen.queryByText("Test Drink 11")).toBeNull();
  });
});
