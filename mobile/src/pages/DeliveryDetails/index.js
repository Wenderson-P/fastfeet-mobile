import React from 'react';

import DeliveryInfoCard from '~/components/DeliveryInfoCard';
import DeliverySituationCard from '~/components/DeliverySituationCard';

import { Container } from './styles';

export default function DeliveryDetails() {
  return (
    <Container>
      <DeliveryInfoCard />
      <DeliverySituationCard />
    </Container>
  );
}
