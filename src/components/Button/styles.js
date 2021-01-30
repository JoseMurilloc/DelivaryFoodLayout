import styled, {css} from 'styled-components/native';

const Container = styled.TouchableOpacity`
  width: 245px;
  height: 44px;

  background: #24af89;
  border-radius: 30px;

  justify-content: center;
  align-items: center;

  ${(props) =>
    props.styleTypes === 'withdrawal' &&
    css`
      background: #f3f3f3;
      border: 1px solid #c4c4c4;
    `}
`;
const ContainerText = styled.Text`
  font-size: 14px;
  line-height: 16px;

  color: #f3f3f3;
  font-family: 'Roboto-Black';
  ${(props) =>
    props.styleTypes === 'withdrawal' &&
    css`
      color: #343a36;
    `}
`;

const Styles = {
  Container,
  ContainerText,
};

export default Styles;
