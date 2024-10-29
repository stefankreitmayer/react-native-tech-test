import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import { useFetchDrinks } from "./hooks/useFetchDrinks";
import DrinkCard from "./DrinkCard";
import { Drink } from "./types";
import { useListContext } from "../../context/ListContext";

type ListScreenProps = {
  onSelectDrink: (drink: Drink) => void;
};

const ListScreen: React.FC<ListScreenProps> = ({ onSelectDrink }) => {
  const { drinks, loading, error } = useFetchDrinks();
  const { itemsToShow, setItemsToShow } = useListContext();

  const loadMoreItems = () => {
    console.log(
      `Load more items on scroll. Currently maximum ${drinks.length} items available.`,
    );
    setItemsToShow((prev) => prev + 10);
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <>
      <Text>Drinks</Text>
      <FlatList
        style={styles.drinksList}
        testID="drink-list"
        data={drinks.slice(0, itemsToShow)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DrinkCard drink={item} onSelectDrink={onSelectDrink} />
        )}
        contentContainerStyle={{ paddingBottom: 16 }}
        onEndReached={loadMoreItems} // Load more on scroll
        onEndReachedThreshold={0.5}
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
