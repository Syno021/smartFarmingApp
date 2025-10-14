import { CustomTabBar, TAB_BAR_HEIGHT } from '@/components/ui/custom-tab-bar';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Import all screen components
import AssistantScreen from './assistant';
import CommunityScreen from './community';
import HomeScreen from './index';
import MarketScreen from './market';
import MyFarmScreen from './my-farm';

type TabKey = 'home' | 'my-farm' | 'assistant' | 'community' | 'market';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [activeTab, setActiveTab] = useState<TabKey>('home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'my-farm':
        return <MyFarmScreen />;
      case 'assistant':
        return <AssistantScreen />;
      case 'community':
        return <CommunityScreen />;
      case 'market':
        return <MarketScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.screenContainer, { paddingBottom: TAB_BAR_HEIGHT }]}>
        {renderScreen()}
      </View>
      <CustomTabBar
        activeTab={activeTab}
        onTabPress={setActiveTab}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
  },
});