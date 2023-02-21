import { IconComponentProvider } from '@react-native-material/core';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DraftsStack } from './routes/DraftsStack';
import { InboxStack } from './routes/InboxStack';
import Inbox from './screens/Inbox';

// const Drawer= createDrawerNavigator()

export default function App() {
  return (
    <IconComponentProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <InboxStack/>
        {/* <Drawer.Navigator screenOptions={{headerShown:false}}>
          <Drawer.Screen name='Inbox' component={InboxStack}/>
          <Drawer.Screen name='Drafts' component={DraftsStack}/>
        </Drawer.Navigator> */}

      </NavigationContainer>
    </IconComponentProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
