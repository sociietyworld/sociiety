import { View, Text, StyleSheet } from 'react-native';
import { useCapsules } from '../CapsuleContext';

export default function ClosetVault() {
  const { capsules } = useCapsules();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧥 Your Closet</Text>
      {capsules.length === 0 ? (
        <Text style={styles.empty}>No capsules yet — explore the Vault or resale drops.</Text>
      ) : (
        capsules.map((cap, idx) => (
          <View key={idx} style={styles.card}>
            <Text style={styles.cardTitle}>{cap.title}</Text>
            <Text style={styles.cardMeta}>
              Serial: {cap.serial} | Rarity: {cap.rarity}
            </Text>
          </View>
        ))
      )}
    </View>
  );
}
