import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function BetaInvite() {
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!email.includes('@')) {
      Alert.alert('Error', 'Enter a valid email');
      return;
    }

    // Simulate queue submission
    console.log('Invite submitted:', { email, note });
    setSent(true);
    setEmail('');
    setNote('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎟️ SOCIIETY Beta Invite</Text>

      {sent ? (
        <Text style={styles.success}>✅ Invite submitted. Awaiting admin approval.</Text>
      ) : (
        <>
          <TextInput
            placeholder="Enter recipient email"
            placeholderTextColor="#666"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Optional message"
            placeholderTextColor="#666"
            style={styles.textarea}
            value={note}
            onChangeText={setNote}
            multiline
          />
          <Button title="Send Invite" onPress={handleSubmit} color="#FFD700" />
        </>
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
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
  },
  success: {
    color: '#4ade80',
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#111',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 12,
  },
  textarea: {
    backgroundColor: '#111',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 16,
    height: 100,
  },
});
