import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './component/Login';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';
import Home from './component/Home';
import SignUp from './component/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    // <View style={{flex:1}}>
    //   {/* <View style={{flex: 40}}>
    //     <Login/>
    //   </View> */}

    //   {/* <View style={{flex:1}}>
    //     <SignUp/>
    //   </View> */}

    //   <View style={{flex:1}}>
    //     <Home/>
    //   </View>

    // </View>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
