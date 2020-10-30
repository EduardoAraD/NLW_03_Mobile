import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';

interface OrphanageRouteParams {
  position: {
    latitude: number;
    longitude: number;
  }
}

interface ImageData {
  size: string;
  uri: string;
}

export default function OrphanageData() {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as OrphanageRouteParams;

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [images, setImages] = useState<ImageData[]>([]);

  async function handleSelectImage() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      alert('Vish, precisamos de suas fotos...');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });

    if (result.cancelled) {
      return;
    }

    const { uri, height, width } = result

    const hwSize = height * width;

    const size = hwSize > 1000000 ? `${(hwSize / 1000000).toFixed(1)} Mbs` :
      hwSize > 1000 ? `${(hwSize / 1000).toFixed(1)} kbs` : `${hwSize} bs`;

    setImages([...images, { size, uri }]);
  }

  function handleImageDelete(index: number) {
    images.splice( index, 1)

    setImages([ ...images ]);
  }

  function handleNextStep() {
    const { position } = params
    navigation.navigate('OrphanageVisition', { position, name, about, images });
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.title}>Dados</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
      />

      <Text style={styles.label}>Sobre</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
        value={about}
        onChangeText={setAbout}
      />

      {/*
      <Text style={styles.label}>Whatsapp</Text>
      <TextInput
        style={styles.input}
  />*/}

      <Text style={styles.label}>Fotos</Text>
      <View style={styles.uploadedImageContainer}>
        {images.map((image, index) => {
          return (
            <LinearGradient colors={['#EDFFF6', '#FCF0F4']}
              start={{ x: 0.1, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.imageContainer} key={index}>
              <Image
                source={{ uri: image.uri }}
                style={styles.uploadedImage}
              />
              <View style={styles.imageInfo}>
                <Text style={styles.imageName}>{`Image_${index + 1}.${(image.uri).slice(-3)}`}</Text>
                <Text style={styles.imageSize}>{image.size}</Text>
              </View>
              <TouchableOpacity style={styles.imageDelete}
                onPress={ () => handleImageDelete(index)}>
                <Feather name='x' size={24} color='#FF669D' />
              </TouchableOpacity>
            </LinearGradient>
          )
        })}
      </View>
      <TouchableOpacity style={styles.imagesInput} onPress={handleSelectImage}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </TouchableOpacity>

      <RectButton style={styles.nextButton} onPress={handleNextStep}>
        <Text style={styles.nextButtonText}>Próximo</Text>
      </RectButton>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: '#5c8599',
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: '#D3E2E6'
  },

  label: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 8,
  },

  comment: {
    fontSize: 11,
    color: '#8fa7b3',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
  },

  uploadedImageContainer: {
    flexDirection: 'column',
  },

  uploadedImage: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginHorizontal: 8,
  },

  imagesInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: '#96D2F0',
    borderWidth: 1.4,
    borderRadius: 20,
    height: 56,

    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },

  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    height: 72,
    borderRadius: 20,
    marginBottom: 20,

    borderColor: '#A1E9C5',
    borderWidth: 1,
    borderStyle: 'solid'
  },

  imageInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  imageName: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 15,
    lineHeight: 25,

    color: '#37C77F',
  },

  imageSize: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 12,
    lineHeight: 20,

    color: '#8FA7B3',
  },

  imageDelete: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
})