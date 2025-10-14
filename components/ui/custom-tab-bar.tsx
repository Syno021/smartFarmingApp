import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IconSymbol } from './icon-symbol';

interface TabItem {
  key: string;
  title: string;
  icon: string;
}

interface CustomTabBarProps {
  activeTab: string;
  onTabPress: (tabKey: string) => void;
}

const tabs: TabItem[] = [
  { key: 'home', title: 'Home', icon: 'house.fill' },
  { key: 'my-farm', title: 'My Farm', icon: 'leaf.fill' },
  { key: 'assistant', title: 'Assistant', icon: 'bubble.left.fill' },
  { key: 'community', title: 'Community', icon: 'person.3.fill' },
  { key: 'market', title: 'Market', icon: 'cart.fill' },
];

export function CustomTabBar({ activeTab, onTabPress }: CustomTabBarProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const insets = useSafeAreaInsets();

  return (
    <View style={[
      styles.container,
      {
        backgroundColor: colors.surface,
        borderTopColor: colors.border,
        paddingBottom: Math.max(insets.bottom, 10),
      }
    ]}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => onTabPress(tab.key)}
            activeOpacity={0.7}
          >
            <IconSymbol
              name={tab.icon}
              size={isActive ? 26 : 24}
              color={isActive ? colors.tint : colors.tabIconDefault}
            />
            <Text style={[
              styles.tabLabel,
              {
                color: isActive ? colors.tint : colors.tabIconDefault,
                fontSize: isActive ? 12 : 11,
              }
            ]}>
              {tab.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

// Export a shared height so layouts can reserve exact space for the fixed tab bar
export const TAB_BAR_HEIGHT = Platform.OS === 'ios' ? 85 : 70;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    borderTopWidth: 1,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    paddingTop: 8,
    height: TAB_BAR_HEIGHT,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  tabLabel: {
    fontWeight: '600',
    marginTop: 2,
    textAlign: 'center',
  },
});
