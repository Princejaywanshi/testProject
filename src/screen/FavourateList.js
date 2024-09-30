import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { getFavorites } from '../utils/storage';
import UserItem from '../components/userItem';


const FavoriteList = () => {
  const [favorites, setFavoritesState] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    const favorites = await getFavorites();
    setFavoritesState(favorites);
  };

  const renderItem = ({ item }) => (
    <UserItem
      user={item}
      isFavorite={true}
    />
  );

  return (
    <FlatList
      data={favorites}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FavoriteList;
