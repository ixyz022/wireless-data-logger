// src/screens/HomeScreen.tsx
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import CardList from "@/components/cardList";
import fetchData from "@/api/fetchData";

import { CardData } from "@/interface/types";

const HomeScreen: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    const loadCards = async () => {
      const fetchedCards = await fetchData();
      setCards(fetchedCards);
    };
    loadCards();
  }, []);

  return (
    <View>
      <CardList cards={cards} />
    </View>
  );
};

export default HomeScreen;
