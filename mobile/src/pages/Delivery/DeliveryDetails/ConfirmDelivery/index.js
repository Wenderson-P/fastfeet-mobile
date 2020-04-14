import React, { useState, useRef, useEffect } from 'react';
import { RNCamera } from 'react-native-camera';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import {
  Container,
  Camera,
  PictureContainer,
  Picture,
  NewPictureButton,
  Text,
  SubmitButton,
  TakePicture,
} from './styles';

export default function ConfirmDelivery({ route, navigation }) {
  const auth = useSelector(state => state.auth);

  const { deliveryId } = route.params;
  const cameraRef = useRef(null);
  const [pictureUri, setPictureUri] = useState();

import { Container, Camera, SubmitButton } from './styles';

  async function handleTakePicture() {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      await setPictureUri(data.uri);
    }
  }

  return (
    <Container>
      <Camera>
        {pictureUri ? (
          <PictureContainer>
            <Picture source={{ uri: pictureUri }} style={{ height: '100%' }} />
            <NewPictureButton onPress={() => setPictureUri('')}>
              <Text>Tirar outra foto</Text>
            </NewPictureButton>
          </PictureContainer>
        ) : (
            <>
              <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.off}
                androidCameraPermissionOptions={{
                  title: 'Permissão para usar a câmera',
                  message: 'Precisamos da sua permissão para usar a câmera.',
                  buttonPositive: 'Ok',
                  buttonNegative: 'Cancelar',
                }}
                style={{ flex: 1 }}
                captureAudio={false}
              />
              <TakePicture onPress={handleTakePicture}>
                <Icon name="photo-camera" color="#fff" size={35} />
              </TakePicture>
            </>
          )}
      </Camera>
      <SubmitButton>Enviar</SubmitButton>
    </Container>
  );
}
