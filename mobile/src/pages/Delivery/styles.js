import styled from 'styled-components/native';

export const Background = styled.SafeAreaView`
  background-color: #ffffff;
  flex: 1;
`;

export const Container = styled.ScrollView`
  margin: 30px;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Welcome = styled.Text``;

export const UserName = styled.Text``;

export const LogoutButton = styled.Text``;

export const DeliveryHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 22px;
`;

export const Filters = styled.View`
  flex-direction: row;
  align-items: center;
  font-weight: bold;
`;

export const FilterOption = styled.Text`
  margin: 0px 10px;
  color: #7d40e7;
  font-weight: bold;
  text-decoration: ${props => (props.isActive ? ' underline' : 'none')};
`;
