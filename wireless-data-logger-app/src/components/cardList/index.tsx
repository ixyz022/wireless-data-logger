// src/components/CardList/index.tsx
import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import CardItem from "@/components/cardItem";
import { CardData } from "@/interface/types";

interface CardListProps {
  cards: CardData[];
}

const renderItem = ({ item }: { item: CardData }) => <CardItem data={item} />;

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Estilos para tu contenedor, si es necesario
  },
});

export default CardList;
