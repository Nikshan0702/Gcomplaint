import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Alert, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

const ImagePickerComponent = ({ onImagePicked }) => {
  const [imageUri, setImageUri] = useState(null);

  const requestPermission = async (permissionFn, permissionName) => {
    const { status } = await permissionFn();
    if (status !== 'granted') {
      Alert.alert(
        'Permission required',
        `We need access to your ${permissionName} to upload images`
      );
      return false;
    }
    return true;
  };

  const pickImageFromLibrary = async () => {
    const hasPermission = await requestPermission(
      ImagePicker.requestMediaLibraryPermissionsAsync,
      'photo library'
    );
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaType.Images, 
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled && result.assets) {
      const uri = result.assets[0].uri;
      setImageUri(uri);
      onImagePicked?.(uri);
    }
  };

  const takePhotoWithCamera = async () => {
    const hasPermission = await requestPermission(
      ImagePicker.requestCameraPermissionsAsync,
      'camera'
    );
    if (!hasPermission) return;

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled && result.assets) {
      const uri = result.assets[0].uri;
      setImageUri(uri);
      onImagePicked?.(uri);
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.buttonRow}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={pickImageFromLibrary}
        >
          <Ionicons name="image" size={20} color="#f59e0b" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={takePhotoWithCamera}
        >
          <Ionicons name="camera" size={20} color="#f59e0b" />
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 12,
    fontWeight: '500',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginHorizontal: 5,
    width:0.5,
  },
  buttonText: {
    marginLeft: 8,
    color: '#1f2937',
    fontWeight: '500',
    fontSize:0.5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    backgroundColor: '#f9fafb',
  },
  placeholder: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    marginTop: 10,
    color: '#9ca3af',
    fontSize: 14,
  },
});

export default ImagePickerComponent;