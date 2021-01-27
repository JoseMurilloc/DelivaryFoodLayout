import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  width: 245px;
  height: 44px;

  background: #24af89;
  border-radius: 30px;

  justify-content: center;
  align-items: center;
`;
const ContainerText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;

  color: #f3f3f3;
`;

const Styles = {
  Container,
  ContainerText,
};

export default Styles;
