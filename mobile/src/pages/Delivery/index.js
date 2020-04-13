import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import avatar from '~/assets/tempAvatar.png';

import DeliveryInfo from '~/components/DeliveryInfo';

import { signOut } from '~/store/modules/auth/actions';

import {
  Background,
  Container,
  Header,
  Avatar,
  Welcome,
  Name,
  LogoutButton,
  DeliveryHeader,
  Text,
  Filters,
  FilterOption,
  FilterText,
} from './styles';

export default function Delivery({ navigation }) {
  const [filter, setFilter] = useState('Pendentes');
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  return (
    <Background>
      <Container>
        <Header>
          <Avatar
            source={{
              uri: user.avatar
                ? user.avatar.url
                : `https://ui-avatars.com/api/?name=${user.name}&background=0D8ABC&color=fff`,
            }}
          />
          <Welcome>
            Bem vindo de volta,{'\n'}
            <Name>{user.name}</Name>
          </Welcome>
          <LogoutButton>
            <Icon name="exit-to-app" size={24} color="#E74040" />
          </LogoutButton>
        </Header>
        <DeliveryHeader>
          <Text>Entregas</Text>
          <Filters>
            <FilterOption onPress={() => setFilter('Pendentes')}>
              <FilterText isActive={filter === 'Pendentes'}>
                Pendentes
              </FilterText>
            </FilterOption>
            <FilterOption onPress={() => setFilter('Entregues')}>
              <FilterText isActive={filter === 'Entregues'}>
                Entregues
              </FilterText>
            </FilterOption>
          </Filters>
        </DeliveryHeader>
        <DeliveryInfo navigation={navigation} userId={user.id} />
      </Container>
    </Background>
  );
}
