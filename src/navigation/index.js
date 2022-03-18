import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopBar from './TopBar';


const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Home" component={TopBar} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;