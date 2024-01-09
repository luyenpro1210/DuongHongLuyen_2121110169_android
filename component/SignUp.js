import React, { useState } from 'react';
import { Image, Keyboard, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Home from './Home';
import  Icon  from 'react-native-vector-icons/FontAwesome';

const Login = ( {navigation} ) => {
    const [useremail, setUserEmail] = React.useState('');
    const [password, setPassWord] = React.useState('');

    const formSignIn = () => {
        Keyboard.dismiss();
        fetch('http://10.17.6.213:8081/api/users')
            .then(response => response.json())
            .then(data => {
                const user = data.content.find(item => item.email === useremail);
                console.log(user)
                if (user) {
                    if(user.password===password)
                    {
                        navigation.navigate('Main');
                    }
                }
                else{
                    alert("Sai email hoặc mật khẩu")
                }})
                    .catch(error => {
                        console.error('Lỗi gọi API:', error);
                    });
    };

    return(
        <View style={{backgroundColor: '#00ffff', flex: 1, }}>
                        <View style={{backgroundColor: 'white', margin: 10, flex: 1, borderRadius: 10 }}>
                <View style={{flex: 1, marginVertical: 20, }}>
                    {/* header */}
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:30,
                            fontWeight: 'bold',
                            color: 'black',
                        }}>
                            SignUp
                        </Text>
                    </View>
                    {/* body */}
                    <View style={{flex:6, }}>
                        <View style={{margin:30, }}>
                            {/* username */}
                            <View style={{marginBottom:20}}>
                                <View>
                                <Text style={{color:'black', }}>UserName</Text>
                                <View style={{flexDirection:'row',
                                                borderBottomColor:'grey',
                                                borderBottomWidth: 1,
                                            }}>
                                    <View style={{justifyContent:'center', 
                                                    alignItems:'center',
                                                    padding: 10,
                                                }}>
                                        <Icon name="user" size={15} />
                                    </View>
                                    <View style={{flex:1}}>
                                        <TextInput value={useremail}
                                                    onChangeText={text => setUserEmail(text)}
                                         placeholder='Type your user name' />
                                    </View>
                                </View>

                                </View>
                                {/* password */}
                                <View>
                                <Text style={{color:'black', }}>PassWord</Text>
                                <View style={{flexDirection:'row',
                                                borderBottomColor:'grey',
                                                borderBottomWidth: 1,
                                            }}>
                                    <View style={{justifyContent:'center', 
                                                    alignItems:'center',
                                                    padding: 10,
                                                }}>
                                        <Icon name="lock" size={15} />
                                    </View>
                                    <View style={{flex:1}}>
                                        <TextInput secureTextEntry
                                                    value={password}
                                                    onChangeText={text => setPassWord(text)}
                                         placeholder='Type your user password' 
                                        />
                                    </View>
                                </View>
                                    {/* <Image soure={require('../assets/eye.jpg')} style={{height: '30%', aspectRatio: 1}} /> */}
                                </View>
                                {/* forgot password */}
                                
                                {/* login button */}
                                <View style={{justifyContent:'center', 
                                                alignItems:'center',
                                                marginVertical: 20,
                                                backgroundColor:'#00ffff',
                                                padding:10,
                                                borderRadius:50,

                                            }}>
                                        {/* <TouchableOpacity activeOpacity={0.5} onPress={onClickLogin}></TouchableOpacity> */}
                                        <TouchableHighlight onPress={formSignIn} >
                                            <View>
                                                <Text style={{color: 'white'}}>SignUp</Text>
                                            </View>
                                        </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                        <View style={{marginVertical:20,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                            <Text>Or Sign Up Using</Text>
                            <View style={{marginTop:10, 
                                            flexDirection:'row',
                                        }}>
                                {/* fb */}
                                <TouchableOpacity style={{width:40, 
                                                            height:40, 
                                                            padding:10,
                                                            backgroundColor:'#3b5998',
                                                            borderRadius:50,
                                                            justifyContent:'center', 
                                                            alignItems:'center',
                                                            margin:5,
                                                        }}>
                                    <Icon name="facebook-f" size={20} color={'white'} />
                                </TouchableOpacity>
                                {/* tw */}
                                <TouchableOpacity style={{width:40, 
                                                            height:40, 
                                                            padding:10,
                                                            backgroundColor:'#1dcaff',
                                                            borderRadius:50,
                                                            justifyContent:'center', 
                                                            alignItems:'center',
                                                            margin:5,
                                                        }}>
                                    <Icon name="twitter" size={20} color={'white'} />
                                </TouchableOpacity>
                                {/* gg */}
                                <TouchableOpacity style={{width:40, 
                                                            height:40, 
                                                            padding:10,
                                                            backgroundColor:'#EA4335',
                                                            borderRadius:50,
                                                            justifyContent:'center', 
                                                            alignItems:'center',
                                                            margin:5,
                                                        }}>
                                    <Icon name="google" size={20} color={'white'} />
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                    {/* footer */}
                    

                </View>
            </View>

        </View>
    );
};

export default Login;