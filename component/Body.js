import React, { useState, useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Body = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <ScrollView style={styles.body}>
      {products.map((product) => (
        <TouchableOpacity key={product.id} style={styles.item}>
          <Image source={{ uri: product.image }} style={{ width: 100, height: 100 }} />
          <View style={{flex:1}}>
            <Text style={{fontSize:12, fontWeight: 'bold'}}>  {product.title}  </Text>
            <Text style={{fontSize:15, color: '#b22222', textAlign: 'center'}}>  {product.price}  </Text>
          </View>
        </TouchableOpacity>
        
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    // flexWrap: 'wrap',
    flex:100,
    backgroundColor: 'white',
  },
  item: {
    marginTop: 10,
    marginHorizontal: '5%',
    // width: '20%',
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: '#000',
    // overflow: 'hidden',

    // alignItems: 'center',
    // justifyContent: 'space-between',
    // flexDirection: 'column',


    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingVertical: 10,
  },
});

export default Body;
