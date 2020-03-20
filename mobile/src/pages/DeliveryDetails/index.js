import React from 'react';

import DeliveryInfoCard from '~/components/DeliveryInfoCard';
import DeliverySituationCard from '~/components/DeliverySituationCard';
import DeliveryActionButton from '~/components/DeliveryActionButton';

import { Container, Buttons, Line } from './styles';

export default function DeliveryDetails() {
  return (
    <Container>
      <DeliveryInfoCard />
      <DeliverySituationCard />
      <Buttons>
        <DeliveryActionButton
          iconName="highlight-off"
          iconColor="#E74040"
          iconSize={24}
          title="Informar Problema"
        />
        <Line />
        <DeliveryActionButton
          iconName="info-outline"
          iconColor="#E7BA40"
          iconSize={24}
          title="Visualizar Problemas"
        />
        <Line />
        <DeliveryActionButton
          iconName="check-circle"
          iconColor="#7D40E7"
          iconSize={24}
          title="Confirmar Entrega"
        />
      </Buttons>
    </Container>
  );
}
