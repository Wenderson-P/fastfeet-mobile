import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import avatar from '~/assets/tempAvatar.png';

import DeliveryInfo from '~/components/DeliveryInfo';

import {
  Background,
  Container,
  Header,
  Avatar,
  Welcome,
  LogoutButton,
  DeliveryHeader,
  Text,
  Filters,
  FilterOption,
} from './styles';

export default function Delivery({ navigation }) {
  const [filter, setFilter] = useState('Pendentes');
  return (
    <Background>
      <Container>
        <Header>
          <Avatar source={avatar} />
          <Welcome>Bem vindo de volta,{'\n Wenderson Pacheco'}</Welcome>
          <LogoutButton />
            <Icon name="exit-to-app" size={24} color="#E74040" />
        </Header>
        <DeliveryHeader>
          <Text>Entregas</Text>
          <Filters>
            <FilterOption isActive={filter === 'Pendentes'}>
              Pendentes
            </FilterOption>
            <FilterOption isActive={filter === 'Entregues'}>
              Entregues
            </FilterOption>
          </Filters>
        </DeliveryHeader>
        <DeliveryInfo navigation={navigation} />
      </Container>
    </Background>
  );
}
