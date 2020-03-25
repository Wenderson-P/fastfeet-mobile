import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  margin: 0px 30px;
  justify-content: space-between;
`;

export const TextField = styled.TextInput`
  height: 80%;
`;
export const SubmitButton = styled(Button)`
  background-color: red;
  margin-top: 20px;
`;
