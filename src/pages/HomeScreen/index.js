import React from 'react';

import Button from '../../components/Button';
import {StatusBar, TouchableOpacity} from 'react-native';

import Styles from './styles';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Styles.Container>
        <Styles.Content>
          <Styles.ButtonContinue colors={['#24AF89', '#0EAB43', '#0EAB43']}>
            <TouchableOpacity
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('Dashboard')}>
              <Styles.ButtonContinueText>Delivery</Styles.ButtonContinueText>
            </TouchableOpacity>
          </Styles.ButtonContinue>
          <Button
            label="Withdrawal"
            styleTypes="withdrawal"
            onPress={() => navigation.navigate('Dashboard')}
          />
        </Styles.Content>
      </Styles.Container>
    </>
  );
};

export default HomeScreen;
