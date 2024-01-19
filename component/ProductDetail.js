import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; // Import hook điều hướng

export default function ProductDetail({ route }) {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);

  const navigation = useNavigation(); // Sử dụng hook navigation
  const [isPurchased, setIsPurchased] = useState(false); // Trạng thái mua hàng
  
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

          {/* Add to Cart button */}
          {/* <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity> */}

        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
    marginLeft: 120,
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
  // Add more styles as needed
});
