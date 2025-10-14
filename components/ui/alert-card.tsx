import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconSymbol } from './icon-symbol';

interface AlertCardProps {
  title: string;
  message: string;
  severity: 'warning' | 'danger' | 'info' | 'success';
  iconName?: string;
}

export function AlertCard({ title, message, severity, iconName }: AlertCardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const getColor = () => {
    switch (severity) {
      case 'warning': return colors.warning;
      case 'danger': return colors.danger;
      case 'info': return colors.info;
      case 'success': return colors.success;
    }
  };

  const getDefaultIcon = () => {
    switch (severity) {
      case 'warning': return 'exclamationmark.triangle.fill';
      case 'danger': return 'exclamationmark.circle.fill';
      case 'info': return 'info.circle.fill';
      case 'success': return 'checkmark.circle.fill';
    }
  };

  const severityColor = getColor();

  return (
    <View style={[styles.container, { backgroundColor: colors.surface, borderColor: severityColor, borderLeftColor: severityColor }]}>
      <View style={[styles.iconContainer, { backgroundColor: severityColor + '20' }]}>
        <IconSymbol name={iconName || getDefaultIcon()} size={24} color={severityColor} />
      </View>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        <Text style={[styles.message, { color: colors.textSecondary }]}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderLeftWidth: 4,
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    lineHeight: 20,
  },
});

