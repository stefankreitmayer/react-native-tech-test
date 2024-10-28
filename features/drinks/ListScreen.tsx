import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import { useFetchDrinks } from "./hooks/useFetchDrinks";
import DrinkCard from "./DrinkCard";

const ListScreen: React.FC = () => {
  const { drinks, loading, error } = useFetchDrinks();

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
        data={drinks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DrinkCard drink={item} />}
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
