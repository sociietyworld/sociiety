import { View, Text, StyleSheet } from 'react-native';

export default function InnerCircleTimeline({ memoryLogs = [] }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🤝 Inner Circle Timeline</Text>
      <Text style={styles.subtitle}>Track who you’ve connected with through verified in-person encounters.</Text>
      {memoryLogs.length === 0 ? (
        <Text style={styles.empty}>You haven’t made any Inner Circle connections yet. Try a fist bump.</Text>
      ) : (
        memoryLogs.map((log, i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.cardTitle}>Connection with: {log.participants.join(' & ')}</Text>
            <Text style={styles.cardMeta}>At: {log.location || 'Unknown'} • {new Date(log.timestamp).toLocaleString()}</Text>
          </View>
        ))
      )}
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
  empty: {
    fontSize: 14,
    color: '#aaa',
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
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  cardMeta: {
    fontSize: 12,
    color: '#aaa',
  },
});
