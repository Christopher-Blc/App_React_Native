import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ClientsCardProps {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
}

export const ClientsCard = ({ name, surname, email, phoneNumber }: ClientsCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {name} {surname}
      </Text>

      <Text style={styles.text}>
        Email: <Text style={styles.content}>{email}</Text>
      </Text>

      <Text style={styles.text}>
        Teléfono: <Text style={styles.content}>{phoneNumber}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',          
    padding: 20,
    marginBottom: 12,       
    borderRadius: 14,
    backgroundColor: '#ffffff',
    elevation: 4,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: 16,
    color: '#111827',
  },
  text: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 6,
  },
  content: {
    color: '#2563eb',
    fontWeight: '500',
  },
});
