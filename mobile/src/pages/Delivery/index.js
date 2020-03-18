import React from 'react';

import {
  Container,
  Header,
  Avatar,
  Welcome,
  UserName,
  LogoutButton,
  DeliveryHeader,
  Text,
  Filters,
  FilterOption,
} from './styles';

import avatar from '~/assets/tempAvatar.png';

import DeliveryInfo from '~/components/DeliveryInfo';

export default function Delivery() {
  return (
    <Container>
      <Header>
        <Avatar source={avatar} />
        <Welcome>Bem vindo de volta,</Welcome>
        <UserName>Wenderson Pacheco</UserName>
        <LogoutButton />
      </Header>
      <DeliveryHeader>
        <Text>Entregas</Text>
        <Filters>
          <FilterOption>Pendentes</FilterOption>
          <FilterOption>Entregues</FilterOption>
        </Filters>
      </DeliveryHeader>
      <DeliveryInfo />
      <DeliveryInfo />
    </Container>
  );
}
