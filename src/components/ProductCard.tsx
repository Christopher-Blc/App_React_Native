import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ProductCardProps {
  title: string;
  price: number;
  description: string;
}

export const ProductCard = ({
  title,
  price,
  description,
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState<number>(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price.toFixed(2)} €</Text>

      <Text style={styles.description}>{description}</Text>

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Añadir al carrito</Text>
      </TouchableOpacity>

      <Text style={styles.quantity}>Unidades: {quantity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 750,
    padding: 16,
    margin: 16,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: '#2563EB',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  quantity: {
    fontSize: 14,
    color: '#111827',
  },
});
