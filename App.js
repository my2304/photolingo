import React, { useEffect, useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, View, fetch } from 'react-native';

//tensorflow
import * as mobilenet from "@tensorflow-models/mobilenet";

//IMPORT PHONE GALLERY
import * as ImagePicker from 'expo-image-picker';

import ResultsPage from './ResultsPage';


//NEW CLASSIFY FUNCTION
const classifyImage = async () => {
    const results = await model.classify(pickedImage); //edit picked image to fulfil tensorflow reqs
    setResults(results);
}


/* NYCKEL FUNCTIONS
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
}; */

/* OLD CLASSIFY FUNCTION
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
}; */

/*
  useEffect(() => {
    const fetchToken = async () => {
      const token = await fetchAccessToken();
      setAccessToken(token);
    };

    fetchToken();
  }, []); */

  /*
    const handleImageClassification = async () => {

      if (!accessToken) {
        console.log('Access token is not available');
        return;
      }

      const result = await classifyImage(accessToken, pickedImage);
      setClassificationResult(result);
      setShowResults(true);


    }; */


export default function App() {
//OLD
  const [accessToken, setAccessToken] = useState(null);
  const [classificationResult, setClassificationResult] = useState(null);
  const [pickedImage, setPickedImage] = useState(null);
  const [showResults, setShowResults] = useState(false);

//NEW
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [results, setResults] = useState([]);

  const loadModel = async () => {
    setIsModelLoading(true);
    try {
      const model = await mobilenet.load();
      setModel(model);
      setIsModelLoading(false);
    } catch (error) {
      console.log(error);
      setIsModelLoading(false);
    }
  }

  useEffect(() => {
    loadModel();
  }, []);

  if (isModelLoading) {
      return (
        <View>
          <Text>Loading results...</Text>
        </View>
      );
  }
//END OF NEW

  //FUNCTION TO PICK IMAGE
  const pickImageFromGallery = async () => {
      try {
        const options = {
          mediaType: 'photo', // Specify 'photo' or 'video' depending on your requirement
          quality: 1, // Set the image quality (0 to 1)
        };

        const response = await launchImageLibrary(options);

        if (response.didCancel) {
          console.log('Image picking cancelled');
        } else if (response.errorMessage) {
          console.log('Error picking image:', response.errorMessage);
        } else {
          setPickedImage(response.uri);
        }
      } catch (error) {
        console.log('Error picking image:', error);
      }
  };




  if (showResults) {
      return (
        <ResultsPage pickedImage={pickedImage} result={results} />
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

      <Button title="Select Image" onPress={pickImageFromGallery} />

      <Button title="Classify Image" onPress={classifyImage} />

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

