import React, { useState } from "react";
import { FlatList, Text, StyleSheet, Image } from "react-native";
import { useFetchDrinks } from "./hooks/useFetchDrinks";
import DrinkCard from "./DrinkCard";
import { Drink } from "./types";

const ListScreen: React.FC = () => {
  const { drinks, loading, error } = useFetchDrinks();
  const [drink, setDrink] = useState<Drink | null>(null);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  if (drink) {
    return (
      <>
        <Text>{drink.name}</Text>
        <Text>{drink.instructions}</Text>
        <Text>Ingredients: {drink.ingredients.join(", ")}</Text>
        <Text>Category: {drink.category}</Text>
        <Image
          source={{ uri: drink.thumbnail }}
          style={{ width: 100, height: 100 }}
        />
      </>
    );
  }

  return (
    <>
      <Text>Drinks</Text>
      <FlatList
        style={styles.drinksList}
        testID="drink-list"
        data={drinks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DrinkCard drink={item} onSelectDrink={() => setDrink(item)} />
        )}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  drinksList: {
    flex: 1,
    width: "100%",
    padding: 12,
  },
});

export default ListScreen;
