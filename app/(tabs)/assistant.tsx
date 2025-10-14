import { Badge } from '@/components/ui/badge';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Language = 'en' | 'zu' | 'xh' | 'af';
type Message = {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
};

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'zu', name: 'isiZulu', flag: '🇿🇦' },
  { code: 'xh', name: 'isiXhosa', flag: '🇿🇦' },
  { code: 'af', name: 'Afrikaans', flag: '🇿🇦' },
];

export default function AssistantScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your Smart Farming Assistant. How can I help you today?',
      sender: 'assistant',
      timestamp: new Date(),
    },
  ]);

  const quickQuestions = [
    { icon: 'leaf.fill', text: 'When to plant tomatoes?', category: 'Planting' },
    { icon: 'drop.fill', text: 'How often to water maize?', category: 'Watering' },
    { icon: 'exclamationmark.triangle.fill', text: 'Yellow leaves on spinach', category: 'Disease' },
    { icon: 'sun.max.fill', text: 'Weather forecast this week', category: 'Weather' },
  ];

  const handleSend = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: message,
        sender: 'user',
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate assistant response
      setTimeout(() => {
        const response: Message = {
          id: (Date.now() + 1).toString(),
          text: 'I understand your question. Based on your location in KwaZulu-Natal and current weather conditions, here\'s my advice...',
          sender: 'assistant',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, response]);
      }, 1000);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top']}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
        <View>
          <Text style={[styles.headerTitle, { color: colors.text }]}>AI Assistant</Text>
          <Text style={[styles.headerSubtitle, { color: colors.textSecondary }]}>Ask me anything about farming</Text>
        </View>
        <TouchableOpacity style={[styles.voiceButton, { backgroundColor: colors.primary }]}>
          <IconSymbol name="mic.fill" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Language Selector */}
      <View style={[styles.languageContainer, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.languageScroll}>
          {languages.map((lang) => (
            <TouchableOpacity
              key={lang.code}
              style={[
                styles.languageButton,
                { 
                  backgroundColor: selectedLanguage === lang.code ? colors.primary : colors.surfaceSecondary,
                  borderColor: colors.border,
                }
              ]}
              onPress={() => setSelectedLanguage(lang.code as Language)}
            >
              <Text style={styles.languageFlag}>{lang.flag}</Text>
              <Text style={[
                styles.languageText,
                { color: selectedLanguage === lang.code ? '#FFFFFF' : colors.text }
              ]}>
                {lang.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        {/* Messages */}
        <ScrollView contentContainerStyle={styles.messagesContainer}>
          {/* Quick Questions */}
          <View style={styles.quickQuestionsSection}>
            <Text style={[styles.quickQuestionsTitle, { color: colors.textSecondary }]}>
              Quick Questions
            </Text>
            <View style={styles.quickQuestionsGrid}>
              {quickQuestions.map((q, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.quickQuestionCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
                  onPress={() => setMessage(q.text)}
                >
                  <IconSymbol name={q.icon} size={24} color={colors.primary} />
                  <Text style={[styles.quickQuestionText, { color: colors.text }]}>{q.text}</Text>
                  <Badge label={q.category} variant="default" style={styles.quickQuestionBadge} />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Chat Messages */}
          {messages.map((msg) => (
            <View
              key={msg.id}
              style={[
                styles.messageContainer,
                msg.sender === 'user' ? styles.userMessage : styles.assistantMessage,
              ]}
            >
              {msg.sender === 'assistant' && (
                <View style={[styles.avatarContainer, { backgroundColor: colors.primary }]}>
                  <IconSymbol name="sparkles" size={20} color="#FFFFFF" />
                </View>
              )}
              <View
                style={[
                  styles.messageBubble,
                  {
                    backgroundColor: msg.sender === 'user' ? colors.primary : colors.surface,
                    borderColor: msg.sender === 'user' ? colors.primary : colors.border,
                  },
                ]}
              >
                <Text style={[
                  styles.messageText,
                  { color: msg.sender === 'user' ? '#FFFFFF' : colors.text }
                ]}>
                  {msg.text}
                </Text>
                <Text style={[
                  styles.messageTime,
                  { color: msg.sender === 'user' ? 'rgba(255,255,255,0.7)' : colors.textSecondary }
                ]}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </Text>
              </View>
              {msg.sender === 'user' && (
                <View style={[styles.avatarContainer, { backgroundColor: colors.secondary }]}>
                  <IconSymbol name="person.fill" size={20} color="#FFFFFF" />
                </View>
              )}
            </View>
          ))}
        </ScrollView>

        {/* Input Area */}
        <View style={[styles.inputContainer, { backgroundColor: colors.surface, borderTopColor: colors.border }]}>
          <View style={[styles.inputWrapper, { backgroundColor: colors.background, borderColor: colors.border }]}>
            <TextInput
              style={[styles.input, { color: colors.text }]}
              placeholder="Type your question here..."
              placeholderTextColor={colors.textSecondary}
              value={message}
              onChangeText={setMessage}
              multiline
              maxLength={500}
            />
            <TouchableOpacity style={styles.attachButton}>
              <IconSymbol name="camera.fill" size={24} color={colors.icon} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[styles.sendButton, { backgroundColor: colors.primary, opacity: message.trim() ? 1 : 0.5 }]}
            onPress={handleSend}
            disabled={!message.trim()}
          >
            <IconSymbol name="arrow.up" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
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
  voiceButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  languageContainer: {
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  languageScroll: {
    paddingHorizontal: 16,
    gap: 8,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
    borderWidth: 1,
  },
  languageFlag: {
    fontSize: 18,
  },
  languageText: {
    fontSize: 14,
    fontWeight: '600',
  },
  messagesContainer: {
    padding: 16,
    paddingBottom: 100,
  },
  quickQuestionsSection: {
    marginBottom: 24,
  },
  quickQuestionsTitle: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  quickQuestionsGrid: {
    gap: 12,
  },
  quickQuestionCard: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    gap: 8,
  },
  quickQuestionText: {
    fontSize: 15,
    fontWeight: '500',
  },
  quickQuestionBadge: {
    alignSelf: 'flex-start',
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 8,
  },
  userMessage: {
    justifyContent: 'flex-end',
  },
  assistantMessage: {
    justifyContent: 'flex-start',
  },
  avatarContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageBubble: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
  },
  messageText: {
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 4,
  },
  messageTime: {
    fontSize: 11,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 12,
    gap: 8,
    borderTopWidth: 1,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 24,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    maxHeight: 100,
  },
  attachButton: {
    padding: 4,
  },
  sendButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

