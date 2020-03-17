import React from 'react';

import {
  Container,
  Form,
  FieldData,
  Avatar,
  Logout,
  FieldLabel,
} from './styles';

import avatar from '~/assets/tempAvatar.png';

export default function Profile() {
  return (
    <Container>
      <Form>
        <Avatar source={avatar} />
        <FieldLabel>Nome completo</FieldLabel>
        <FieldData>Gaspar Antunes</FieldData>
        <FieldLabel>Email</FieldLabel>
        <FieldData>example@rocketseat.com.br</FieldData>
        <FieldLabel>Data de cadatro</FieldLabel>
        <FieldData>10/01/2020</FieldData>
        <Logout>Logout</Logout>
      </Form>
    </Container>
  );
}
