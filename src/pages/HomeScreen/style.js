import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #fff;
`;

const Form = styled(Animated.View)`
  padding: 30px;
  width: 350px;
  background: #f3f3f3;
  border-radius: 30px;
  padding-bottom: 60px;

  justify-content: flex-start;
  align-items: center;

  position: absolute;
  left: 25px;
  top: 125px;
`;

const Wrapper = styled.View`
  flex-direction: row;
`;

const ButtonLogin = styled.TouchableOpacity`
  width: 121.6px;
  height: 29.1px;
  background: #099e76;
  border-radius: 31px;
  justify-content: center;
  align-items: center;
`;

const ButtonLoginText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #f3f3f3;
`;

const ButtonRegister = styled.TouchableOpacity`
  background: #f3f3f3;
  border: 1px solid #dcdada;
  border-radius: 31px;
  width: 121.6px;
  height: 29.1px;

  margin-left: 5px;

  justify-content: center;
  align-items: center;
`;

const ButtonRegisterText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #343a36;
`;

const Social = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 162px;
`;

const ForgotPasswordContainer = styled.View`
  margin-bottom: 24px;
  align-items: flex-end;
  width: 245px;
  margin-top: 5px;
`;

const ContainerInput = styled.View`
  margin-top: 36px;
  height: 95px;
  justify-content: space-between;
`;

const Or = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: #5d6660;
  margin-top: 20px;
  margin-bottom: 35px;
`;

const Styles = {
  Container,
  Form,
  Wrapper,
  Social,
  ButtonLogin,
  ButtonLoginText,
  ButtonRegister,
  ButtonRegisterText,
  ForgotPasswordContainer,
  ContainerInput,
  Or,
};

export default Styles;
