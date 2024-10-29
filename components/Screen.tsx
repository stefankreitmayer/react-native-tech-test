import React from "react";
import { Icon } from "react-native-elements";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

type ScreenProps = {
  title: string;
  subtitle?: string;
  closeButtonFn?: () => void;
  children: React.ReactNode;
};

const Screen: React.FC<ScreenProps> = ({
  title,
  subtitle,
  closeButtonFn,
  children,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        {closeButtonFn && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={closeButtonFn}
            accessibilityRole="button"
            accessibilityLabel="Back"
            hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
          >
            <Icon name="arrow-back" type="ionicon" size={32} color="#383838" />
          </TouchableOpacity>
        )}
        <Text style={styles.title} accessibilityRole="header">
          {title}
        </Text>
        {subtitle && (
          <Text style={styles.subtitle} accessibilityRole="header">
            {subtitle}
          </Text>
        )}
      </View>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: "100%",
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default Screen;
