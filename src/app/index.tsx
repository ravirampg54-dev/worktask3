import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { WorkspaceCard } from '@/components/workspace-card';
import { workspaces } from '@/data/workspaces';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.title}>Workspaces</Text>
          <Text style={styles.subtitle}>{workspaces.length} spaces available near you</Text>
        </View>
        <FlatList
          data={workspaces}
          keyExtractor={(workspace) => workspace.id}
          renderItem={({ item }) => <WorkspaceCard workspace={item} />}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F7F8',
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    paddingBottom: 8,
    paddingTop: 16,
  },
  title: {
    color: '#1A1D1F',
    fontSize: 26,
    fontWeight: '700',
  },
  subtitle: {
    color: '#6B7280',
    fontSize: 14,
    marginTop: 2,
  },
  listContent: {
    paddingBottom: 24,
    paddingTop: 8,
  },
});
