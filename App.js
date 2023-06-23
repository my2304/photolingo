
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Homescreen from './screens/Homescreen';
import HomescreenWithCamera from './screens/HomescreenWithCamera';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}}name="Login" component={Login} /> 
        <Stack.Screen name="HomescreenWithCamera" component={HomescreenWithCamera} /> 
        <Stack.Screen name="Homescreen" component={Homescreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
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