import React from 'react';
import { Image } from 'react-native';

import { Container, Form, FormInput, SubmitButton } from './styles';

import logo from '~/assets/logo.png';

export default function SignIn() {
  return (
    <Container>
      <Image source={logo} style={{ width: 244, height: 48 }} />
      <Form>
        <FormInput
          keyboardType="number-pad"
          placeholder="Informe seu ID de cadastro"
          returnKeyType="send"
        />
        <SubmitButton onPress={() => { }}>Entrar no sistema</SubmitButton>
      </Form>
    </Container>
  );
}
