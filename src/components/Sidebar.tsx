import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Colors } from '../constants/theme';
// import { Ionicons } from '@expo/vector-icons'; // Assuming Expo vector icons

const NavItem = ({ 
  label, 
  iconName, 
  isActive, 
  onPress 
}: { 
  label: string; 
  iconName: string; 
  isActive: boolean; 
  onPress: () => void;
}) => (
  <TouchableOpacity 
    style={[styles.navItem, isActive && styles.navItemActive]} 
    onPress={onPress}
  >
    {/* <Ionicons name={iconName as any} size={20} color={isActive ? Colors.primary : Colors.textSecondary} /> */}
    <View style={[styles.iconPlaceholder, { backgroundColor: isActive ? Colors.primary : Colors.textSecondary }]} />
    <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>{label}</Text>
  </TouchableOpacity>
);

export const Sidebar: React.FC<DrawerContentComponentProps> = (props) => {
  const currentRouteName = props.state.routeNames[props.state.index];

  const navigateTo = (screen: string) => {
    props.navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Chingi<Text style={{fontWeight: '100'}}>Ringi</Text></Text>
        <TouchableOpacity style={styles.collapseBtn}>
          <View style={styles.circleArrow} />
        </TouchableOpacity>
      </View>

      <View style={styles.mainNav}>
        <NavItem 
          label="Discover" 
          iconName="compass-outline" 
          isActive={currentRouteName === 'Discover'} 
          onPress={() => navigateTo('Discover')} 
        />
        <NavItem 
          label="Wallet" 
          iconName="wallet-outline" 
          isActive={currentRouteName === 'Wallet'} 
          onPress={() => navigateTo('Wallet')} 
        />
        <NavItem 
          label="Referrals" 
          iconName="people-outline" 
          isActive={currentRouteName === 'Referrals'} 
          onPress={() => navigateTo('Referrals')} 
        />
      </View>

      <View style={styles.bottomNav}>
        <NavItem 
          label="Notifications" 
          iconName="notifications-outline" 
          isActive={currentRouteName === 'Notifications'} 
          onPress={() => navigateTo('Notifications')} 
        />
        <NavItem 
          label="Settings" 
          iconName="settings-outline" 
          isActive={currentRouteName === 'Settings'} 
          onPress={() => navigateTo('Settings')} 
        />
        
        <View style={styles.profileSection}>
          <View style={styles.avatarPlaceholder} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Dev Chavan</Text>
            <Text style={styles.profileBalance}>₹1250</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
    paddingHorizontal: 8,
  },
  logoText: {
    fontSize: 22,
    fontWeight: '900',
    color: Colors.text,
  },
  collapseBtn: {
    padding: 4,
  },
  circleArrow: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  mainNav: {
    flex: 1,
  },
  bottomNav: {},
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  navItemActive: {
    backgroundColor: Colors.primaryLight,
  },
  iconPlaceholder: {
    width: 20,
    height: 20,
    borderRadius: 4,
    marginRight: 12,
  },
  navLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.textSecondary,
  },
  navLabelActive: {
    color: Colors.primary,
    fontWeight: '700',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    marginTop: 16,
    paddingHorizontal: 8,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    marginRight: 12,
  },
  profileInfo: {
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.text,
  },
  profileBalance: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 2,
  },
});
