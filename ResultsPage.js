import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function ResultsPage({ pickedImage, result }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your celebrity is</Text>

      <Image source={{ uri: pickedImage }} style={styles.image} />

      <Text style={styles.resultText}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  resultText: {
    fontSize: 18,
  },
});