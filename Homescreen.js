import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from './firebase'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
// import * as ImagePicker from 'expo-image-picker'
// import * as Permissions from 'expo-permissions'
import Bottomtab from './Bottomtab'

// const HomeScreen = () => {
//   const navigation = useNavigation()

//   const handleSignOut = () => {
//     auth
//       .signOut()
//       .then(() => {
//         navigation.replace("Login")
//       })
//       .catch(error => alert(error.message))
//   }

//   return (
//     <View style={styles.container}>
//       <Text>Email: {auth.currentUser?.email}</Text>
//       <TouchableOpacity
//         onPress={handleSignOut}
//         style={styles.button}
//       >
//         <Text style={styles.buttonText}>Sign out</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }
const HomeScreen = () => {
  return (
  <NavigationContainer>
      <Bottomtab/>
    </NavigationContainer>
  );
  }
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})