import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from './CartContext';

export default function ProductDetail({ route }) {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const navigation = useNavigation();
  const [isPurchased, setIsPurchased] = useState(false);
  const handleAddToCart = () => {
    addToCart(product);
    alert(`Added ${product.title} to Cart`);
  };
  const handleBuyNow = () => {
    setIsPurchased(true);
    // Điều hướng sang trang Order khi mua hàng thành công
    navigation.navigate('Order', { product });
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchProductDetails();
  }, [productId]);

  return (
    <View style={styles.container}>
      {product ? (
        <View>
          <Image source={{ uri: product.image }} style={styles.image} />
          <View style={styles.productInfo}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>Price: ${product.price}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleAddToCart} style={[styles.button, { marginRight: 10 }]}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 155,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
    marginLeft: 130,
    marginTop: 50,
  },
  productInfo: {
    alignItems: 'center',
    flexDirection: '',
    justifyContent: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  button: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
