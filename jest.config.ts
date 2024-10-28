import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "react-native",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native|@react-navigation))",
  ],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
};

export default config;
