import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  CardHeader,
  HeaderLabel,
  Row,
  RowLabel,
  RowData,
} from './styles';

export default function DeliveryInfoCard() {
  return (
    <Container>
      <CardHeader>
        <Icon name="local-shipping" size={24} color="#7D40E7" />
        <HeaderLabel>Informações da entrega</HeaderLabel>
      </CardHeader>
      <Row>
        <RowLabel>Destinatário</RowLabel>
        <RowData>Ludwig van Beethoven</RowData>
      </Row>
      <Row>
        <RowLabel>Endereço de entrega</RowLabel>
        <RowData>Rua Beethoven, 1729, Diadema - SP, 09960-580</RowData>
      </Row>
      <Row>
        <RowLabel>Produto</RowLabel>
        <RowData>Yamaha SX7</RowData>
      </Row>
    </Container>
  );
}
