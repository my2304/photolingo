import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Homescreen';
import HomescreenWithCamera from './HomescreenWithCamera';

const Tab = createBottomTabNavigator();




const Bottomtab = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name= 'Home' component= {HomeScreen}/>
        <Tab.Screen name= 'Camera' component= {HomescreenWithCamera}/>
        {/*<Tab.Screen name= 'Gallery' component= {}/>*/}
    </Tab.Navigator>
  )
}

export default Bottomtab

const styles = StyleSheet.create({})