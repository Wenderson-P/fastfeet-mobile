import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  margin: 0px 30px;
`;

export const Camera = styled.View`
  height: 80%;
`;


export const TakePicture = styled.TouchableHighlight`
  margin-top: 20px;
  padding: 20px;

  background-color: #0000004d;
  padding: 10px;
  align-self: center;
  border-radius: 50px;
  position: absolute;
  top: 80%;
`;
export const SubmitButton = styled(Button)`
  background-color: red;
  margin-top: 20px;
`;
