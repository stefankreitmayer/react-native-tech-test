import React from "react";
import axios from "axios";
import { API_BASE_URL, NUMBER_OF_ITEMS } from "../api";
import { Drink } from "../types";

const convertItemToDrink = (item: any): Drink => ({
  id: item.idDrink,
  name: item.strDrink,
  thumbnail: item.strDrinkThumb,
  category: item.strCategory,
  instructions: item.strInstructions,
  ingredients: Object.keys(item)
    .filter((key) => key.startsWith("strIngredient") && item[key])
    .map((key) => item[key]),
});

const fetchAllDrinkIdsByFirstLetter = async (
  firstLetter: string,
): Promise<Drink[]> => {
  const response = await axios.get(
    `${API_BASE_URL}/search.php?f=${firstLetter}`,
  );
  return response.data.drinks.slice(0, NUMBER_OF_ITEMS).map(convertItemToDrink);
};

export const useFetchDrinks = (firstLetter: string = "d") => {
  const [drinks, setDrinks] = React.useState<Drink[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetchAllDrinkIdsByFirstLetter(firstLetter)
      .then((drinks) => {
        setDrinks(drinks);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [firstLetter]);

  return { drinks, loading, error };
};
