import React from "react";
import { FlatList, Text } from "react-native";

import { Drink } from "./types";
import { useFetchDrinks } from "./hooks/useFetchDrinks";

const ListScreen: React.FC = () => {
  const renderItem = ({ item }: { item: Drink }) => (
    <Text>{`${item.id}: ${item.name}`}</Text>
  );

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
        data={drinks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default ListScreen;
