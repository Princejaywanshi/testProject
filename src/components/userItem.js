import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icom from 'react-native-vector-icons/AntDesign';


const UserItem = ({ user, isFavorite, toggleFavorite }) => {
  return (
    <View style={styles.item}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{user.first_name} {user.last_name}</Text>
        <Text style={styles.name}>{user.email}</Text>
      </View>
      {toggleFavorite && (
        <TouchableOpacity onPress={() => toggleFavorite(user)}>
           <Icom
            name={isFavorite ? 'heart' : 'hearto'}
            size={24}
            color={isFavorite ? 'red' : 'gray'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontWeight: 'bold',
    color:"#333"
  },
});

export default UserItem;
