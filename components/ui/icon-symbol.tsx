// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight, SymbolViewProps } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconMapping = Record<string, ComponentProps<typeof MaterialIcons>['name']>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'leaf.fill': 'eco',
  'bubble.left.fill': 'chat-bubble',
  'person.3.fill': 'group',
  'cart.fill': 'shopping-cart',
  'plus': 'add',
  'magnifyingglass': 'search',
  'location.fill': 'location-on',
  'calendar': 'event',
  'drop.fill': 'water-drop',
  'wind': 'air',
  'sun.max.fill': 'wb-sunny',
  'exclamationmark.triangle.fill': 'warning',
  'checkmark.circle.fill': 'check-circle',
  'exclamationmark.circle.fill': 'error',
  'info.circle.fill': 'info',
  'hand.thumbsup': 'thumb-up',
  'hand.thumbsup.fill': 'thumb-up',
  'bubble.left': 'chat-bubble-outline',
  'square.and.arrow.up': 'share',
  'person.fill': 'person',
  'lightbulb.fill': 'lightbulb',
  'sparkles': 'auto-awesome',
  'mic.fill': 'mic',
  'camera.fill': 'camera-alt',
  'arrow.up': 'keyboard-arrow-up',
  'globe': 'language',
  'chart.line.uptrend.xyaxis': 'trending-up',
  'dollarsign.circle.fill': 'attach-money',
  'scalemass': 'scale',
  'star.fill': 'star',
  'shield.fill': 'security',
} as IconMapping;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
