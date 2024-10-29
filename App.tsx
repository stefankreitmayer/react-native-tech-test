import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import SimpleNavigator from "./features/drinks/SimpleNavigator";
import React from "react";
import { ListProvider } from "./context/ListContext";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ListProvider>
          <SimpleNavigator />
        </ListProvider>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  safeArea: {
    flex: 1,
  },
});
