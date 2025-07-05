import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AppLayout from '../app/AppLayout'; // adjust if AppLayout is higher-level

export default function BetaEntry() {
  const [key, setKey] = useState('');
  const [verified, setVerified] = useState(false);

  const founderKey = 'SCLASS-VAULT-0001';

  const handleAccess = () => {
    if (key.trim() === founderKey) {
      setVerified(true);
    } else {
      alert('Invalid key');
    }
  };

  if (verified) {
    return <AppLayout />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔐 SOCIIETY Beta Access</Text>
      <TextInput
        placeholder="Enter your S-Class key"
        placeholderTextColor="#666"
        value={key}
        onChangeText={setKey}
        style={styles.input}
      />
      <Button title="Enter Vault" onPress={handleAccess} color="#FFD700" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#111',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    borderColor: '#333',
    borderWidth: 1,
    marginBottom: 16,
  },
});
