import React from 'react';

import DeliveryInfoCard from '~/components/DeliveryInfoCard';
import DeliverySituationCard from '~/components/DeliverySituationCard';
import DeliveryActionButton from '~/components/DeliveryActionButton';

import { Container, Buttons, Line } from './styles';

export default function DeliveryDetails({ navigation, route }) {
  const { delivery } = route.params;
  return (
    <Container>
      <DeliveryInfoCard delivery={delivery} />
      <DeliverySituationCard delivery={delivery} />
      <Buttons>
        <DeliveryActionButton
          iconName="highlight-off"
          iconColor="#E74040"
          iconSize={24}
          title="Informar Problema"
          onPress={() => navigation.navigate('ReportDelivery')}
        />
        <Line />
        <DeliveryActionButton
          iconName="info-outline"
          iconColor="#E7BA40"
          iconSize={24}
          title="Visualizar Problemas"
          onPress={() => navigation.navigate('DeliveryProblems')}
        />
        <Line />
        <DeliveryActionButton
          iconName="check-circle"
          iconColor="#7D40E7"
          iconSize={24}
          title="Confirmar Entrega"
          onPress={() => navigation.navigate('ConfirmDelivery')}
        />
      </Buttons>
    </Container>
  );
}
