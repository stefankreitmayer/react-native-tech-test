import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import DetailsScreen from "./DetailsScreen";
import { Drink } from "./types";

describe("DrinkDetailScreen", () => {
  const mockDrink: Drink = {
    id: "1",
    name: "Happy Drink",
    thumbnail: "https://example.com/test-image.jpg",
    instructions: "Step 1: Do this.\nStep 2: Do that.",
    ingredients: ["Ingredient 1", "Ingredient 2"],
    category: "Great drink",
    alcoholic: "Alcoholic",
  };

  const mockOnBack = jest.fn();

  beforeEach(() => {
    render(<DetailsScreen drink={mockDrink} onBack={mockOnBack} />);
  });

  it("renders the drink name as the title", () => {
    expect(screen.getByRole("header", { name: mockDrink.name })).toBeTruthy();
  });

  it("renders the ingredients as a subtitle", () => {
    expect(screen.getByText(mockDrink.ingredients.join(", "))).toBeTruthy();
  });

  it("displays the instructions in paragraphs", () => {
    const instructionsParagraphs = mockDrink.instructions.split("\n");
    instructionsParagraphs.forEach((paragraph) => {
      expect(screen.getByText(paragraph)).toBeTruthy();
    });
  });

  it("calls onBack when the close button is pressed", () => {
    const closeButton = screen.getByLabelText("Close screen");
    fireEvent.press(closeButton);
    expect(mockOnBack).toHaveBeenCalled();
  });
});
