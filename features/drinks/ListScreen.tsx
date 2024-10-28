import React from "react";
import { FlatList, Text, View } from "react-native";

import { Drink } from "./types";
import { useFetchDrinks } from "./hooks/useFetchDrinks";

const ListScreen: React.FC = () => {
  const renderItem = ({ item }: { item: Drink }) => (
    <View>
      <Text>{item.id}</Text>
      <Text>{item.name}</Text>
    </View>
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
