import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name= 'Home' component={Home} options={{headerShown:false}} />
            
        </Stack.Navigator>
    );
}