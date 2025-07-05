import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useCapsules } from '../contexts/CapsuleContext';

export default function MarketplaceScreen() {
  const { capsules } = useCapsules();

  const tradeableCapsules = capsules.filter((c) => c.scanned);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🛍 Marketplace</Text>

      {tradeableCapsules.length === 0 ? (
        <Text style={styles.empty}>No verified capsules available for trade or resale.</Text>
      ) : (
        <FlatList
          data={tradeableCapsules}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card}>
              <Image
                source={{ uri: item.image }}
                style={styles.image}
                resizeMode="cover"
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.meta}>
                Serial: {item.serial} • {item.rarity}
              </Text>
              <Text style={styles.price}>💰 Offer: 5,000 S-Coins or Trade</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 16,
  },
  empty: {
    color: '#999',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 16,
  },
  image: {
    height: 160,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  meta: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 2,
  },
  price: {
    color: '#FFD700',
    fontSize: 13,
    marginTop: 8,
  },
});
