import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './component/Login';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';

export default function App() {
  return (
    <View style={{flex:1}}>
      <View style={{flex: 40}}>
        <Login/>
      </View>

      {/* <View style={{flex: 15}}>
        <Header/>
      </View>

      <View style={{flex: 40}}>
        <Body/>
      </View>

      <View style={{flex: 3}}>
        <Footer/>
      </View> */}


    </View>
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
