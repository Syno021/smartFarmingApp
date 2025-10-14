import { AlertCard } from '@/components/ui/alert-card';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { TAB_BAR_HEIGHT } from '@/components/ui/custom-tab-bar';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Fixed Header */}
      <View style={[styles.headerWrapper, { backgroundColor: colors.background }]}>
        <View style={styles.header}>
          <View>
            <Text style={[styles.greeting, { color: colors.textSecondary }]}>Sawubona 👋</Text>
            <Text style={[styles.title, { color: colors.text }]}>Welcome Back, Farmer</Text>
          </View>
          <TouchableOpacity style={[styles.languageButton, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <IconSymbol name="globe" size={20} color={colors.icon} />
            <Text style={[styles.languageText, { color: colors.text }]}>EN</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView 
        style={styles.flex}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: 16 + TAB_BAR_HEIGHT }]}
      >

        {/* Weather Card */}
        <Card style={styles.weatherCard}>
          <View style={styles.weatherHeader}>
            <View>
              <Text style={[styles.weatherLocation, { color: colors.textSecondary }]}>KwaZulu-Natal</Text>
              <Text style={[styles.weatherTemp, { color: colors.text }]}>24°C</Text>
            </View>
            <View style={[styles.weatherIcon, { backgroundColor: colors.secondary + '20' }]}>
              <IconSymbol name="sun.max.fill" size={40} color={colors.secondary} />
            </View>
          </View>
          <View style={styles.weatherDetails}>
            <View style={styles.weatherItem}>
              <IconSymbol name="drop.fill" size={16} color={colors.accent} />
              <Text style={[styles.weatherItemText, { color: colors.textSecondary }]}>60% Humidity</Text>
            </View>
            <View style={styles.weatherItem}>
              <IconSymbol name="wind" size={16} color={colors.accent} />
              <Text style={[styles.weatherItemText, { color: colors.textSecondary }]}>12 km/h Wind</Text>
            </View>
          </View>
        </Card>

        {/* Active Alerts */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Active Alerts</Text>
          <AlertCard 
            title="Rain Expected Tomorrow"
            message="Heavy rain predicted. Your tomatoes may be at risk of early blight. Apply preventive treatment today."
            severity="warning"
          />
          <AlertCard 
            title="Harvest Ready"
            message="Your maize crop is ready for harvest based on planting date (90 days ago)."
            severity="success"
          />
        </View>

        {/* Quick Stats */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Farm Overview</Text>
          <View style={styles.statsGrid}>
            <Card style={styles.statCard}>
              <IconSymbol name="leaf.fill" size={32} color={colors.primary} />
              <Text style={[styles.statNumber, { color: colors.text }]}>5</Text>
              <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Active Crops</Text>
            </Card>
            <Card style={styles.statCard}>
              <IconSymbol name="calendar" size={32} color={colors.secondary} />
              <Text style={[styles.statNumber, { color: colors.text }]}>12</Text>
              <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Days to Harvest</Text>
            </Card>
            <Card style={styles.statCard}>
              <IconSymbol name="chart.line.uptrend.xyaxis" size={32} color={colors.success} />
              <Text style={[styles.statNumber, { color: colors.text }]}>85%</Text>
              <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Health Score</Text>
            </Card>
            <Card style={styles.statCard}>
              <IconSymbol name="dollarsign.circle.fill" size={32} color={colors.info} />
              <Text style={[styles.statNumber, { color: colors.text }]}>3</Text>
              <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Market Offers</Text>
            </Card>
          </View>
        </View>

        {/* Recent Crops */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>My Crops</Text>
            <TouchableOpacity>
              <Text style={[styles.seeAllText, { color: colors.primary }]}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <Card style={styles.cropCard}>
            <View style={styles.cropHeader}>
              <View>
                <Text style={[styles.cropName, { color: colors.text }]}>🌽 Maize</Text>
                <Text style={[styles.cropDate, { color: colors.textSecondary }]}>Planted 85 days ago</Text>
              </View>
              <Badge label="Mature" variant="success" />
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { backgroundColor: colors.success, width: '95%' }]} />
            </View>
            <Text style={[styles.cropInfo, { color: colors.textSecondary }]}>Expected harvest in 5 days</Text>
          </Card>

          <Card style={styles.cropCard}>
            <View style={styles.cropHeader}>
              <View>
                <Text style={[styles.cropName, { color: colors.text }]}>🍅 Tomatoes</Text>
                <Text style={[styles.cropDate, { color: colors.textSecondary }]}>Planted 45 days ago</Text>
              </View>
              <Badge label="Growing" variant="info" />
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { backgroundColor: colors.info, width: '60%' }]} />
            </View>
            <Text style={[styles.cropInfo, { color: colors.textSecondary }]}>Expected harvest in 30 days</Text>
          </Card>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <IconSymbol name="plus.circle.fill" size={28} color={colors.primary} />
              <Text style={[styles.actionText, { color: colors.text }]}>Add Crop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <IconSymbol name="message.fill" size={28} color={colors.accent} />
              <Text style={[styles.actionText, { color: colors.text }]}>Ask Assistant</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <IconSymbol name="camera.fill" size={28} color={colors.secondary} />
              <Text style={[styles.actionText, { color: colors.text }]}>Scan Disease</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <IconSymbol name="person.2.fill" size={28} color={colors.success} />
              <Text style={[styles.actionText, { color: colors.text }]}>Community</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  headerWrapper: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 14,
    marginBottom: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    gap: 6,
  },
  languageText: {
    fontSize: 14,
    fontWeight: '600',
  },
  weatherCard: {
    marginBottom: 20,
  },
  weatherHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  weatherLocation: {
    fontSize: 14,
    marginBottom: 4,
  },
  weatherTemp: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  weatherIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weatherDetails: {
    flexDirection: 'row',
    gap: 20,
  },
  weatherItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  weatherItemText: {
    fontSize: 14,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '600',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    flex: 1,
    minWidth: '45%',
    alignItems: 'center',
    padding: 20,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
  cropCard: {
    marginBottom: 12,
  },
  cropHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  cropName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  cropDate: {
    fontSize: 14,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  cropInfo: {
    fontSize: 12,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    minWidth: '45%',
    alignItems: 'center',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    gap: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});
