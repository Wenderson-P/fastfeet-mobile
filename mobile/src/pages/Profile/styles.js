import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  align-self: stretch;
  margin: 0 30px;
`;

export const Avatar = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 100px;
  align-self: center;
`;

export const FieldLabel = styled.Text`
  font-size: 12px;
  text-align: left;
  margin-top: 15px;
  font-weight: 300;
`;

export const FieldData = styled.Text`
  font-size: 22px;
  text-align: left;
  font-weight: bold;
`;

export const Logout = styled(Button)`
  margin-top: 30px;
  background-color: #e74040;
  text-align: center;
`;
