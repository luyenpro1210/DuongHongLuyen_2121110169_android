import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Body = () => {
    return(
        <View style={styles.body}>
            {/* <View>
                <Text style={{color: '#000000'}}>Danh sách</Text>
            </View> */}
            <View style={styles.item}>
                <Image source={require('../assets/1.png.jpg')} style={{width: 100, height: 100}}/>
            </View>
            <View style={styles.item}>
                <Image source={require('../assets/2.png.jpg')} style={{width: 100, height: 100}}/>
            </View>
            <View style={styles.item}>
                <Image source={require('../assets/3.png.jpg')} style={{width: 100, height: 100}}/>
            </View>
            <View style={styles.item}>
                <Image source={require('../assets/4.png.jpg')} style={{width: 100, height: 100}}/>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    body:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    item:{
        marginTop: 10,
        width: '22%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        overflow: 'hidden',
    }

});

export default Body;