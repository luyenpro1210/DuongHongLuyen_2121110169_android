import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return(
        <View style={styles.header}>
            <Text style={{color:'#dc143c',fontSize:20}}>Product Lipstick</Text>
            <Image source={require('../assets/logo.jpg')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
});
export default Header;