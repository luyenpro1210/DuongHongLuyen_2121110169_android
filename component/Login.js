import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';

const Login = () => {
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
                            Login
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
                                        <TextInput  placeholder='Type your user name' />
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
                                        <TextInput secureTextEntry placeholder='Type your user password' 
                                        />
                                    </View>
                                </View>

                                </View>
                                {/* forgot password */}
                                <View style={{marginTop:10, alignItems:'flex-end'}}>
                                    <Text style={{color: 'black'}}>Forgot password?</Text>
                                </View>
                                {/* login button */}
                                <View style={{justifyContent:'center', 
                                                alignItems:'center',
                                                marginVertical: 20,
                                                backgroundColor:'#00ffff',
                                                padding:10,
                                                borderRadius:50,

                                            }}>
                                        {/* <TouchableOpacity activeOpacity={0.5} onPress={onClickLogin}></TouchableOpacity> */}
                                        <TouchableOpacity activeOpacity={0.5} >
                                            <Text style={{color:'white'}}>LOGIN</Text>
                                        </TouchableOpacity>
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
                    <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
                        <Text>Or Sign Up Using</Text>

                        {/* buttonSignUp */}
                        <TouchableOpacity style={{padding:20,}}>
                            <Text style={{color: 'black', fontWeight: '500'}}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        </View>
    );
};

export default Login;