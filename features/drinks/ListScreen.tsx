import React from "react";
import {
    FlatList,
    Text,
} from "react-native";

import { DrinkItem } from "./types";

const drinks: DrinkItem[] = [
    { id: "1", name: "Coke" },
    { id: "2", name: "Pepsi" },
    { id: "3", name: "Fanta" },
];

const ListScreen: React.FC = () => {
    const renderItem = ({ item }: { item: DrinkItem }) => (
        <Text>{`${item.id}: ${item.name}`}</Text>
    );

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
}

export default ListScreen;