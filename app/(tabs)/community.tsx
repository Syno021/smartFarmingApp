import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type TabType = 'feed' | 'tips' | 'experts';

export default function CommunityScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [activeTab, setActiveTab] = useState<TabType>('feed');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Community</Text>
        <TouchableOpacity style={[styles.addButton, { backgroundColor: colors.primary }]}>
          <IconSymbol name="plus" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Tab Navigation */}
      <View style={[styles.tabContainer, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'feed' && { borderBottomColor: colors.primary }]}
          onPress={() => setActiveTab('feed')}
        >
          <Text style={[styles.tabText, { color: activeTab === 'feed' ? colors.primary : colors.textSecondary }]}>
            Feed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'tips' && { borderBottomColor: colors.primary }]}
          onPress={() => setActiveTab('tips')}
        >
          <Text style={[styles.tabText, { color: activeTab === 'tips' ? colors.primary : colors.textSecondary }]}>
            Tips & Solutions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'experts' && { borderBottomColor: colors.primary }]}
          onPress={() => setActiveTab('experts')}
        >
          <Text style={[styles.tabText, { color: activeTab === 'experts' ? colors.primary : colors.textSecondary }]}>
            Experts
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {activeTab === 'feed' && (
          <>
            {/* Community Post 1 */}
            <Card style={styles.postCard}>
              <View style={styles.postHeader}>
                <View style={[styles.avatar, { backgroundColor: colors.primary }]}>
                  <Text style={styles.avatarText}>SM</Text>
                </View>
                <View style={styles.postAuthorInfo}>
                  <Text style={[styles.authorName, { color: colors.text }]}>Sipho Mthembu</Text>
                  <Text style={[styles.postMeta, { color: colors.textSecondary }]}>Durban, KZN • 2 hours ago</Text>
                </View>
                <Badge label="Farmer" variant="success" />
              </View>
              
              <Text style={[styles.postTitle, { color: colors.text }]}>
                Great maize harvest this season! 🌽
              </Text>
              <Text style={[styles.postContent, { color: colors.textSecondary }]}>
                Just harvested 800kg of white maize from 1 hectare. Used organic compost and the new drip irrigation system. Very happy with the results!
              </Text>

              <View style={[styles.postImage, { backgroundColor: colors.surfaceSecondary }]}>
                <Text style={styles.imagePlaceholder}>🌽📸</Text>
              </View>

              <View style={styles.postFooter}>
                <TouchableOpacity style={styles.postAction}>
                  <IconSymbol name="hand.thumbsup" size={20} color={colors.icon} />
                  <Text style={[styles.postActionText, { color: colors.textSecondary }]}>24 Likes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.postAction}>
                  <IconSymbol name="bubble.left" size={20} color={colors.icon} />
                  <Text style={[styles.postActionText, { color: colors.textSecondary }]}>8 Comments</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.postAction}>
                  <IconSymbol name="square.and.arrow.up" size={20} color={colors.icon} />
                  <Text style={[styles.postActionText, { color: colors.textSecondary }]}>Share</Text>
                </TouchableOpacity>
              </View>
            </Card>

            {/* Community Post 2 */}
            <Card style={styles.postCard}>
              <View style={styles.postHeader}>
                <View style={[styles.avatar, { backgroundColor: colors.secondary }]}>
                  <Text style={styles.avatarText}>TN</Text>
                </View>
                <View style={styles.postAuthorInfo}>
                  <Text style={[styles.authorName, { color: colors.text }]}>Thandi Ndlovu</Text>
                  <Text style={[styles.postMeta, { color: colors.textSecondary }]}>Pietermaritzburg, KZN • 5 hours ago</Text>
                </View>
                <Badge label="Farmer" variant="success" />
              </View>
              
              <Text style={[styles.postTitle, { color: colors.text }]}>
                Need help: Yellow spots on tomato leaves
              </Text>
              <Text style={[styles.postContent, { color: colors.textSecondary }]}>
                My tomatoes are showing yellow spots. Started 3 days ago after heavy rain. Has anyone experienced this? What treatment worked for you?
              </Text>

              <View style={styles.postFooter}>
                <TouchableOpacity style={styles.postAction}>
                  <IconSymbol name="hand.thumbsup" size={20} color={colors.icon} />
                  <Text style={[styles.postActionText, { color: colors.textSecondary }]}>5 Likes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.postAction}>
                  <IconSymbol name="bubble.left" size={20} color={colors.icon} />
                  <Text style={[styles.postActionText, { color: colors.textSecondary }]}>12 Comments</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.postAction}>
                  <IconSymbol name="square.and.arrow.up" size={20} color={colors.icon} />
                  <Text style={[styles.postActionText, { color: colors.textSecondary }]}>Share</Text>
                </TouchableOpacity>
              </View>
            </Card>

            {/* Community Post 3 */}
            <Card style={styles.postCard}>
              <View style={styles.postHeader}>
                <View style={[styles.avatar, { backgroundColor: colors.info }]}>
                  <Text style={styles.avatarText}>PD</Text>
                </View>
                <View style={styles.postAuthorInfo}>
                  <Text style={[styles.authorName, { color: colors.text }]}>Peter du Toit</Text>
                  <Text style={[styles.postMeta, { color: colors.textSecondary }]}>Ladysmith, KZN • 1 day ago</Text>
                </View>
                <Badge label="Expert" variant="info" />
              </View>
              
              <Text style={[styles.postTitle, { color: colors.text }]}>
                Weather Alert: Heavy Rain Expected
              </Text>
              <Text style={[styles.postContent, { color: colors.textSecondary }]}>
                Farmers in northern KZN should prepare for heavy rainfall this weekend. Ensure proper drainage and consider applying preventive fungicides to susceptible crops.
              </Text>

              <View style={styles.postFooter}>
                <TouchableOpacity style={styles.postAction}>
                  <IconSymbol name="hand.thumbsup" size={20} color={colors.icon} />
                  <Text style={[styles.postActionText, { color: colors.textSecondary }]}>45 Likes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.postAction}>
                  <IconSymbol name="bubble.left" size={20} color={colors.icon} />
                  <Text style={[styles.postActionText, { color: colors.textSecondary }]}>18 Comments</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.postAction}>
                  <IconSymbol name="square.and.arrow.up" size={20} color={colors.icon} />
                  <Text style={[styles.postActionText, { color: colors.textSecondary }]}>Share</Text>
                </TouchableOpacity>
              </View>
            </Card>
          </>
        )}

        {activeTab === 'tips' && (
          <>
            <Card style={styles.tipCard}>
              <View style={styles.tipHeader}>
                <View style={[styles.tipIcon, { backgroundColor: colors.success + '20' }]}>
                  <IconSymbol name="lightbulb.fill" size={28} color={colors.success} />
                </View>
                <Badge label="Pest Control" variant="success" />
              </View>
              <Text style={[styles.tipTitle, { color: colors.text }]}>Organic Aphid Control</Text>
              <Text style={[styles.tipContent, { color: colors.textSecondary }]}>
                Mix 1 tablespoon of dish soap with 1 liter of water. Spray on affected plants in the early morning or evening. Repeat every 3 days for 2 weeks.
              </Text>
              <View style={styles.tipFooter}>
                <View style={styles.tipStats}>
                  <IconSymbol name="hand.thumbsup.fill" size={16} color={colors.success} />
                  <Text style={[styles.tipStatsText, { color: colors.textSecondary }]}>127 farmers found this helpful</Text>
                </View>
                <Text style={[styles.tipAuthor, { color: colors.textSecondary }]}>Shared by Nomsa K.</Text>
              </View>
            </Card>

            <Card style={styles.tipCard}>
              <View style={styles.tipHeader}>
                <View style={[styles.tipIcon, { backgroundColor: colors.info + '20' }]}>
                  <IconSymbol name="lightbulb.fill" size={28} color={colors.info} />
                </View>
                <Badge label="Soil Health" variant="info" />
              </View>
              <Text style={[styles.tipTitle, { color: colors.text }]}>Natural Compost Recipe</Text>
              <Text style={[styles.tipContent, { color: colors.textSecondary }]}>
                Layer green waste (grass, vegetable scraps) with brown waste (dry leaves, straw) in a 1:2 ratio. Keep moist and turn weekly. Ready in 8-12 weeks.
              </Text>
              <View style={styles.tipFooter}>
                <View style={styles.tipStats}>
                  <IconSymbol name="hand.thumbsup.fill" size={16} color={colors.success} />
                  <Text style={[styles.tipStatsText, { color: colors.textSecondary }]}>203 farmers found this helpful</Text>
                </View>
                <Text style={[styles.tipAuthor, { color: colors.textSecondary }]}>Shared by James M.</Text>
              </View>
            </Card>

            <Card style={styles.tipCard}>
              <View style={styles.tipHeader}>
                <View style={[styles.tipIcon, { backgroundColor: colors.warning + '20' }]}>
                  <IconSymbol name="lightbulb.fill" size={28} color={colors.warning} />
                </View>
                <Badge label="Disease Prevention" variant="warning" />
              </View>
              <Text style={[styles.tipTitle, { color: colors.text }]}>Preventing Early Blight on Tomatoes</Text>
              <Text style={[styles.tipContent, { color: colors.textSecondary }]}>
                Apply mulch around plants to prevent soil splash. Water at base, not leaves. Space plants for good air circulation. Remove affected leaves immediately.
              </Text>
              <View style={styles.tipFooter}>
                <View style={styles.tipStats}>
                  <IconSymbol name="hand.thumbsup.fill" size={16} color={colors.success} />
                  <Text style={[styles.tipStatsText, { color: colors.textSecondary }]}>89 farmers found this helpful</Text>
                </View>
                <Text style={[styles.tipAuthor, { color: colors.textSecondary }]}>Shared by Dr. Zungu</Text>
              </View>
            </Card>
          </>
        )}

        {activeTab === 'experts' && (
          <>
            <Card style={styles.expertCard}>
              <View style={styles.expertHeader}>
                <View style={[styles.expertAvatar, { backgroundColor: colors.primary }]}>
                  <IconSymbol name="person.fill" size={32} color="#FFFFFF" />
                </View>
                <View style={styles.expertInfo}>
                  <Text style={[styles.expertName, { color: colors.text }]}>Dr. Mbali Zungu</Text>
                  <Text style={[styles.expertTitle, { color: colors.textSecondary }]}>Plant Pathologist</Text>
                  <View style={styles.expertBadges}>
                    <Badge label="Verified Expert" variant="success" />
                  </View>
                </View>
              </View>
              <Text style={[styles.expertBio, { color: colors.textSecondary }]}>
                15+ years experience in crop disease management. Specializing in tomato and maize diseases. Available for consultations.
              </Text>
              <View style={styles.expertStats}>
                <View style={styles.expertStat}>
                  <Text style={[styles.expertStatNumber, { color: colors.text }]}>247</Text>
                  <Text style={[styles.expertStatLabel, { color: colors.textSecondary }]}>Helped</Text>
                </View>
                <View style={styles.expertStat}>
                  <Text style={[styles.expertStatNumber, { color: colors.text }]}>4.9</Text>
                  <Text style={[styles.expertStatLabel, { color: colors.textSecondary }]}>Rating</Text>
                </View>
                <View style={styles.expertStat}>
                  <Text style={[styles.expertStatNumber, { color: colors.text }]}>Durban</Text>
                  <Text style={[styles.expertStatLabel, { color: colors.textSecondary }]}>Location</Text>
                </View>
              </View>
              <Button title="Contact Expert" onPress={() => {}} variant="primary" />
            </Card>

            <Card style={styles.expertCard}>
              <View style={styles.expertHeader}>
                <View style={[styles.expertAvatar, { backgroundColor: colors.secondary }]}>
                  <IconSymbol name="person.fill" size={32} color="#FFFFFF" />
                </View>
                <View style={styles.expertInfo}>
                  <Text style={[styles.expertName, { color: colors.text }]}>John van der Merwe</Text>
                  <Text style={[styles.expertTitle, { color: colors.textSecondary }]}>Extension Officer</Text>
                  <View style={styles.expertBadges}>
                    <Badge label="Verified Expert" variant="success" />
                  </View>
                </View>
              </View>
              <Text style={[styles.expertBio, { color: colors.textSecondary }]}>
                Agricultural extension officer for Msunduzi region. Helping farmers with sustainable farming practices and crop planning.
              </Text>
              <View style={styles.expertStats}>
                <View style={styles.expertStat}>
                  <Text style={[styles.expertStatNumber, { color: colors.text }]}>189</Text>
                  <Text style={[styles.expertStatLabel, { color: colors.textSecondary }]}>Helped</Text>
                </View>
                <View style={styles.expertStat}>
                  <Text style={[styles.expertStatNumber, { color: colors.text }]}>4.8</Text>
                  <Text style={[styles.expertStatLabel, { color: colors.textSecondary }]}>Rating</Text>
                </View>
                <View style={styles.expertStat}>
                  <Text style={[styles.expertStatNumber, { color: colors.text }]}>PMB</Text>
                  <Text style={[styles.expertStatLabel, { color: colors.textSecondary }]}>Location</Text>
                </View>
              </View>
              <Button title="Contact Expert" onPress={() => {}} variant="primary" />
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
  postCard: {
    marginBottom: 16,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  postAuthorInfo: {
    flex: 1,
  },
  authorName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  postMeta: {
    fontSize: 12,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  postContent: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  postImage: {
    height: 200,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  imagePlaceholder: {
    fontSize: 48,
  },
  postFooter: {
    flexDirection: 'row',
    gap: 20,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  postAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  postActionText: {
    fontSize: 13,
  },
  tipCard: {
    marginBottom: 16,
  },
  tipHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  tipIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tipContent: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  tipFooter: {
    gap: 8,
  },
  tipStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  tipStatsText: {
    fontSize: 13,
  },
  tipAuthor: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  expertCard: {
    marginBottom: 16,
  },
  expertHeader: {
    flexDirection: 'row',
    marginBottom: 12,
    gap: 12,
  },
  expertAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  expertInfo: {
    flex: 1,
  },
  expertName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  expertTitle: {
    fontSize: 14,
    marginBottom: 8,
  },
  expertBadges: {
    flexDirection: 'row',
  },
  expertBio: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  expertStats: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 24,
  },
  expertStat: {
    alignItems: 'center',
  },
  expertStatNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  expertStatLabel: {
    fontSize: 12,
  },
});

