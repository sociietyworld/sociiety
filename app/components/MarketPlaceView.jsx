import { View, Text, StyleSheet } from 'react-native';

export default function MarketplaceView() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛍 Marketplace</Text>
      <Text style={styles.subtitle}>Resale, barter, and discover rare capsule listings from across SOCIIETY.</Text>
      <View style={styles.cardContainer}>
        {[1, 2, 3].map((id) => (
          <View key={id} style={styles.card}>
            <Text style={styles.cardTitle}>Sample Capsule #{id}</Text>
            <Text style={styles.cardMeta}>Type: Trade or Coin | Status: Active</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 16,
  },
  cardContainer: {
    gap: 12,
  },
  card: {
    backgroundColor: '#111',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  cardMeta: {
    fontSize: 12,
    color: '#aaa',
  },
});
