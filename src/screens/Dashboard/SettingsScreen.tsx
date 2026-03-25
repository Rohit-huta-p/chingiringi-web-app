import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/theme';
import { useAuthStore } from '../../store';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { useMutation } from '@tanstack/react-query';
import { authAPI } from '../../api/auth';

const SettingItem = ({ title, rightElement, onPress }: any) => (
  <TouchableOpacity style={styles.settingItem} onPress={onPress} disabled={!onPress} activeOpacity={0.7}>
    <Text style={styles.settingItemTitle}>{title}</Text>
    {rightElement}
  </TouchableOpacity>
);

export const SettingsScreen = () => {
  const { user, logout } = useAuthStore();
  const [notifications, setNotifications] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);

  const logoutMutation = useMutation({
    mutationFn: authAPI.logout,
    onSuccess: async () => {
      await logout();
    },
    onError: async (err: any) => {
      // Even if backend logout fails (e.g. token expired), clear local tokens securely
      console.warn("Backend logout failed", err.message);
      await logout();
    }
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Text style={styles.headerTitle}>Settings</Text>

      <Card style={styles.card}>
        <View style={styles.profileHeader}>
          <View style={styles.avatarPlaceholder} />
          <View>
            <Text style={styles.profileName}>{user?.name || 'User'}</Text>
            <Text style={styles.profileEmail}>{user?.email || user?.phone || 'No contact info associated'}</Text>
          </View>
        </View>
      </Card>

      <Text style={styles.sectionTitle}>Preferences</Text>
      <Card style={styles.card}>
        <SettingItem 
          title="Push Notifications" 
          rightElement={<Switch value={notifications} onValueChange={setNotifications} />} 
        />
        <View style={styles.divider} />
        <SettingItem 
          title="Dark Theme" 
          rightElement={<Switch value={darkTheme} onValueChange={setDarkTheme} />} 
        />
      </Card>

      <Text style={styles.sectionTitle}>Account</Text>
      <Card style={styles.card}>
        <SettingItem title="Change Password" rightElement={<Text style={styles.arrow}>{'›'}</Text>} onPress={() => {}} />
        <View style={styles.divider} />
        <SettingItem title="Privacy Policy" rightElement={<Text style={styles.arrow}>{'›'}</Text>} onPress={() => {}} />
      </Card>

      <Button 
        title="Log Out" 
        variant="outline" 
        onPress={() => logoutMutation.mutate()} 
        style={styles.logoutButton}
        textStyle={{ color: '#ef4444' }}
        loading={logoutMutation.isPending}
        disabled={logoutMutation.isPending}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 60,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 24,
  },
  card: {
    padding: 16,
    marginBottom: 24,
    borderRadius: 12,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#cbd5e1',
    marginRight: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
  },
  profileEmail: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textSecondary,
    marginBottom: 12,
    marginLeft: 4,
    textTransform: 'uppercase',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  settingItemTitle: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 4,
  },
  arrow: {
    fontSize: 24,
    color: Colors.textSecondary,
    lineHeight: 24,
  },
  logoutButton: {
    marginTop: 16,
    borderColor: '#fca5a5',
  },
});
