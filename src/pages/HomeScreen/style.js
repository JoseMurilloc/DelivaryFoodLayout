import styled from 'styled-components/native';
import CheckBox from '@react-native-community/checkbox';
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
  width: 245.71px;
  height: 32px;

  background: #f3f3f3;
  border: 1.14286px solid #dcdada;
  border-radius: 34.2857px;
`;

const CheckBoxStyle = styled(CheckBox)`
  width: 100%;
  height: 100%;

  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  opacity: 0;
  z-index: 10;
`;

const Social = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 162px;
`;

const ContainerLogin = styled.View`
  position: absolute;
  border-radius: 50px;
  height: 100%;
  width: 55%;
  background-color: #099e76;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ContainerLoginText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #f3f3f3;
`;

const ContainerRegister = styled.View`
  position: absolute;
  right: 0;
  border-radius: 50px;
  height: 100%;
  width: 45%;
  background-color: #f3f3f3;
  justify-content: center;
  align-items: center;
`;

const ContainerRegisterText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #343a36;
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
  CheckBoxStyle,
  Social,
  ContainerLogin,
  ContainerLoginText,
  ContainerRegister,
  ContainerRegisterText,
  ForgotPasswordContainer,
  ContainerInput,
  Or,
};

export default Styles;
