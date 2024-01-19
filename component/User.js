import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';

const User = () => {

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text >User</Text>
    </View>
  );
};


export default User;





// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';

// const User = ({ onSave }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');

//   const handleSave = () => {
    
//     if (email.trim() === '' || password.trim() === '' || username.trim() === '') {
//       alert('Please fill in all fields.');
//       return;
//     }

    
//     onSave({
//       email: email.trim(),
//       password: password.trim(),
//       username: username.trim(),
//     });

    
//     setEmail('');
//     setPassword('');
//     setUsername('');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Email:</Text>
//       <TextInput
//         style={styles.input}
//         value={email}
//         onChangeText={setEmail}
//         placeholder="Enter your email"
//       />

//       <Text style={styles.label}>Password:</Text>
//       <TextInput
//         style={styles.input}
//         value={password}
//         onChangeText={setPassword}
//         placeholder="Enter your password"
//         secureTextEntry
//       />

//       <Text style={styles.label}>Username:</Text>
//       <TextInput
//         style={styles.input}
//         value={username}
//         onChangeText={setUsername}
//         placeholder="Enter your username"
//       />

//       <TouchableHighlight style={styles.button} onPress={handleSave}>
//         <View>
//           <Text style={styles.buttonText}>Save</Text>
//         </View>
//       </TouchableHighlight>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: '#00ffff',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//   },
// });

// export default User;
