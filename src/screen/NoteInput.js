import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NotebookInput = ({ addItems }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [items, setItems] = useState([]);
  const navigation = useNavigation();

  const handleAddItems = () => {
    if (name.trim() === '' || quantity.trim() === '') {
      alert('Please enter both name and quantity!');
      return;
    }

    const newItem = {
      name: name.trim(),
      quantity: quantity.trim()  // Keep quantity as string to accommodate units
    };

    setItems([...items, newItem]);
    setName('');
    setQuantity('');
  };

  const handleAddAllToCart = () => {
    if (items.length === 0) {
      alert('No items to add to cart');
      return;
    }
    navigation.navigate('Cart', { items });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.title}>Notebook</Text>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            style={styles.input}
            placeholder="Enter item name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Item quantity"
            value={quantity}
            onChangeText={setQuantity}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleAddItems}>
          <Text style={styles.buttonText}>Add Items</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.cartTitle}>Cart Lists:</Text>
      {items.length == 0 ? (
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
        <TouchableOpacity
        style={[styles.button1, items.length === 0 && styles.disabledButton]}
        onPress={handleAddAllToCart}
        disabled={items.length === 0}
      >
        <Text style={styles.buttonText}>Add All to Cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderColor: 'lightblue',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: '45%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#2B3B6F',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  button1: {
    backgroundColor: '#2B3B6F',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    width: '90%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: 'lightgrey',
    padding: 10,
    borderBottomColor: '#ccc',
    width: '90%',
    left: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  itemText: {
    fontSize: 16,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  emptyCartText: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'blue',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue',
    alignSelf: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  }
});

export default NotebookInput;
 