import React, { useEffect, useState, Component } from 'react';
import {
  Image,
  PermissionsAndroid,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Button, 
  Animated, 
  StyleSheet, 
  StatusBar, 
  Text
} from 'react-native';
import { FlatList } from 'react-native-web';


const DATA = [
    {
      id: 1,
      name: "Image 1",
      uri: {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign1_byvldn.png'},
      url: "https://unsplash.com/photos/C9t94JC4_L8"
    },
    {
      id: 2,
      name: "image 2",
      uri: {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign2_hfbowa.png'},
      url: "https://unsplash.com/photos/waZEHLRP98s"
    },
    {
      id: 3,
      name: "Image 3",
      uri: {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign3_utrh6j.jpg'},
      url: "https://unsplash.com/photos/cFplR9ZGnAk"
    },
    {
      id: 4,
      name: "Image 4",
      uri: {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign4_wlc7p1.jpg'},
      url: "https://unsplash.com/photos/89PFnHKg8HE"
    },
    {
      id: 5,
      name: "Image 5",
      uri: {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817882/campaign5_wudgxu.jpg'},
      url: "https://unsplash.com/photos/89PFnHKg8HE"
    },
    {
      id: 6,
      name: "Image 6",
      uri: {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign6_lfiwwo.jpg'},
      url: "https://unsplash.com/photos/89PFnHKg8HE"
    },
  ];

  const Item = ({title, uri}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={{ uri }} />
    </View>
  );

const Gallery = () => {
        return (
          <ScrollView>
      {DATA.map((item) => (
        <Item key={item.id} title={item.name} uri={item.uri}/>
      ))}
    </ScrollView>
        );
      
      }


      const styles = StyleSheet.create({
        container: {
          flex: 1,
          marginTop: StatusBar.currentHeight || 0,
        },
        item: {
          backgroundColor: '#82C49E',
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16,
        },
        title: {
          fontSize: 32,
        },
        image: {
          height: 200,
          marginTop: 10,
        },
      });
      
export default Gallery

