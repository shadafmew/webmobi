import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Parent"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            
        </Stack.Navigator>
    );
};

export default AppNavigation;
