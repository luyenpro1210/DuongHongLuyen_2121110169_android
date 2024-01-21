import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Product Lipstick</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#888"
        />
        <Image source={require('../assets/search-icon.png')} style={styles.searchIcon} />
      </View>
      <Image source={require('../assets/logo.jpg')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 50,
    backgroundColor: '#fff', // Background color for the header
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#dc143c',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginLeft: 16,
    flex: 2,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#333',
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 8,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
});

export default Header;