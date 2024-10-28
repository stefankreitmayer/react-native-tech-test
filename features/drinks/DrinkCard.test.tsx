import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import DrinkCard from "./DrinkCard";
import { Drink } from "./types";

describe("DrinkCard", () => {
  const drink: Drink = {
    id: "1",
    name: "Mojito",
    thumbnail: "https://example.com/image.jpg",
    ingredients: ["Mint", "Lime", "Rum"],
    category: "Cocktail",
    instructions: "Mix all ingredients together in a glass.",
  };

  const onSelectDrinkMock = jest.fn();

  test("renders drink card with correct data", () => {
    const { getByTestId, getByText } = render(
      <DrinkCard drink={drink} onSelectDrink={onSelectDrinkMock} />,
    );

    // Check that the main card container is present
    const card = getByTestId(`drink-item-${drink.id}`);
    expect(card).toBeTruthy();

    // Check that the drink name is displayed
    const name = getByText(drink.name);
    expect(name).toBeTruthy();

    // Check that the ingredients are displayed in a single line
    const ingredientsText = getByText(drink.ingredients.join(", "));
    expect(ingredientsText).toBeTruthy();

    // Simulate pressing the DrinkCard and verify onSelectDrink is called
    fireEvent.press(card);
    expect(onSelectDrinkMock).toHaveBeenCalledWith(drink);
  });
});
