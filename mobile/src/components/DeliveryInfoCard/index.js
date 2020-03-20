import React from 'react';

import {
  Container,
  CardHeader,
  HeaderLabel,
  Recipient,
  Adress,
  Product,
} from './styles';

export default function DeliveryInfoCard() {
  return (
    <Container>
      <CardHeader>
        <HeaderLabel>Informações da entrega</HeaderLabel>
      </CardHeader>
      <Recipient>Ludwig van Beethoven</Recipient>
      <Adress>Rua Beethoven, 1729, Diadema - SP, 09960-580</Adress>
      <Product>Yamaha SX7</Product>
    </Container>
  );
}
