import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, parseISO } from 'date-fns';
import DeliverySteps from '~/components/DeliverySteps';
import {
  FlatList,
  Item,
  Header,
  DeliveryId,
  Name,
  Footer,
  Field,
  FieldLabel,
  FieldData,
  DetailsButton,
  DetailsText,
} from './styles';
import api from '~/services/api';

export default function DeliveryInfo({ navigation, userId }) {
  const [deliveries, setDeliveries] = useState([]);
  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get(`/deliveryman/${userId}/deliveries`);

      response.data.map(delivery => {
        let activeStep = 1;
        if (delivery.start_date) {
          const startDate = format(parseISO(delivery.start_date), 'dd/MM/yyyy');
          delivery.startDate = startDate;
          activeStep = 2;
        }
        if (delivery.end_date) {
          activeStep = 3;
        }
        delivery.activeStep = activeStep;
      });
      setDeliveries(response.data);
    }
    loadDeliveries();
  }, []);
  return (
    <FlatList
      data={deliveries}
      renderItem={({ item }) => (
        <Item>
          <Header>
            <DeliveryId>
              <Icon name="local-shipping" size={24} color="#7D40E7" />
              <Name>Encomenda {item.id}</Name>
            </DeliveryId>
          </Header>
          <DeliverySteps activeStep={item.activeStep} />
          <Footer>
            <Field>
              <FieldLabel>Data</FieldLabel>
              <FieldData>
                {item.startDate ? item.startDate : '--/--/----'}
              </FieldData>
            </Field>
            <Field>
              <FieldLabel>Cidade</FieldLabel>
              <FieldData>{item.recipient.city}</FieldData>
            </Field>
            <DetailsButton
              onPress={() =>
                navigation.navigate('DeliveryDetails', { delivery: item })
              }
            >
              <DetailsText>Ver detalhes</DetailsText>
            </DetailsButton>
          </Footer>
        </Item>
      )}
    />
  );
}

DeliveryInfo.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
