import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/theme';
import { Sidebar } from '../components/Sidebar';
import { SettingsScreen } from '../screens/Dashboard/SettingsScreen';

const Drawer = createDrawerNavigator();

// Placeholder screens
function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
    </View>
  );
}

function WalletScreen() {
  return (
    <View style={styles.screen}>
      <Text>Wallet Screen</Text>
    </View>
  );
}

// Custom Drawer component can be implemented here later to match exactly the sidebar design
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Wallet"
      drawerContent={(props) => <Sidebar {...props} />}
      screenOptions={{
        drawerType: 'permanent', // Keep sidebar always visible just like desktop
        headerShown: false,
        drawerStyle: {
          width: 250,
          backgroundColor: Colors.surface,
          borderRightWidth: 1,
          borderRightColor: Colors.border,
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Wallet" component={WalletScreen} />
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
