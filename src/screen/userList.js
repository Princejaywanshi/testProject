import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';             
import { getFavorites, setFavorites } from '../utils/storage';                
import UserItem from '../components/userItem';


const UserList = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [favorites, setFavoritesState] = useState([]);

  useEffect(() => {
    fetchData();
    loadFavorites();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://reqres.in/api/users?page=2');
      setUsers(response.data.data);
      console.log(response,">>>>>>>>");
    } catch (error) {
      console.error(error);
    }
  };

  const loadFavorites = async () => {
    const favorites = await getFavorites();
    setFavoritesState(favorites);
  };

  const toggleFavorite = async (user) => {
    let newFavorites = [...favorites];
    if (favorites.some(fav => fav.id === user.id)) {
      newFavorites = newFavorites.filter(fav => fav.id !== user.id);
    } else {
      newFavorites.push(user);
    }
    setFavoritesState(newFavorites);
    await setFavorites(newFavorites);
  };

  const renderItem = ({ item }) => (
    <UserItem
      user={item}
      isFavorite={favorites.some(fav => fav.id === item.id)}
      toggleFavorite={toggleFavorite}
    />
  );

  return (
    <FlatList
      data={users}
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

export default UserList;
