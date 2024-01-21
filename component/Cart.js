import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { CartContext } from './CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      if (item.price && !isNaN(item.price)) {
        return total + item.price;
      }
      return total;
    }, 0).toFixed(2);
  };

  const handlePaymentSuccess = () => {
    setIsPaymentSuccess(true);
    clearCart();
  };

  const renderCartItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>Price: ${item.price.toFixed(2)}</Text>
        <TouchableOpacity onPress={() => removeFromCart(index)} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.cartTitle}>Your Cart</Text>
      {isPaymentSuccess ? (
        <View>
          <Text style={styles.successMessage}>Payment successful!</Text>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}

      {!isPaymentSuccess && cartItems.length > 0 && (
        <View>
          <Text style={styles.totalPrice}>Total: ${getTotalPrice()}</Text>
          <TouchableOpacity onPress={handlePaymentSuccess} style={styles.paymentButton}>
            <Text style={styles.paymentButtonText}>Buy and Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    color: '#000000',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    marginBottom: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginRight: 20,
    borderRadius: 8,
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: 'green',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 5,
    width: 80,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  paymentButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  paymentButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  successMessage: {
    fontSize: 18,
    color: 'green',
    marginTop: 10,
    textAlign: 'center',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
