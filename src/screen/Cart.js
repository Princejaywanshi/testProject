import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Cart = ({ route }) => {
  const { items } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Items:</Text>
      {items.length === 0 ? (
        <Text style={styles.emptyCartText}>No items in cart</Text>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{`${item.name} - ${item.quantity}`}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue',
  },
  item: {
    backgroundColor: 'lightgrey',
    padding: 10,
    borderBottomColor: '#ccc',
    width: '100%',
    borderRadius: 5,
    marginTop: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyCartText: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
  },
});

export default Cart;
