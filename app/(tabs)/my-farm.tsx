import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type TabType = 'active' | 'history' | 'diary';

export default function MyFarmScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [activeTab, setActiveTab] = useState<TabType>('active');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>My Farm</Text>
        <TouchableOpacity style={[styles.addButton, { backgroundColor: colors.primary }]}>
          <IconSymbol name="plus" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Tab Navigation */}
      <View style={[styles.tabContainer, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'active' && { borderBottomColor: colors.primary }]}
          onPress={() => setActiveTab('active')}
        >
          <Text style={[styles.tabText, { color: activeTab === 'active' ? colors.primary : colors.textSecondary }]}>
            Active Crops
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'history' && { borderBottomColor: colors.primary }]}
          onPress={() => setActiveTab('history')}
        >
          <Text style={[styles.tabText, { color: activeTab === 'history' ? colors.primary : colors.textSecondary }]}>
            History
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'diary' && { borderBottomColor: colors.primary }]}
          onPress={() => setActiveTab('diary')}
        >
          <Text style={[styles.tabText, { color: activeTab === 'diary' ? colors.primary : colors.textSecondary }]}>
            Farm Diary
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {activeTab === 'active' && (
          <>
            {/* Active Crops */}
            <Card style={styles.cropCard}>
              <View style={styles.cropImagePlaceholder}>
                <Text style={styles.cropEmoji}>🌽</Text>
              </View>
              <View style={styles.cropContent}>
                <View style={styles.cropHeader}>
                  <Text style={[styles.cropName, { color: colors.text }]}>Maize (White)</Text>
                  <Badge label="Mature" variant="success" />
                </View>
                <Text style={[styles.cropDetail, { color: colors.textSecondary }]}>
                  <IconSymbol name="calendar" size={14} color={colors.textSecondary} /> Planted: Jan 15, 2025
                </Text>
                <Text style={[styles.cropDetail, { color: colors.textSecondary }]}>
                  <IconSymbol name="location.fill" size={14} color={colors.textSecondary} /> Field A - 2 hectares
                </Text>
                
                {/* Progress */}
                <View style={styles.progressSection}>
                  <View style={styles.progressHeader}>
                    <Text style={[styles.progressLabel, { color: colors.textSecondary }]}>Growth Progress</Text>
                    <Text style={[styles.progressPercent, { color: colors.success }]}>95%</Text>
                  </View>
                  <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { backgroundColor: colors.success, width: '95%' }]} />
                  </View>
                  <Text style={[styles.progressInfo, { color: colors.textSecondary }]}>Day 85 of 90 • Ready in 5 days</Text>
                </View>

                {/* Actions */}
                <View style={styles.cropActions}>
                  <Button title="Log Activity" onPress={() => {}} variant="outline" size="small" style={styles.actionBtn} />
                  <Button title="View Details" onPress={() => {}} variant="primary" size="small" style={styles.actionBtn} />
                </View>
              </View>
            </Card>

            <Card style={styles.cropCard}>
              <View style={styles.cropImagePlaceholder}>
                <Text style={styles.cropEmoji}>🍅</Text>
              </View>
              <View style={styles.cropContent}>
                <View style={styles.cropHeader}>
                  <Text style={[styles.cropName, { color: colors.text }]}>Tomatoes (Roma)</Text>
                  <Badge label="Growing" variant="info" />
                </View>
                <Text style={[styles.cropDetail, { color: colors.textSecondary }]}>
                  <IconSymbol name="calendar" size={14} color={colors.textSecondary} /> Planted: Feb 28, 2025
                </Text>
                <Text style={[styles.cropDetail, { color: colors.textSecondary }]}>
                  <IconSymbol name="location.fill" size={14} color={colors.textSecondary} /> Field B - 0.5 hectares
                </Text>
                
                <View style={styles.progressSection}>
                  <View style={styles.progressHeader}>
                    <Text style={[styles.progressLabel, { color: colors.textSecondary }]}>Growth Progress</Text>
                    <Text style={[styles.progressPercent, { color: colors.info }]}>60%</Text>
                  </View>
                  <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { backgroundColor: colors.info, width: '60%' }]} />
                  </View>
                  <Text style={[styles.progressInfo, { color: colors.textSecondary }]}>Day 45 of 75 • Ready in 30 days</Text>
                </View>

                {/* Alert */}
                <View style={[styles.alertBanner, { backgroundColor: colors.warning + '20', borderColor: colors.warning }]}>
                  <IconSymbol name="exclamationmark.triangle.fill" size={16} color={colors.warning} />
                  <Text style={[styles.alertText, { color: colors.text }]}>Risk of early blight due to rain</Text>
                </View>

                <View style={styles.cropActions}>
                  <Button title="Log Activity" onPress={() => {}} variant="outline" size="small" style={styles.actionBtn} />
                  <Button title="View Details" onPress={() => {}} variant="primary" size="small" style={styles.actionBtn} />
                </View>
              </View>
            </Card>

            <Card style={styles.cropCard}>
              <View style={styles.cropImagePlaceholder}>
                <Text style={styles.cropEmoji}>🥬</Text>
              </View>
              <View style={styles.cropContent}>
                <View style={styles.cropHeader}>
                  <Text style={[styles.cropName, { color: colors.text }]}>Spinach</Text>
                  <Badge label="Seedling" variant="info" />
                </View>
                <Text style={[styles.cropDetail, { color: colors.textSecondary }]}>
                  <IconSymbol name="calendar" size={14} color={colors.textSecondary} /> Planted: Apr 1, 2025
                </Text>
                <Text style={[styles.cropDetail, { color: colors.textSecondary }]}>
                  <IconSymbol name="location.fill" size={14} color={colors.textSecondary} /> Field C - 0.3 hectares
                </Text>
                
                <View style={styles.progressSection}>
                  <View style={styles.progressHeader}>
                    <Text style={[styles.progressLabel, { color: colors.textSecondary }]}>Growth Progress</Text>
                    <Text style={[styles.progressPercent, { color: colors.info }]}>25%</Text>
                  </View>
                  <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { backgroundColor: colors.info, width: '25%' }]} />
                  </View>
                  <Text style={[styles.progressInfo, { color: colors.textSecondary }]}>Day 13 of 50 • Ready in 37 days</Text>
                </View>

                <View style={styles.cropActions}>
                  <Button title="Log Activity" onPress={() => {}} variant="outline" size="small" style={styles.actionBtn} />
                  <Button title="View Details" onPress={() => {}} variant="primary" size="small" style={styles.actionBtn} />
                </View>
              </View>
            </Card>
          </>
        )}

        {activeTab === 'history' && (
          <>
            <Card style={styles.historyCard}>
              <View style={styles.historyHeader}>
                <View style={styles.historyIcon}>
                  <IconSymbol name="checkmark.circle.fill" size={32} color={colors.success} />
                </View>
                <View style={styles.historyContent}>
                  <Text style={[styles.historyTitle, { color: colors.text }]}>Cabbage Harvest</Text>
                  <Text style={[styles.historyDate, { color: colors.textSecondary }]}>Harvested: March 20, 2025</Text>
                  <Text style={[styles.historyYield, { color: colors.success }]}>Yield: 450 kg • Quality: Excellent</Text>
                </View>
              </View>
            </Card>

            <Card style={styles.historyCard}>
              <View style={styles.historyHeader}>
                <View style={styles.historyIcon}>
                  <IconSymbol name="checkmark.circle.fill" size={32} color={colors.success} />
                </View>
                <View style={styles.historyContent}>
                  <Text style={[styles.historyTitle, { color: colors.text }]}>Beetroot Harvest</Text>
                  <Text style={[styles.historyDate, { color: colors.textSecondary }]}>Harvested: February 15, 2025</Text>
                  <Text style={[styles.historyYield, { color: colors.success }]}>Yield: 320 kg • Quality: Good</Text>
                </View>
              </View>
            </Card>
          </>
        )}

        {activeTab === 'diary' && (
          <>
            <Card style={styles.diaryCard}>
              <View style={styles.diaryHeader}>
                <Text style={[styles.diaryDate, { color: colors.primary }]}>April 14, 2025</Text>
                <Badge label="Treatment" variant="warning" />
              </View>
              <Text style={[styles.diaryTitle, { color: colors.text }]}>Applied fungicide to tomatoes</Text>
              <Text style={[styles.diaryDescription, { color: colors.textSecondary }]}>
                Applied organic fungicide to prevent early blight after weather alert. Used 2L of mixture across Field B.
              </Text>
              <Text style={[styles.diaryCrop, { color: colors.textSecondary }]}>Crop: 🍅 Tomatoes • Field B</Text>
            </Card>

            <Card style={styles.diaryCard}>
              <View style={styles.diaryHeader}>
                <Text style={[styles.diaryDate, { color: colors.primary }]}>April 10, 2025</Text>
                <Badge label="Observation" variant="info" />
              </View>
              <Text style={[styles.diaryTitle, { color: colors.text }]}>Maize flowering stage</Text>
              <Text style={[styles.diaryDescription, { color: colors.textSecondary }]}>
                Maize has entered flowering stage. Tassels visible on 80% of plants. Growth looking healthy.
              </Text>
              <Text style={[styles.diaryCrop, { color: colors.textSecondary }]}>Crop: 🌽 Maize • Field A</Text>
            </Card>

            <Card style={styles.diaryCard}>
              <View style={styles.diaryHeader}>
                <Text style={[styles.diaryDate, { color: colors.primary }]}>April 1, 2025</Text>
                <Badge label="Planting" variant="success" />
              </View>
              <Text style={[styles.diaryTitle, { color: colors.text }]}>Started spinach planting</Text>
              <Text style={[styles.diaryDescription, { color: colors.textSecondary }]}>
                Planted spinach seeds in Field C. Used organic compost and spaced rows 30cm apart.
              </Text>
              <Text style={[styles.diaryCrop, { color: colors.textSecondary }]}>Crop: 🥬 Spinach • Field C</Text>
            </Card>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  cropCard: {
    marginBottom: 16,
  },
  cropImagePlaceholder: {
    height: 120,
    backgroundColor: '#F0F4F8',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  cropEmoji: {
    fontSize: 48,
  },
  cropContent: {
    gap: 8,
  },
  cropHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cropName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cropDetail: {
    fontSize: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  progressSection: {
    marginTop: 8,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  progressPercent: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 4,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressInfo: {
    fontSize: 12,
  },
  alertBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    gap: 8,
    marginTop: 8,
  },
  alertText: {
    fontSize: 13,
    flex: 1,
  },
  cropActions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  actionBtn: {
    flex: 1,
  },
  historyCard: {
    marginBottom: 16,
  },
  historyHeader: {
    flexDirection: 'row',
    gap: 12,
  },
  historyIcon: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  historyContent: {
    flex: 1,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  historyDate: {
    fontSize: 14,
    marginBottom: 4,
  },
  historyYield: {
    fontSize: 14,
    fontWeight: '600',
  },
  diaryCard: {
    marginBottom: 16,
  },
  diaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  diaryDate: {
    fontSize: 12,
    fontWeight: '600',
  },
  diaryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  diaryDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  diaryCrop: {
    fontSize: 12,
  },
});

