import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Home from './Home';

const Stack = createNativeStackNavigator();

const Index = () => {
    return(
        // <View>
        //     <Text>Đây là trang Home</Text>
        // </View>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Index;