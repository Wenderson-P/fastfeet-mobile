import React from 'react';

import { Container, TextField, SubmitButton } from './styles';

export default function ReportDelivery() {
  return (
    <Container>
      <TextField placeholder="Inclua aqui o problema que ocorreu na entrega." />
      <SubmitButton>Enviar</SubmitButton>
    </Container>
  );
}
