import React from "react";
import { View, Text, StyleSheet } from "react-native";

type MultiParagraphTextProps = {
  text: string;
};

const MultiParagraphText: React.FC<MultiParagraphTextProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      {text
        .replace(/\r/g, "\n") // Normalize line endings: \r -> \n
        .replace(/\n+/g, "\n") // Normalize line endings: \n\n -> \n
        .split("\n")
        .map((paragraph, index) => (
          <Text key={index} style={styles.paragraph}>
            {paragraph.trim()}
          </Text>
        ))}
    </View>
  );
};

export default MultiParagraphText;

const styles = StyleSheet.create({
  container: {
    // padding: 16,
  },
  paragraph: {
    marginBottom: 14, // Space between paragraphs
    lineHeight: 20, // Adjust for readability
    fontSize: 16,
  },
});
