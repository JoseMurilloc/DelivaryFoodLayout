import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const Container = styled.View`
  flex: 1;
  background-color: #f3f3f3;
`;

const Content = styled.View`
  margin-top: 20px;
  height: 170px;
  align-items: center;
`;

const ButtonContinue = styled(LinearGradient)`
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 30px;
  width: 245px;
  height: 44px;
  margin-bottom: 10px;

  justify-content: center;
  align-items: center;
`;
const ButtonContinueText = styled.Text`
  font-family: 'Roboto-Black';
  font-size: 14px;

  color: #f3f3f3;
`;

const Styles = {
  Container,
  Content,
  ButtonContinue,
  ButtonContinueText,
};

export default Styles;
