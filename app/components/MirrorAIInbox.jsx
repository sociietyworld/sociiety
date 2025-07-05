import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const mirrorMessages = [
  {
    id: 'msg-001',
    type: 'system',
    content: '🔔 Welcome to SOCIIETY. Your Meter is now live.',
    timestamp: 'Just now',
  },
  {
    id: 'msg-002',
    type: 'suggestion',
    content: '🧠 Mirror Suggestion: List Genesis Trench before the vault rotates.',
    timestamp: '2h ago',
  },
  {
    id: 'msg-003',
    type: 'insight',
    content: '📊 You have a 3-trade streak. Consider bundling your rare capsule.',
    timestamp: 'Yesterday',
  },
];

export default function MirrorInboxScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🧠 Mirror AI Inbox</Text>

      <FlatList
        data={mirrorMessages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.message}>{item.content}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
        )}
      />
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
  card: {
    backgroundColor: '#111',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
  message: {
    color: '#eee',
    fontSize: 15,
    marginBottom: 4,
  },
  timestamp: {
    color: '#777',
    fontSize: 12,
  },
});
