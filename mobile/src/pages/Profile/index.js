import React from 'react';

import { Container, Form, FieldData, Logout, FieldLabel } from './styles';

export default function Profile() {
  return (
    <Container>
      <Form>
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
