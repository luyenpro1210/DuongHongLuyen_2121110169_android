import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import User from '../component/User'
import {useNavigation} from '@react-navigation/native';

const Footer = () => {

    const navigation = useNavigation();

    const navigateUser = () => {
        navigation.navigate('User');
    }

    return(
        <View style={styles.footer}>
            <TouchableOpacity onPress={User} >
                <Image source={require('../assets/Iconns/home.png')} style={{width: 30, height: 30}}/>
            </TouchableOpacity>

            <TouchableOpacity  >
                <Image source={require('../assets/Iconns/gh.jpg')} style={{width: 30, height: 30}}/>
            </TouchableOpacity>

            <TouchableOpacity  >
                <Image source={require('../assets/Iconns/ghh.jpg')} style={{width: 30, height: 30}}/>
            </TouchableOpacity>

            <TouchableOpacity  >
                <Image source={require('../assets/Iconns/menu.png')} style={{width: 30, height: 30}}/>
            </TouchableOpacity>

            <TouchableOpacity  >
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






// import React from 'react';
// import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';



// const Footer = ( {navigation} ) => {
//     return(
//         <View style={styles.footer}>
//             <TouchableOpacity onPress={() => {navigation.navigate('Home')}} >
//                 <Image source={require('../assets/Iconns/home.png')} style={{width: 30, height: 30}}/>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => {navigation.navigate('SignUp')}} >
//                 <Image source={require('../assets/Iconns/gh.jpg')} style={{width: 30, height: 30}}/>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => {navigation.navigate('SignUp')}} >
//                 <Image source={require('../assets/Iconns/ghh.jpg')} style={{width: 30, height: 30}}/>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => {navigation.navigate('SignUp')}} >
//                 <Image source={require('../assets/Iconns/menu.png')} style={{width: 30, height: 30}}/>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => {navigation.navigate('User')}} >
//                 <Image source={require('../assets/Iconns/user.png')} style={{width: 30, height: 30}}/>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     footer:{
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         flexDirection: 'row',
//     }
// });

// export default Footer;