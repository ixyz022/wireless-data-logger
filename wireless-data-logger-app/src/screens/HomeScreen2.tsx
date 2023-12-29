import React, { useState, useEffect } from "react";
import { FlatList, View, Text, Image } from "react-native";
import axios from "axios";

import fetchPhotos from "@/api/fetchPhotos.ts";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMorePhotos = async () => {
    if (loading) return;

    setLoading(true);
    const newPhotos = await fetchPhotos(page, 10); // Carga 10 fotos por vez, por ejemplo
    setPhotos([...photos, ...newPhotos]);
    setPage(page + 1);
    setLoading(false);
  };

  useEffect(() => {
    loadMorePhotos();
  }, []);

  return (
    <FlatList
      data={photos}
      onEndReached={loadMorePhotos}
      onEndReachedThreshold={0.5} // Decide qué tan cerca del final de la lista debe estar el usuario antes de cargar más elementos
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ flexDirection: "row", padding: 10 }}>
          <Image
            source={{ uri: item.thumbnailUrl }}
            style={{ width: 50, height: 50 }}
          />
          <Text style={{ marginLeft: 10 }}>{item.title}</Text>
        </View>
      )}
    />
  );
};

export default App;
