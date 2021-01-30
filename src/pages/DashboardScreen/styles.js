import styled, {css} from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 60px;
  background-color: #f5f5f5;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 25px;
  width: 100%;
`;
const ContainerSearch = styled.View`
  margin-top: 20px;
  padding: 0 25px;
  justify-content: center;
  align-items: flex-start;
`;
const TitleHeader = styled.Text`
  font-family: 'Roboto-Black';
  font-size: 24px;
  line-height: 28px;
  width: 239px;
  color: #000000;
`;
const InputSearch = styled.TextInput`
  flex: 1;
`;

const InputSearchContainer = styled.View`
  background: #f3f3f3;
  border: 1px solid #c4c4c4;
  border-radius: 30px;
  width: 317px;
  height: 44px;
  margin-top: 10px;
  padding: 0px 20px;

  flex-direction: row;
  align-items: center;
`;

const Categories = styled.View`
  width: 100%;
  height: 150px;

  padding-left: 30px;
  margin-top: 35px;
`;
const CategoryTitle = styled.Text`
  font-family: 'Roboto-Black';
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;

  color: #000000;
`;
const Category = styled.View`
  background: #f3f3f3;
  width: 110px;
  height: 70px;
  box-shadow: 0px 5px 8px rgba(174, 182, 222, 0.4);
  border-radius: 25px;

  justify-content: center;
  align-items: center;
  margin-right: 20px;

  ${(props) =>
    props.select &&
    css`
      border: 2px solid #24af89;
    `}
`;
const CategoryName = styled.Text`
  font-size: 12px;
  line-height: 14px;
  font-family: 'Roboto-Regular';

  color: #343a36;

  ${(props) =>
    props.select &&
    css`
      color: #24af89;
    `}
`;

const Promotions = styled.View`
  width: 100%;

  padding-left: 30px;
`;
const TitlePromotion = styled.Text`
  font-family: 'Roboto-Black';
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 35px;
`;

const Promo = styled(LinearGradient)`
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 30px;
  width: 172px;
  height: 210px;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
`;

const ContainerPromotions = styled.View``;

const PromoTitle = styled.Text`
  font-size: 14px;
  line-height: 16px;

  color: #f3f3f3;
  font-family: 'Roboto-Medium';
`;

const Price = styled.Text`
  font-size: 20px;
  line-height: 23px;
  margin-top: 24px;

  color: #f3f3f3;
  font-family: 'Roboto-Medium';
`;

const ContentPromo = styled.View`
  width: 100%;
`;

const Styles = {
  Container,
  Header,
  ContainerSearch,
  TitleHeader,
  InputSearch,
  InputSearchContainer,
  Categories,
  CategoryTitle,
  Category,
  CategoryName,
  Promotions,
  TitlePromotion,
  Promo,
  ContainerPromotions,
  PromoTitle,
  Price,
  ContentPromo,
};

export default Styles;
