import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        <Icon name="local-shipping" size={24} color="#7D40E7" />
        <HeaderLabel>Informações da entrega</HeaderLabel>
      </CardHeader>
      <Recipient>Ludwig van Beethoven</Recipient>
      <Adress>Rua Beethoven, 1729, Diadema - SP, 09960-580</Adress>
      <Product>Yamaha SX7</Product>
    </Container>
  );
}
