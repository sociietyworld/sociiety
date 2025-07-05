import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const vaultSchedule = [
  { id: '1', title: 'Genesis Capsule 001', date: new Date(Date.now() + 86400000) },
];

const alerts = [
  '✅ Mirror initialized — monitoring trade intentions.',
  '📦 First vault drop scheduled.',
  '🎯 You have 3 Beta Invites to deploy.',
];

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🧪 SOCIIETY Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.title}>⏱ Vault Countdown</Text>
        <Text style={styles.value}>23h 59m remaining</Text>
        <Text style={styles.meta}>Until next rotation</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>📦 Upcoming Vault Drops</Text>
        <FlatList
          data={vaultSchedule}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.listItem}>
              • {item.title} — {new Date(item.date).toLocaleDateString()}
            </Text>
          )}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>🧠 Mirror Alerts</Text>
        {alerts.map((note, i) => (
          <Text key={i} style={styles.listItem}>🔔 {note}</Text>
        ))}
      </View>
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
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 16,
  },
  title: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  value: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  meta: {
    color: '#888',
    fontSize: 12,
    marginTop: 4,
  },
  listItem: {
    color: '#ccc',
    fontSize: 14,
    marginVertical: 2,
  },
});
