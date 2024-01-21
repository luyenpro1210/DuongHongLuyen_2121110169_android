import React from 'react';
import { Text, View } from 'react-native';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';


const Home = () => {
    return(
        <View style={{flex:1}}>
            <View style={{flex: 15}}>
                <Header/>
            </View>

            <View style={{flex: 80}}>
                <Body/>
            </View>

            <View style={{flex: 3}}>
                <Footer/>
            </View>
        </View>
    );
};

export default Home;