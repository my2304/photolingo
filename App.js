import React, { useEffect, useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, View, fetch } from 'react-native';

//IMPORT PHONE GALLERY
import * as ImagePicker from 'expo-image-picker';

import ResultsPage from './ResultsPage';

//SELECTED IMAGE URL
const [pickedImage, setPickedImage] = useState(null);




const fetchAccessToken = async () => {
  try {
    const response = await fetch('https://www.nyckel.com/connect/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:
        'client_id=7m9b5dfpygwlm0tj3ypiirlr9ajtmquq&client_secret=apd08270hu7ujdb0g18jqunf0h2vum28m6bxntb0qp1nkr8wyjckha0g2yzr0c6u&grant_type=client_credentials',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch access token');
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.log('Error fetching access token:', error);
    return null;
  }
};

const classifyImage = async (accessToken, imageBase64) => {
  try {
    const response = await fetch('https://api.nyckel.com/classify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        image: imageBase64 //INSERT CAMERA SOURCE HERE,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to classify image');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error classifying image:', error);
    return null;
  }
};

export default function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [classificationResult, setClassificationResult] = useState(null);
  const [pickedImage, setPickedImage] = useState(null);
  const [showResults, setShowResults] = useState(false);


  useEffect(() => {
    const fetchToken = async () => {
      const token = await fetchAccessToken();
      setAccessToken(token);
    };

    fetchToken();
  }, []);

  const handleImageClassification = async () => {

    if (!accessToken) {
      console.log('Access token is not available');
      return;
    }

    const result = await classifyImage(accessToken, pickedImage);
    setClassificationResult(result);
    setShowResults(true);
  };

  //FUNCTION TO PICK IMAGE
  const pickImageFromGallery = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissionResult.granted) {
        throw new Error('Permission to access the gallery was denied');
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync();

      if (!pickerResult.cancelled) {
        setPickedImage(pickerResult.uri);
      }
    } catch (error) {
      console.log('Error picking image from gallery:', error);
    }
  };

  if (showResults) {
      return (
        <ResultsPage pickedImage={pickedImage} result={classificationResult} />
      );
  }

  return (
    <View style={styles.container}>
        {pickedImage && (
        <Image
          source={{ uri: pickedImage }}
          style={styles.image}
          resizeMode="contain"
        />
      )}

      <Button title="Pick Image" onPress={pickImageFromGallery} />

      <Button title="Classify Image" onPress={handleImageClassification} />

      <StatusBar style="auto" />
    </View>
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
