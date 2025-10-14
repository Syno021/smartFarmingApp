/**
 * Smart Farming Companion App - Professional AgroTech Theme
 * Colors designed to work beautifully in both light and dark modes
 */

import { Platform } from 'react-native';

// Agricultural-inspired color palette
const primaryGreen = '#2D7A3E'; // Rich farm green for light mode
const primaryGreenDark = '#4CAF50'; // Brighter green for dark mode
const accentOrange = '#FF9800'; // Harvest/sun orange
const accentBlue = '#03A9F4'; // Water/sky blue

export const Colors = {
  light: {
    text: '#1A1A1A',
    textSecondary: '#666666',
    background: '#F5F7FA',
    surface: '#FFFFFF',
    surfaceSecondary: '#F0F4F8',
    tint: primaryGreen,
    primary: primaryGreen,
    secondary: accentOrange,
    accent: accentBlue,
    success: '#4CAF50',
    warning: '#FF9800',
    danger: '#F44336',
    info: '#03A9F4',
    border: '#E0E0E0',
    borderLight: '#F0F0F0',
    icon: '#666666',
    iconLight: '#999999',
    tabIconDefault: '#999999',
    tabIconSelected: primaryGreen,
    cardShadow: 'rgba(0, 0, 0, 0.1)',
  },
  dark: {
    text: '#FFFFFF',
    textSecondary: '#B0B0B0',
    background: '#121212',
    surface: '#1E1E1E',
    surfaceSecondary: '#2A2A2A',
    tint: primaryGreenDark,
    primary: primaryGreenDark,
    secondary: accentOrange,
    accent: accentBlue,
    success: '#66BB6A',
    warning: '#FFA726',
    danger: '#EF5350',
    info: '#29B6F6',
    border: '#333333',
    borderLight: '#2A2A2A',
    icon: '#B0B0B0',
    iconLight: '#808080',
    tabIconDefault: '#808080',
    tabIconSelected: primaryGreenDark,
    cardShadow: 'rgba(0, 0, 0, 0.3)',
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
