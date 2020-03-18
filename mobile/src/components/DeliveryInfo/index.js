import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  DeliveryId,
  Name,
  Status,
  Footer,
  Field,
  FieldLabel,
  FieldData,
  DetailsButton,
  DetailsText,
} from './styles';

export default function DeliveryInfo({ navigation }) {
  return (
    <Container>
      <Header>
        <DeliveryId>
          <Icon name="local-shipping" size={24} color="#7D40E7" />
          <Name>Encomenda 01</Name>
        </DeliveryId>

        <Status>aguardando</Status>
      </Header>
      <Footer>
        <Field>
          <FieldLabel>Data</FieldLabel>
          <FieldData>14/01/2020</FieldData>
        </Field>
        <Field>
          <FieldLabel>Cidade</FieldLabel>
          <FieldData>Teresina</FieldData>
        </Field>
        <DetailsButton
        // onPress={() => navigation.navigate('DeliveryDetails')}
        >
          <DetailsText>Ver detalhes</DetailsText>
        </DetailsButton>
      </Footer>
    </Container>
  );
}

DeliveryInfo.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
