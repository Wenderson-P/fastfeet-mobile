import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  margin: 0px 30px;
`;

export const ProblemsList = styled.View`
  background-color: #ffffff;
  border-radius: 4px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0px;
  padding: 17px 16px;
  elevation: 1;
`;

export const Problem = styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: #999999;
`;

export const Date = styled.Text`
  font-size: 12px;
  color: #999999;
  padding-top: 2px;
`;
