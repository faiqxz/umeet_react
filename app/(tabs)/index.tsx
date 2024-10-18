import { Image, StyleSheet, Platform, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.content}>
          <Text style={styles.title}>U-Meet</Text>
          <Text style={styles.subtitle}>Selamat Datang, OCTA DWIANSYAH</Text>
          <Text style={styles.description}>
            Anda telah mengikuti <Text style={styles.highlight}>3 Kegiatan bulan ini</Text>
          </Text>
          <View style={styles.statContainer}>
            <View style={styles.statItem}>
              {/* Replace with appropriate icons for React Native */}
              <Text style={styles.statText}>10 Mengikuti</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statText}>3 Sertifikat</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    padding: 20,
    marginTop: 10,
  },
  content: {
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#6b7280',
  },
  highlight: {
    color: '#1E90FF',
    fontWeight: 'bold',
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
