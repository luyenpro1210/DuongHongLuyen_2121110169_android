// Màn hình ProductList
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ProductList = ({ route }) => {
  const { selectedCategory } = route.params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((res) => res.json())
        .then((productsData) => {
          setProducts(productsData);
        })
        .catch((error) => console.error('Error fetching products:', error));
    }
  }, [selectedCategory]);

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>Price: ${item.price.toFixed(2)}</Text>
      {/* Các thông tin sản phẩm khác */}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  productItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
});

export default ProductList;
