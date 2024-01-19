import React, { useState } from 'react';
import { Text, TextInput, TouchableHighlight, TouchableOpacity, View, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUp = ({ navigation }) => {
  const [useremail, setUserEmail] = useState('');
  const [password, setPassWord] = useState('');

  const formSignUp = () => {
    Keyboard.dismiss();

    fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: useremail,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('Đăng ký thành công');
        // Chuyển hướng đến trang đăng nhập hoặc trang chính của ứng dụng
        navigation.navigate('Login');
      })
      .catch(error => {
        console.error('Lỗi gọi API:', error);
        alert('Đã có lỗi xảy ra khi gọi API');
      });
  };

  return (
    <View style={{ backgroundColor: '#00ffff', flex: 1 }}>
      <View style={{ backgroundColor: 'white', margin: 10, flex: 1, borderRadius: 10 }}>
        <View style={{ flex: 1, marginVertical: 20 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
            }}>
              SignUp
            </Text>
          </View>
          <View style={{ flex: 6 }}>
            <View style={{ margin: 30 }}>
              <View style={{ marginBottom: 20 }}>
                <View>
                  <Text style={{ color: 'black' }}>UserName</Text>
                  <View style={{
                    flexDirection: 'row',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}>
                    <View style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 10,
                    }}>
                      <Icon name="user" size={15} />
                    </View>
                    <View style={{ flex: 1 }}>
                      <TextInput
                        value={useremail}
                        onChangeText={text => setUserEmail(text)}
                        placeholder='Type your user name'
                      />
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={{ color: 'black' }}>PassWord</Text>
                  <View style={{
                    flexDirection: 'row',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}>
                    <View style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 10,
                    }}>
                      <Icon name="lock" size={15} />
                    </View>
                    <View style={{ flex: 1 }}>
                      <TextInput
                        secureTextEntry
                        value={password}
                        onChangeText={text => setPassWord(text)}
                        placeholder='Type your user password'
                      />
                    </View>
                  </View>
                </View>
                <View style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 20,
                  backgroundColor: '#00ffff',
                  padding: 10,
                  borderRadius: 50,
                }}>
                  <TouchableHighlight onPress={formSignUp}>
                    <View>
                      <Text style={{ color: 'white' }}>SignUp</Text>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
            <View style={{
              marginVertical: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text>Or Sign Up Using</Text>
              <View style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
                <TouchableOpacity style={{
                  width: 40,
                  height: 40,
                  padding: 10,
                  backgroundColor: '#3b5998',
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5,
                }}>
                  <Icon name="facebook-f" size={20} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                  width: 40,
                  height: 40,
                  padding: 10,
                  backgroundColor: '#1dcaff',
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5,
                }}>
                  <Icon name="twitter" size={20} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                  width: 40,
                  height: 40,
                  padding: 10,
                  backgroundColor: '#EA4335',
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5,
                }}>
                  <Icon name="google" size={20} color={'white'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
