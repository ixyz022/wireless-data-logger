import React from "react";
import { FlatList, View, StyleSheet, ActivityIndicator } from "react-native";
import CardItem from "@/components/cardItem";
import { CardData } from "@/interface/types";

interface CardListProps {
  cards: CardData[];
  loadMoreData: () => void; // Función para cargar más datos
  isLoading: boolean; // Indicador de carga
}

const CardList: React.FC<CardListProps> = ({
  cards,
  loadMoreData,
  isLoading,
}) => {
  const renderItem = ({ item }: { item: CardData }) => <CardItem data={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMoreData} // Detectar cuando el usuario se desplaza al final
        onEndReachedThreshold={0.1} // Determinar cuánto debe desplazarse antes de cargar más datos
      />
      {isLoading ? <ActivityIndicator /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Estilos para tu contenedor, si es necesario
  },
});

export default CardList;
