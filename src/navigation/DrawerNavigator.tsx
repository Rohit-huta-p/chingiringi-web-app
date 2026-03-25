import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/theme';
import { Sidebar } from '../components/Sidebar';
import { SettingsScreen } from '../screens/Dashboard/SettingsScreen';
import { HomeScreen } from '../screens/Dashboard/HomeScreen';
import { useUIStore } from '../store/uiStore';

const Drawer = createDrawerNavigator();

function PlaceholderScreen() {
  return (
    <View style={styles.screen}>
      <Text>Placeholder Screen</Text>
    </View>
  );
}

export default function DrawerNavigator() {
  const isSidebarCollapsed = useUIStore((state) => state.isSidebarCollapsed);

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <Sidebar {...props} />}
      screenOptions={{
        drawerType: 'permanent',
        headerShown: false,
        drawerStyle: {
          width: isSidebarCollapsed ? 80 : 250,
          backgroundColor: Colors.surface,
          borderRightWidth: 1,
          borderRightColor: Colors.border,
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Wallet" component={PlaceholderScreen} />
      <Drawer.Screen name="Referrals" component={PlaceholderScreen} />
      <Drawer.Screen name="Notifications" component={PlaceholderScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.background,
  },
});
