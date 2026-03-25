import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Colors, Spacing } from '../constants/theme';
import { useUIStore } from '../store/uiStore';

const NavItem = ({ 
  label, 
  iconName, 
  isActive, 
  onPress,
  isCollapsed
}: { 
  label: string; 
  iconName: string; 
  isActive: boolean; 
  onPress: () => void;
  isCollapsed?: boolean;
}) => (
  <TouchableOpacity 
    style={[styles.navItem, isActive && styles.navItemActive, isCollapsed && styles.navItemCollapsed]} 
    onPress={onPress}
  >
    <View style={[styles.iconPlaceholder, { backgroundColor: isActive ? Colors.primary : Colors.textSecondary }, isCollapsed && styles.iconPlaceholderCollapsed]} />
    {!isCollapsed && <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>{label}</Text>}
  </TouchableOpacity>
);

export const Sidebar: React.FC<DrawerContentComponentProps> = (props) => {
  const currentRouteName = props.state.routeNames[props.state.index];
  const { isSidebarCollapsed, toggleSidebar } = useUIStore();

  const navigateTo = (screen: string) => {
    props.navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.logoContainer, isSidebarCollapsed && styles.logoContainerCollapsed]}>
        {!isSidebarCollapsed && <Text style={styles.logoText}>Chingi<Text style={{fontWeight: '100'}}>Ringi</Text></Text>}
        <TouchableOpacity style={styles.collapseBtn} onPress={toggleSidebar}>
          {/* Arrow visual representation depending on state */}
          <Text style={{ color: Colors.textSecondary, fontSize: 18, fontWeight: 'bold' }}>
            {isSidebarCollapsed ? '>' : '<'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainNav}>
        <NavItem 
          label="Discover" 
          iconName="compass-outline" 
          isActive={currentRouteName === 'Home'} // Changed to Home to match drawer routes
          onPress={() => navigateTo('Home')} 
          isCollapsed={isSidebarCollapsed}
        />
        <NavItem 
          label="Wallet" 
          iconName="wallet-outline" 
          isActive={currentRouteName === 'Wallet'} 
          onPress={() => navigateTo('Wallet')} 
          isCollapsed={isSidebarCollapsed}
        />
        <NavItem 
          label="Referrals" 
          iconName="people-outline" 
          isActive={currentRouteName === 'Referrals'} 
          onPress={() => navigateTo('Referrals')} 
          isCollapsed={isSidebarCollapsed}
        />
      </View>

      <View style={styles.bottomNav}>
        <NavItem 
          label="Notifications" 
          iconName="notifications-outline" 
          isActive={currentRouteName === 'Notifications'} 
          onPress={() => navigateTo('Notifications')} 
          isCollapsed={isSidebarCollapsed}
        />
        <NavItem 
          label="Settings" 
          iconName="settings-outline" 
          isActive={currentRouteName === 'Settings'} 
          onPress={() => navigateTo('Settings')} 
          isCollapsed={isSidebarCollapsed}
        />
        
        <View style={[styles.profileSection, isSidebarCollapsed && styles.profileSectionCollapsed]}>
          <View style={[styles.avatarPlaceholder, isSidebarCollapsed && styles.avatarPlaceholderCollapsed]} />
          {!isSidebarCollapsed && (
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Dev Chavan</Text>
              <Text style={styles.profileBalance}>₹1250</Text>
            </View>
          )}
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
  logoContainerCollapsed: {
    justifyContent: 'center',
    paddingHorizontal: 0,
  },
  logoText: {
    fontSize: 22,
    fontWeight: '900',
    color: Colors.text,
  },
  collapseBtn: {
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
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
  navItemCollapsed: {
    justifyContent: 'center',
    paddingHorizontal: 0,
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
  iconPlaceholderCollapsed: {
    marginRight: 0,
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
  profileSectionCollapsed: {
    justifyContent: 'center',
    paddingHorizontal: 0,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    marginRight: 12,
  },
  avatarPlaceholderCollapsed: {
    marginRight: 0,
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
