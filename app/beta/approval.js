import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const mockInvites = [
  {
    id: '1',
    email: 'alpha@sociiety.com',
    note: 'Elite founder referral',
    submittedAt: new Date().toISOString(),
  },
];

export default function BetaApproval() {
  const handleDecision = (invite, decision) => {
    console.log(`${decision.toUpperCase()} beta invite:`, invite.email);
    // Add server update logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>✅ Beta Approval Queue</Text>
      <FlatList
        data={mockInvites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.email}>📧 {item.email}</Text>
            {item.note && <Text style={styles.note}>“{item.note}”</Text>}
            <Text style={styles.timestamp}>
              Submitted: {new Date(item.submittedAt).toLocaleString()}
            </Text>
            <View style={styles.actions}>
              <Button
                title="Approve"
                onPress={() => handleDecision(item, 'approved')}
                color="#4ade80"
              />
              <Button
                title="Deny"
                onPress={() => handleDecision(item, 'denied')}
                color="#f87171"
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    color: '#FFD700',
    fontSize: 22,
    fontWeight: 'bold',
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
  email: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  note: {
    color: '#aaa',
    fontSize: 14,
    fontStyle: 'italic',
    marginVertical: 6,
  },
  timestamp: {
    color: '#666',
    fontSize: 12,
    marginBottom: 8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
