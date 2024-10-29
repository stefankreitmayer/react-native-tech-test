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
            style={styles.closeButton}
            onPress={closeButtonFn}
            accessibilityRole="button"
            accessibilityLabel="Close screen"
            hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
          >
            <Icon name="close" type="ionicon" size={42} color="#333333" />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
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
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  closeButton: {
    position: "absolute",
    top: 18,
    right: 20,
    zIndex: 1,
  },
});

export default Screen;
