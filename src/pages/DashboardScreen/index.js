import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/Fontisto';
import {Image, Text, ScrollView} from 'react-native';

import pizzaNotSelect from '../../assets/pizza-icon.png';
import pizzaSelect from '../../assets/pizza-icon-select.png';

import Styles from './styles';

const DashboardScreen = () => {
  const [selectCategory, setSelectCategory] = useState(true);

  return (
    <Styles.Container>
      <Styles.Header>
        <Icon name="nav-icon" size={20} color="#000" />
        <Image source={require('../../assets/profile.png')} />
      </Styles.Header>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          height: 500,
        }}>
        <Styles.ContainerSearch>
          <Styles.TitleHeader>
            Choose the food you
            <Text
              style={{
                color: '#0EAB43',
                fontFamily: 'Roboto-Black',
              }}>
              {' '}
              love here
            </Text>
          </Styles.TitleHeader>

          <Styles.InputSearchContainer>
            <Styles.InputSearch placeholder="Search a food" />
            <Icon name="search" size={25} color="#343A36" />
          </Styles.InputSearchContainer>
        </Styles.ContainerSearch>

        <Styles.Categories>
          <Styles.CategoryTitle>Categories</Styles.CategoryTitle>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Styles.Category select={true} style={{elevation: 10}}>
              <Image source={selectCategory ? pizzaSelect : pizzaNotSelect} />
              <Styles.CategoryName select={true}>Pizzas</Styles.CategoryName>
            </Styles.Category>

            <Styles.Category style={{elevation: 10}}>
              <Image source={require('../../assets/Pastry.png')} />
              <Styles.CategoryName>Pastry</Styles.CategoryName>
            </Styles.Category>

            <Styles.Category style={{elevation: 10}}>
              <Image source={require('../../assets/Shake.png')} />
              <Styles.CategoryName>Shake</Styles.CategoryName>
            </Styles.Category>
          </ScrollView>
        </Styles.Categories>

        <Styles.Promotions>
          <Styles.TitlePromotion>Promotion</Styles.TitlePromotion>

          <Styles.ContainerPromotions>
            <ScrollView
              style={{height: 220}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <Styles.Promo colors={['#24AF89', '#0EAB43', '#0EAB43']}>
                <Image source={require('../../assets/pizza.png')} />
                <Styles.ContentPromo>
                  <Styles.PromoTitle>Neapolitan</Styles.PromoTitle>
                  <Styles.Price>$ 25.00</Styles.Price>
                </Styles.ContentPromo>
              </Styles.Promo>

              <Styles.Promo colors={['#24AF89', '#0EAB43', '#0EAB43']}>
                <Image source={require('../../assets/pizza.png')} />
                <Styles.ContentPromo>
                  <Styles.PromoTitle>Neapolitan</Styles.PromoTitle>
                  <Styles.Price>$ 25.00</Styles.Price>
                </Styles.ContentPromo>
              </Styles.Promo>

              <Styles.Promo colors={['#24AF89', '#0EAB43', '#0EAB43']}>
                <Image source={require('../../assets/pizza.png')} />
                <Styles.ContentPromo>
                  <Styles.PromoTitle>Neapolitan</Styles.PromoTitle>
                  <Styles.Price>$ 25.00</Styles.Price>
                </Styles.ContentPromo>
              </Styles.Promo>
            </ScrollView>
          </Styles.ContainerPromotions>
        </Styles.Promotions>

        <Styles.Promotions style={{marginTop: 15}}>
          <Styles.TitlePromotion>More sold</Styles.TitlePromotion>

          <Styles.ContainerPromotions>
            <ScrollView
              style={{height: 220}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <Styles.Promo colors={['#24AF89', '#24AF89', '#24AF89']}>
                <Image source={require('../../assets/pizza.png')} />
                <Styles.ContentPromo>
                  <Styles.PromoTitle>Neapolitan</Styles.PromoTitle>
                  <Styles.Price>$ 25.00</Styles.Price>
                </Styles.ContentPromo>
              </Styles.Promo>

              <Styles.Promo colors={['#24AF89', '#24AF89', '#24AF89']}>
                <Image source={require('../../assets/pizza.png')} />
                <Styles.ContentPromo>
                  <Styles.PromoTitle>Neapolitan</Styles.PromoTitle>
                  <Styles.Price>$ 25.00</Styles.Price>
                </Styles.ContentPromo>
              </Styles.Promo>
            </ScrollView>
          </Styles.ContainerPromotions>
        </Styles.Promotions>
      </ScrollView>
    </Styles.Container>
  );
};

export default DashboardScreen;
