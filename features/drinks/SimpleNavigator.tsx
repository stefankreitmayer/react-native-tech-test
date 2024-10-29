import { useState } from "react";
import { Drink } from "./types";
import DetailsScreen from "./DetailsScreen";
import ListScreen from "./ListScreen";

export default function SimpleNavigator() {
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);

  if (selectedDrink) {
    return (
      <DetailsScreen
        drink={selectedDrink}
        onBack={() => setSelectedDrink(null)}
      />
    );
  }

  return <ListScreen onSelectDrink={(drink) => setSelectedDrink(drink)} />;
}
