import { View, Text, ImageBackground, StyleSheet } from "react-native";

import { ImageSourcePropType } from "react-native";

interface DrinkImageWithLabelProps {
  source: ImageSourcePropType;
  type: string;
}

const DrinkImageWithLabel = ({ source, type }: DrinkImageWithLabelProps) => (
  <ImageBackground source={source} style={styles.image}>
    <View
      style={[
        styles.banner,
        type === "Alcoholic" ? styles.alcoholic : styles.nonAlcoholic,
      ]}
    >
      <Text style={styles.bannerText}>{type.toUpperCase()}</Text>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 280,
    justifyContent: "flex-end",
    marginBottom: 16,
  },
  banner: {
    width: "100%",
    paddingVertical: 4,
    alignItems: "center",
  },
  alcoholic: {
    backgroundColor: "rgba(255, 140, 0, 0.7)", // Orange with transparency for Alcoholic
  },
  nonAlcoholic: {
    backgroundColor: "rgba(0, 100, 200, 0.7)", // Teal with transparency for Non-Alcoholic
  },
  bannerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default DrinkImageWithLabel;
