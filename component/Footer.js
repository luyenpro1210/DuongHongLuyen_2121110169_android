import React from 'react';
import { Image, StyleSheet, View } from 'react-native';


const Footer = () => {
    return(
        <View style={styles.footer}>
            <Image source={require('../assets/Iconns/home.png')} style={{width: 30, height: 30}}/>
            <Image source={require('../assets/Iconns/gh.jpg')} style={{width: 30, height: 30}}/>
            <Image source={require('../assets/Iconns/ghh.jpg')} style={{width: 30, height: 30}}/>
            <Image source={require('../assets/Iconns/menu.png')} style={{width: 30, height: 30}}/>
            <Image source={require('../assets/Iconns/user.png')} style={{width: 30, height: 30}}/>
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