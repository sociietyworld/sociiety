import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const duelHistory = [
  {
    id: 'duel-001',
    opponent: 'ARCHON_204',
    capsule: 'Mirror Bomber',
    result: 'Win',
    stake: '2,000 S-Coins',
    timestamp: 'Today • 3:22 PM',
  },
  {
    id: 'duel-002',
    opponent: 'VANTA_X',
    capsule: 'Ghost Hoodie',
    result: 'Loss',
    stake: '1,000 S-Coins',
    timestamp: 'Yesterday • 11:07 AM',
  },
];

export default function ColosseumScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🏛 The Colosseum</Text>
      <Text style={styles.sub}>Challenge, stake, and rise through ritual combat.</Text>

      <FlatList
        data={duelHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.result}>
              {item.result === 'Win' ? '🏆 Victory' : '❌ Defeat'}
            </Text>
            <Text style={styles.details}>
              vs. <Text style={styles.opponent}>{item.opponent}</Text>
            </Text>
            <Text style={styles.meta}>
              Capsule: {item.capsule} • Stake: {item.stake}
            </Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create New Duel</Text>
      </TouchableOpacity>
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
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  sub: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#111',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  result: {
    fontSize: 16,
    color: '#4ade80',
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
  opponent: {
    color: '#FFD700',
    fontWeight: '600',
  },
  meta: {
    fontSize: 13,
    color: '#aaa',
    marginTop: 4,
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  button: {
    marginTop: 24,
    padding: 14,
    backgroundColor: '#FFD700',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
