import React from "react";
import { View, Text } from "react-native";
import { CardData } from "@/interface/types";

const CardItem: React.FC<{ data: CardData }> = ({ data: { title } }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default CardItem;
