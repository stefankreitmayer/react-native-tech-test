import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Drink } from "./types";

type DrinkCardProps = {
  drink: Drink;
  onSelectDrink: (drink: Drink) => void;
};

const DrinkCard: React.FC<DrinkCardProps> = ({ drink, onSelectDrink }) => {
  return (
    <TouchableOpacity
      testID={`drink-item-${drink.id}`}
      key={drink.id}
      onPress={() => onSelectDrink(drink)}
    >
      <View style={styles.card}>
        <View style={styles.content}>
          <Image source={{ uri: drink.thumbnail }} style={styles.thumbnail} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{drink.name}</Text>
            <Text
              style={styles.description}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {drink.ingredients.join(", ")}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12, // Rounded corners
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4, // Shadow blur radius
    elevation: 4, // Shadow for Android
    // padding: 16,
    marginVertical: 8, // Space between cards
    marginRight: 5, // To avoid cropping the shadow
    // marginHorizontal: 16,            // Side margins
  },
  content: {
    flexDirection: "row", // Layout for content (e.g., image + text)
    alignItems: "center",
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#333",
  },
});

export default DrinkCard;
