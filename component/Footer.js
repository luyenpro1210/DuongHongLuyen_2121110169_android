import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import User from '../component/User'
import {useNavigation} from '@react-navigation/native';

const Footer = () => {

    const navigation = useNavigation();

    const navigateHome = () => {
        navigation.navigate('Home');
      };
    
      const navigateCart = () => {
        navigation.navigate('Cart');
      };

      const navigateProduct = () => {
        navigation.navigate('ProductListByCategory');
      };
    
      const navigateUser = () => {
        navigation.navigate('User');
      };
    

    return(
        <View style={styles.footer}>
            <TouchableOpacity onPress={navigateHome} >
                <Image source={require('../assets/Iconns/home.png')} style={{width: 30, height: 30}}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateProduct} >
                <Image source={require('../assets/Iconns/ds.png')} style={{width: 30, height: 30}}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateCart} >
                <Image source={require('../assets/Iconns/ghh.jpg')} style={{width: 30, height: 30}}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateHome} >
                <Image source={require('../assets/Iconns/menu.png')} style={{width: 30, height: 30}}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateUser} >
                <Image source={require('../assets/Iconns/user.png')} style={{width: 30, height: 30}}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footer:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
});

export default Footer;
