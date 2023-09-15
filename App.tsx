import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Settings from './views/Settings/Settings';
import TodoListContainer from './src/views/TodoList/TodoListContainer'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="TodoList" component={TodoListContainer} />
        {/* <Tab.Screen name="Settings" component={Settings} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}