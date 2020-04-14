import React from 'react';
import { Alert } from 'react-native';
import DeliveryInfoCard from '~/components/DeliveryInfoCard';
import DeliverySituationCard from '~/components/DeliverySituationCard';
import DeliveryActionButton from '~/components/DeliveryActionButton';

import { Container, Buttons, Line } from './styles';

export default function DeliveryDetails({ navigation, route }) {
  const { delivery } = route.params;

  function handleConfirmDelivery() {
    if (delivery.start_date === null) {
      Alert.alert('A entrega precisa ser retirada primeiro');
    } else {
      navigation.navigate('ConfirmDelivery', { deliveryId: delivery.id });
    }
  }

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
          onPress={() =>
            navigation.navigate('ReportDelivery', { deliveryId: delivery.id })
          }
        />
        <Line />
        <DeliveryActionButton
          iconName="info-outline"
          iconColor="#E7BA40"
          iconSize={24}
          title="Visualizar Problemas"
          onPress={() =>
            navigation.navigate('DeliveryProblems', { deliveryId: delivery.id })
          }
        />
        <Line />
        <DeliveryActionButton
          iconName="check-circle"
          iconColor="#7D40E7"
          iconSize={24}
          title="Confirmar Entrega"
          onPress={() => handleConfirmDelivery()}
        />
      </Buttons>
    </Container>
  );
}
