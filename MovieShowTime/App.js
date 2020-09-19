import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MovieList from './screens/MovieList'
import MovieDetail from './screens/MovieDetail'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
    screenOptions={
      {
        headerStyle: {
          backgroundColor: 'black'
        },
        headerTintColor: 'white'
      }
    }>
      <Stack.Screen
        name="MovieList"
        component={MovieList}
        options={
          {
            title: 'Movie show time example'
          }
        }
        />

      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={
          {
            title: null,
            // headerBackTitle:
            headerTruncatedBackTitle: null
          }
        }
        />  

    </Stack.Navigator>
  </NavigationContainer>
)

export default function App() {

  return (
    <View style={styles.container}>
       <Navigation /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});