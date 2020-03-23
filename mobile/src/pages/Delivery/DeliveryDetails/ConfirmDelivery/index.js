import React, { useState } from 'react';
import { RNCamera } from 'react-native-camera';

import { Container, Camera } from './styles';
import Button from '~/components/Button';

export default function ConfirmDelivery() {
  const [camera, setCamera] = useState();

  return (
    <Container>
      <Camera>
        <RNCamera
          ref={ref => setCamera(ref)}
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
      </Camera>
      <Button tittle="Enviar" />
    </Container>
  );
}
