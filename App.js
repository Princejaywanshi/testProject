import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import UserList from './src/screen/userList';
import FavoriteList from './src/screen/FavourateList';
import NotebookInput from './src/screen/NoteInput';
import Cart from './src/screen/Cart';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="UserList"
          component={UserList}
          options={({ navigation }) => ({
            title: 'Users',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('FavoriteList')}
                style={styles.button}
              >
                <Text style={styles.buttonText}>See Favorites</Text>
              </TouchableOpacity>
            ),
          })}
        /> */}
        {/* <Stack.Screen
          name="FavoriteList"
          component={FavoriteList}
          options={{ title: 'Favorite Users' }}
        /> */}
           <Stack.Screen name="NotebookInput" component={NotebookInput} options={{ title: 'Notebook' }} />
           <Stack.Screen name="Cart" component={Cart} options={{ title: 'Cart' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#2B3B6F',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
