import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './src/components/MapScreen.js'
import ListScreen from './src/components/ListScreen.js';
import Ionicons from '@expo/vector-icons/Ionicons';



export default function App() {




  const Tab = createBottomTabNavigator();


  return (
    
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color}) => {
            let iconName;

            if (route.name === 'Mapa') {
              iconName = focused ? 'compass' : 'compass';
            } else if (route.name === 'Lista') {
              iconName = focused ? 'book' : 'book-outline';
            }
          
            return <Ionicons name={iconName} size={35} color={color} />;
          },
          tabBarActiveTintColor: 'rgb(73, 88, 221)',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Mapa" options={{ headerShown: false }} component={MapScreen} />
        <Tab.Screen name="Lista" options={{ headerShown: false }} component={ListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

