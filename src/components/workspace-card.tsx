import { Image, StyleSheet, Text, View } from 'react-native';

import { Workspace } from '@/data/workspaces';

const COLORS = {
  accent: '#0EA5A5',
  card: '#FFFFFF',
  primary: '#1A1D1F',
  secondary: '#6B7280',
  ratingBackground: '#FFF3E0',
  ratingText: '#B7791F',
};

type WorkspaceCardProps = {
  workspace: Workspace;
};

export function WorkspaceCard({ workspace }: WorkspaceCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: workspace.imageUrl }} style={styles.image} resizeMode="cover" />
      <View style={styles.body}>
        <View style={styles.headerRow}>
          <Text style={styles.name} numberOfLines={1}>
            {workspace.name}
          </Text>
          <View style={styles.ratingBadge}>
            <Text style={styles.ratingText}>* {workspace.rating}</Text>
          </View>
        </View>
        <Text style={styles.location} numberOfLines={1}>
          {workspace.location}
        </Text>
        <Text style={styles.rent}>INR {workspace.rent}/day</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    elevation: 3,
    marginBottom: 14,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  image: {
    height: 160,
    width: '100%',
  },
  body: {
    padding: 16,
  },
  headerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    color: COLORS.primary,
    flex: 1,
    fontSize: 17,
    fontWeight: '700',
    marginRight: 8,
  },
  ratingBadge: {
    backgroundColor: COLORS.ratingBackground,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  ratingText: {
    color: COLORS.ratingText,
    fontSize: 12,
    fontWeight: '600',
  },
  location: {
    color: COLORS.secondary,
    fontSize: 13,
    marginTop: 4,
  },
  rent: {
    color: COLORS.accent,
    fontSize: 18,
    fontWeight: '800',
    marginTop: 10,
  },
});
