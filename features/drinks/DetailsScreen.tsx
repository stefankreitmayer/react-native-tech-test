import React from "react";
import { Text, Image, ScrollView, StyleSheet, View } from "react-native";
import { Drink } from "./types";
import Screen from "../../components/Screen";
import MultiParagraphText from "../../components/MultiParagraphText";
import DrinkImageWithLabel from "./DrinkImageWithLabel";

type DetailsScreenProps = {
  drink: Drink;
  onBack: () => void;
};

const DetailsScreen: React.FC<DetailsScreenProps> = ({ drink, onBack }) => {
  return (
    <Screen title={drink.name} subtitle={drink.category} closeButtonFn={onBack}>
      <ScrollView contentContainerStyle={styles.container}>
        <>
          <DrinkImageWithLabel
            source={{ uri: drink.thumbnail }}
            type={drink.alcoholic}
          />
          <Text style={styles.ingredients} accessibilityRole="header">
            {drink.ingredients.join(", ")}
          </Text>
          <MultiParagraphText text={drink.instructions} />
        </>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
    marginBottom: 6,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  tags: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
  ingredients: {
    fontSize: 16,
    color: "#333",
    paddingVertical: 28,
  },
  instructions: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default DetailsScreen;
