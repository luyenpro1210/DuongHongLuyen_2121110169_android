import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './component/Login';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';
import Home from './component/Home';
import SignUp from './component/SignUp';
import User from './component/User';
import Cart from './component/Cart';
import ProductListByCategory from './component/ProductListByCategory';
import { CartContext, CartProvider } from './component/CartContext'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetail from './component/ProductDetail';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="User" component={User} />
            <Stack.Screen name="Body" component={Body} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="CartContext" component={CartContext} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            <Stack.Screen name="ProductListByCategory" component={ProductListByCategory} />
        </Stack.Navigator>
      </CartProvider>
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
