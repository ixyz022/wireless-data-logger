import React, { useState, useEffect } from "react";
import { FlatList, View, Text, Image } from "react-native";
import axios from "axios";

import { Photo } from "@/interface/types";
import { fetchPhotos } from "@/api/fetchPhotos";

const TabThreeScreen = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const [page, setPage] = useState<number>(1); // Fix for problem 1
  const [loading, setLoading] = useState(false);

  const loadMorePhotos = async () => {
    if (loading) return;

    setLoading(true);
    const newPhotos = await fetchPhotos(page, 8); // Carga 10 fotos por vez, por ejemplo
    setPhotos([...photos, ...newPhotos]);
    setPage(page + 1); // Fix for problem 1
    setLoading(false);
  };

  useEffect(() => {
    loadMorePhotos();
  }, []);

  const PhotoItem = React.memo(({ item }: { item: Photo }) => (
    <View>
      <Image
        source={{ uri: item.thumbnailUrl }}
        style={{ width: 50, height: 50 }}
      />
      <Text style={{ marginLeft: 10 }}>{item.title}</Text>
    </View>
  ));

  return (
    <View>
      <FlatList
        data={photos}
        onEndReached={loadMorePhotos}
        onEndReachedThreshold={0.1}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: { item: Photo }) => <PhotoItem item={item} />}
      />
    </View>
  );
};

export default TabThreeScreen;
