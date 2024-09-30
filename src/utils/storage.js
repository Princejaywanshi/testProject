import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFavorites = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@favorites');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const setFavorites = async (favorites) => {
  try {
    const jsonValue = JSON.stringify(favorites);
    await AsyncStorage.setItem('@favorites', jsonValue);
  } catch (e) {
    console.error(e);
  }
};
