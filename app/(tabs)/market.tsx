import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { TAB_BAR_HEIGHT } from '@/components/ui/custom-tab-bar';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type TabType = 'sell' | 'buy' | 'supplies';

export default function MarketScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [activeTab, setActiveTab] = useState<TabType>('sell');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
        <View>
          <Text style={[styles.headerTitle, { color: colors.text }]}>Marketplace</Text>
          <Text style={[styles.headerSubtitle, { color: colors.textSecondary }]}>Connect with buyers & suppliers</Text>
        </View>
        <TouchableOpacity style={[styles.addButton, { backgroundColor: colors.primary }]}>
          <IconSymbol name="plus" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={[styles.searchContainer, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
        <View style={[styles.searchBar, { backgroundColor: colors.background, borderColor: colors.border }]}>
          <IconSymbol name="magnifyingglass" size={20} color={colors.icon} />
          <TextInput
            style={[styles.searchInput, { color: colors.text }]}
            placeholder="Search products, buyers, suppliers..."
            placeholderTextColor={colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Tab Navigation */}
      <View style={[styles.tabContainer, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'sell' && { borderBottomColor: colors.primary }]}
          onPress={() => setActiveTab('sell')}
        >
          <Text style={[styles.tabText, { color: activeTab === 'sell' ? colors.primary : colors.textSecondary }]}>
            Sell Produce
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'buy' && { borderBottomColor: colors.primary }]}
          onPress={() => setActiveTab('buy')}
        >
          <Text style={[styles.tabText, { color: activeTab === 'buy' ? colors.primary : colors.textSecondary }]}>
            Buy Produce
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'supplies' && { borderBottomColor: colors.primary }]}
          onPress={() => setActiveTab('supplies')}
        >
          <Text style={[styles.tabText, { color: activeTab === 'supplies' ? colors.primary : colors.textSecondary }]}>
            Farm Supplies
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={[styles.scrollContent, { paddingBottom: 16 + TAB_BAR_HEIGHT }]}>
        {activeTab === 'sell' && (
          <>
            {/* My Listings */}
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>My Active Listings</Text>
              
              <Card style={styles.listingCard}>
                <View style={styles.listingHeader}>
                  <View style={styles.listingImage}>
                    <Text style={styles.listingEmoji}>🌽</Text>
                  </View>
                  <View style={styles.listingInfo}>
                    <Text style={[styles.listingTitle, { color: colors.text }]}>White Maize</Text>
                    <Text style={[styles.listingMeta, { color: colors.textSecondary }]}>800 kg available</Text>
                    <Text style={[styles.listingPrice, { color: colors.primary }]}>R 4,500/ton</Text>
                  </View>
                  <Badge label="Active" variant="success" />
                </View>
                <View style={styles.listingDetails}>
                  <View style={styles.listingDetail}>
                    <IconSymbol name="calendar" size={16} color={colors.textSecondary} />
                    <Text style={[styles.listingDetailText, { color: colors.textSecondary }]}>Harvest: 5 days</Text>
                  </View>
                  <View style={styles.listingDetail}>
                    <IconSymbol name="location.fill" size={16} color={colors.textSecondary} />
                    <Text style={[styles.listingDetailText, { color: colors.textSecondary }]}>Durban, KZN</Text>
                  </View>
                </View>
                <View style={[styles.interestBanner, { backgroundColor: colors.success + '20' }]}>
                  <IconSymbol name="hand.raised.fill" size={16} color={colors.success} />
                  <Text style={[styles.interestText, { color: colors.success }]}>3 buyers interested</Text>
                </View>
                <View style={styles.listingActions}>
                  <Button title="View Offers" onPress={() => {}} variant="primary" size="small" style={styles.actionButton} />
                  <Button title="Edit" onPress={() => {}} variant="outline" size="small" style={styles.actionButton} />
                </View>
              </Card>

              <Card style={styles.listingCard}>
                <View style={styles.listingHeader}>
                  <View style={styles.listingImage}>
                    <Text style={styles.listingEmoji}>🍅</Text>
                  </View>
                  <View style={styles.listingInfo}>
                    <Text style={[styles.listingTitle, { color: colors.text }]}>Roma Tomatoes</Text>
                    <Text style={[styles.listingMeta, { color: colors.textSecondary }]}>300 kg available</Text>
                    <Text style={[styles.listingPrice, { color: colors.primary }]}>R 8/kg</Text>
                  </View>
                  <Badge label="Active" variant="success" />
                </View>
                <View style={styles.listingDetails}>
                  <View style={styles.listingDetail}>
                    <IconSymbol name="calendar" size={16} color={colors.textSecondary} />
                    <Text style={[styles.listingDetailText, { color: colors.textSecondary }]}>Harvest: 30 days</Text>
                  </View>
                  <View style={styles.listingDetail}>
                    <IconSymbol name="location.fill" size={16} color={colors.textSecondary} />
                    <Text style={[styles.listingDetailText, { color: colors.textSecondary }]}>Durban, KZN</Text>
                  </View>
                </View>
                <View style={[styles.interestBanner, { backgroundColor: colors.info + '20' }]}>
                  <IconSymbol name="hand.raised.fill" size={16} color={colors.info} />
                  <Text style={[styles.interestText, { color: colors.info }]}>1 buyer interested</Text>
                </View>
                <View style={styles.listingActions}>
                  <Button title="View Offers" onPress={() => {}} variant="primary" size="small" style={styles.actionButton} />
                  <Button title="Edit" onPress={() => {}} variant="outline" size="small" style={styles.actionButton} />
                </View>
              </Card>
            </View>
          </>
        )}

        {activeTab === 'buy' && (
          <>
            {/* Available Produce */}
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>Available Produce</Text>
              
              <Card style={styles.produceCard}>
                <View style={styles.produceHeader}>
                  <View style={styles.produceImage}>
                    <Text style={styles.produceEmoji}>🥬</Text>
                  </View>
                  <View style={styles.produceInfo}>
                    <Text style={[styles.produceTitle, { color: colors.text }]}>Fresh Spinach</Text>
                    <View style={styles.sellerInfo}>
                      <IconSymbol name="person.fill" size={14} color={colors.textSecondary} />
                      <Text style={[styles.sellerName, { color: colors.textSecondary }]}>Nomsa Khumalo</Text>
                    </View>
                    <Text style={[styles.producePrice, { color: colors.primary }]}>R 15/kg</Text>
                  </View>
                </View>
                <View style={styles.produceDetails}>
                  <View style={styles.produceDetailItem}>
                    <IconSymbol name="scalemass" size={16} color={colors.textSecondary} />
                    <Text style={[styles.produceDetailText, { color: colors.textSecondary }]}>150 kg available</Text>
                  </View>
                  <View style={styles.produceDetailItem}>
                    <IconSymbol name="calendar" size={16} color={colors.textSecondary} />
                    <Text style={[styles.produceDetailText, { color: colors.textSecondary }]}>Ready: 2 days</Text>
                  </View>
                  <View style={styles.produceDetailItem}>
                    <IconSymbol name="location.fill" size={16} color={colors.textSecondary} />
                    <Text style={[styles.produceDetailText, { color: colors.textSecondary }]}>PMB, KZN</Text>
                  </View>
                </View>
                <Button title="Contact Seller" onPress={() => {}} variant="primary" />
              </Card>

              <Card style={styles.produceCard}>
                <View style={styles.produceHeader}>
                  <View style={styles.produceImage}>
                    <Text style={styles.produceEmoji}>🥕</Text>
                  </View>
                  <View style={styles.produceInfo}>
                    <Text style={[styles.produceTitle, { color: colors.text }]}>Organic Carrots</Text>
                    <View style={styles.sellerInfo}>
                      <IconSymbol name="person.fill" size={14} color={colors.textSecondary} />
                      <Text style={[styles.sellerName, { color: colors.textSecondary }]}>Thabo Dlamini</Text>
                    </View>
                    <Text style={[styles.producePrice, { color: colors.primary }]}>R 12/kg</Text>
                  </View>
                </View>
                <View style={styles.produceDetails}>
                  <View style={styles.produceDetailItem}>
                    <IconSymbol name="scalemass" size={16} color={colors.textSecondary} />
                    <Text style={[styles.produceDetailText, { color: colors.textSecondary }]}>250 kg available</Text>
                  </View>
                  <View style={styles.produceDetailItem}>
                    <IconSymbol name="calendar" size={16} color={colors.textSecondary} />
                    <Text style={[styles.produceDetailText, { color: colors.textSecondary }]}>Ready: Now</Text>
                  </View>
                  <View style={styles.produceDetailItem}>
                    <IconSymbol name="location.fill" size={16} color={colors.textSecondary} />
                    <Text style={[styles.produceDetailText, { color: colors.textSecondary }]}>Ladysmith, KZN</Text>
                  </View>
                </View>
                <View style={styles.badges}>
                  <Badge label="Organic" variant="success" />
                  <Badge label="Certified" variant="info" />
                </View>
                <Button title="Contact Seller" onPress={() => {}} variant="primary" />
              </Card>

              <Card style={styles.produceCard}>
                <View style={styles.produceHeader}>
                  <View style={styles.produceImage}>
                    <Text style={styles.produceEmoji}>🥔</Text>
                  </View>
                  <View style={styles.produceInfo}>
                    <Text style={[styles.produceTitle, { color: colors.text }]}>Potatoes</Text>
                    <View style={styles.sellerInfo}>
                      <IconSymbol name="person.fill" size={14} color={colors.textSecondary} />
                      <Text style={[styles.sellerName, { color: colors.textSecondary }]}>Peter van Wyk</Text>
                    </View>
                    <Text style={[styles.producePrice, { color: colors.primary }]}>R 3,500/ton</Text>
                  </View>
                </View>
                <View style={styles.produceDetails}>
                  <View style={styles.produceDetailItem}>
                    <IconSymbol name="scalemass" size={16} color={colors.textSecondary} />
                    <Text style={[styles.produceDetailText, { color: colors.textSecondary }]}>2 tons available</Text>
                  </View>
                  <View style={styles.produceDetailItem}>
                    <IconSymbol name="calendar" size={16} color={colors.textSecondary} />
                    <Text style={[styles.produceDetailText, { color: colors.textSecondary }]}>Ready: Now</Text>
                  </View>
                  <View style={styles.produceDetailItem}>
                    <IconSymbol name="location.fill" size={16} color={colors.textSecondary} />
                    <Text style={[styles.produceDetailText, { color: colors.textSecondary }]}>Newcastle, KZN</Text>
                  </View>
                </View>
                <Button title="Contact Seller" onPress={() => {}} variant="primary" />
              </Card>
            </View>
          </>
        )}

        {activeTab === 'supplies' && (
          <>
            {/* Farm Supplies */}
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>Farm Supplies & Equipment</Text>
              
              <Card style={styles.supplyCard}>
                <View style={styles.supplyHeader}>
                  <View style={[styles.supplyIcon, { backgroundColor: colors.primary + '20' }]}>
                    <IconSymbol name="drop.fill" size={32} color={colors.primary} />
                  </View>
                  <View style={styles.supplyInfo}>
                    <Text style={[styles.supplyTitle, { color: colors.text }]}>Drip Irrigation Kit</Text>
                    <Text style={[styles.supplySupplier, { color: colors.textSecondary }]}>AgriTech Supplies</Text>
                    <Text style={[styles.supplyPrice, { color: colors.primary }]}>R 2,500</Text>
                  </View>
                  <Badge label="In Stock" variant="success" />
                </View>
                <Text style={[styles.supplyDescription, { color: colors.textSecondary }]}>
                  Complete drip irrigation system for up to 1 hectare. Includes pipes, drippers, and connectors.
                </Text>
                <View style={styles.supplyMeta}>
                  <View style={styles.supplyMetaItem}>
                    <IconSymbol name="location.fill" size={14} color={colors.textSecondary} />
                    <Text style={[styles.supplyMetaText, { color: colors.textSecondary }]}>Durban</Text>
                  </View>
                  <View style={styles.supplyMetaItem}>
                    <IconSymbol name="star.fill" size={14} color={colors.warning} />
                    <Text style={[styles.supplyMetaText, { color: colors.textSecondary }]}>4.5 (23 reviews)</Text>
                  </View>
                </View>
                <Button title="Contact Supplier" onPress={() => {}} variant="primary" size="small" />
              </Card>

              <Card style={styles.supplyCard}>
                <View style={styles.supplyHeader}>
                  <View style={[styles.supplyIcon, { backgroundColor: colors.success + '20' }]}>
                    <IconSymbol name="leaf.fill" size={32} color={colors.success} />
                  </View>
                  <View style={styles.supplyInfo}>
                    <Text style={[styles.supplyTitle, { color: colors.text }]}>Organic Fertilizer</Text>
                    <Text style={[styles.supplySupplier, { color: colors.textSecondary }]}>Green Grow Organics</Text>
                    <Text style={[styles.supplyPrice, { color: colors.primary }]}>R 350/bag (50kg)</Text>
                  </View>
                  <Badge label="In Stock" variant="success" />
                </View>
                <Text style={[styles.supplyDescription, { color: colors.textSecondary }]}>
                  100% organic compost fertilizer. Rich in nutrients, perfect for vegetables and maize.
                </Text>
                <View style={styles.supplyMeta}>
                  <View style={styles.supplyMetaItem}>
                    <IconSymbol name="location.fill" size={14} color={colors.textSecondary} />
                    <Text style={[styles.supplyMetaText, { color: colors.textSecondary }]}>Pietermaritzburg</Text>
                  </View>
                  <View style={styles.supplyMetaItem}>
                    <IconSymbol name="star.fill" size={14} color={colors.warning} />
                    <Text style={[styles.supplyMetaText, { color: colors.textSecondary }]}>4.8 (45 reviews)</Text>
                  </View>
                </View>
                <View style={styles.badges}>
                  <Badge label="Organic" variant="success" />
                  <Badge label="Certified" variant="info" />
                </View>
                <Button title="Contact Supplier" onPress={() => {}} variant="primary" size="small" />
              </Card>

              <Card style={styles.supplyCard}>
                <View style={styles.supplyHeader}>
                  <View style={[styles.supplyIcon, { backgroundColor: colors.warning + '20' }]}>
                    <IconSymbol name="shield.fill" size={32} color={colors.warning} />
                  </View>
                  <View style={styles.supplyInfo}>
                    <Text style={[styles.supplyTitle, { color: colors.text }]}>Organic Pesticide</Text>
                    <Text style={[styles.supplySupplier, { color: colors.textSecondary }]}>EcoFarm Solutions</Text>
                    <Text style={[styles.supplyPrice, { color: colors.primary }]}>R 180/liter</Text>
                  </View>
                  <Badge label="In Stock" variant="success" />
                </View>
                <Text style={[styles.supplyDescription, { color: colors.textSecondary }]}>
                  Natural pest control solution. Safe for humans and beneficial insects. Effective against aphids and beetles.
                </Text>
                <View style={styles.supplyMeta}>
                  <View style={styles.supplyMetaItem}>
                    <IconSymbol name="location.fill" size={14} color={colors.textSecondary} />
                    <Text style={[styles.supplyMetaText, { color: colors.textSecondary }]}>Durban</Text>
                  </View>
                  <View style={styles.supplyMetaItem}>
                    <IconSymbol name="star.fill" size={14} color={colors.warning} />
                    <Text style={[styles.supplyMetaText, { color: colors.textSecondary }]}>4.6 (18 reviews)</Text>
                  </View>
                </View>
                <Button title="Contact Supplier" onPress={() => {}} variant="primary" size="small" />
              </Card>
            </View>
          </>
        )}
      </ScrollView>
    </View>
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
  headerSubtitle: {
    fontSize: 14,
    marginTop: 2,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    borderWidth: 1,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
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
    fontSize: 13,
    fontWeight: '600',
  },
  scrollContent: {
    padding: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listingCard: {
    marginBottom: 16,
  },
  listingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  listingImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#F0F4F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listingEmoji: {
    fontSize: 32,
  },
  listingInfo: {
    flex: 1,
  },
  listingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  listingMeta: {
    fontSize: 13,
    marginBottom: 4,
  },
  listingPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listingDetails: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
  },
  listingDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  listingDetailText: {
    fontSize: 13,
  },
  interestBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 6,
    gap: 6,
    marginBottom: 12,
  },
  interestText: {
    fontSize: 13,
    fontWeight: '600',
  },
  listingActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    flex: 1,
  },
  produceCard: {
    marginBottom: 16,
  },
  produceHeader: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  produceImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: '#F0F4F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  produceEmoji: {
    fontSize: 36,
  },
  produceInfo: {
    flex: 1,
  },
  produceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  sellerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 6,
  },
  sellerName: {
    fontSize: 13,
  },
  producePrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  produceDetails: {
    gap: 8,
    marginBottom: 12,
  },
  produceDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  produceDetailText: {
    fontSize: 14,
  },
  badges: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  supplyCard: {
    marginBottom: 16,
  },
  supplyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  supplyIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  supplyInfo: {
    flex: 1,
  },
  supplyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  supplySupplier: {
    fontSize: 13,
    marginBottom: 4,
  },
  supplyPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  supplyDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  supplyMeta: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
  },
  supplyMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  supplyMetaText: {
    fontSize: 12,
  },
});

