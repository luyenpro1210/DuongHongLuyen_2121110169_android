import React, { useState, useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Body = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  const navigateToProductDetail = (productId) => {
    navigation.navigate('ProductDetail', { productId });
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigateToProductDetail(item.id)}>
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{item.title}</Text>
        <Text style={{ fontSize: 15, color: '#b22222', textAlign: 'center' }}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderProductItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.body}
    />
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    marginBottom: 20,
  },
  item: {
    width: '47.5%',
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingVertical: 10,
  },
});

export default Body;
