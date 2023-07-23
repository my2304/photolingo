
import { supabase } from "../../lib/supabase";
import { Text, Button} from 'react-native-paper';
import { View} from 'react-native';
import { useState, useEffect } from "react";
import { Image } from "expo-image";
// import { useSupabase } from "@supabase/supabase-js";
import { ImagePicker } from "expo-image-picker";

const Gallery = () => {

  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const getImages = async () => {
      const { data } = await supabase.from("images").select("*");
      setImages(data);
    };
    getImages();
  }, []);

  const onSelectImage = async () => {
    const { data } = await ImagePicker.launchImagePicker({
      mediaTypes: ["image"],
    });

    if (data.uri) {
      const { id } = await supabase.from("images").insert({
        url: data.uri,
      });
      setSelectedImage(id);
    }
  };

  return (
    <View>
      <Text>Gallery</Text>
      {images.map((image) => (
        <View key={image.id}>
          <Image
            source={{ uri: image.url }}
            style={{ width: 100, height: 100 }}
          />
          <Text>{image.word}</Text>
        </View>
      ))}
      <Button onPress={onSelectImage} title="Select Image" />
      {selectedImage && (
        <Image
          source={{ uri: supabase.from("images").select("url").eq("id", selectedImage).first().url }}
          style={{ width: 200, height: 200 }}
        />
      )}
    </View>
  );
};

export default Gallery;