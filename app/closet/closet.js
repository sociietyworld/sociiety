import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { useCapsules } from '../contexts/CapsuleContext'; // adjust path as needed

export default function ClosetScreen() {
  const { capsules } = useCapsules();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🧥 Your Closet</Text>

      {capsules.length === 0 ? (
        <Text style={styles.empty}>No capsules yet. Vault drops or trades will appear here.</Text>
      ) : (
        <FlatList
          data={capsules}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                source={{ uri: item.image }}
                style={styles.image}
                resizeMode="cover"
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.meta}>
                Serial: {item.serial} • Rarity: {item.rarity}
              </Text>
              <Text style={styles.status}>
                {item.scanned ? '✅ Verified' : '🔒 Unverified'}
              </Text>
            </View>
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
    color: '#888',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 10,
    borderColor: '#333',
    borderWidth: 1,
    marginBottom: 16,
  },
  image: {
    height: 180,
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
  status: {
    color: '#4ade80',
    fontSize: 12,
    marginTop: 6,
  },
});
