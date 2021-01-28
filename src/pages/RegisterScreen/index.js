import React, {useEffect} from 'react';
import {Image, StyleSheet} from 'react-native';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Styles from './styles';

const LoginScreen = ({navigation}) => {
  const formPosition = useSharedValue(30);
  const formOpacity = useSharedValue(0);

  useEffect(() => {
    formPosition.value = withTiming(0, {duration: 1000});
    formOpacity.value = withTiming(1, {duration: 1000});
  }, [formPosition, formOpacity]);

  const formStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: formPosition.value}],
      opacity: formOpacity.value,
    };
  }, []);

  return (
    <Styles.Container>
      <Image
        style={styles.imageStyles}
        source={require('../../assets/background-pizza.png')}
      />
      <Styles.Form style={[styles.elevationForm, formStyle]}>
        <Styles.Wrapper>
          <Styles.ButtonLogin onPress={() => navigation.goBack()}>
            <Styles.ButtonLoginText>Login</Styles.ButtonLoginText>
          </Styles.ButtonLogin>

          <Styles.ButtonRegister>
            <Styles.ButtonRegisterText>Register</Styles.ButtonRegisterText>
          </Styles.ButtonRegister>
        </Styles.Wrapper>

        <Styles.ContainerInput>
          <Input secureTextEntry={false} placeholder="E-mail" />
          <Input secureTextEntry={true} placeholder="Password" />
          <Input secureTextEntry={true} placeholder="Password again here..." />
          <Input secureTextEntry={false} placeholder="Phone" />
        </Styles.ContainerInput>

        <Button label="Register" />

        <Styles.Or>Or</Styles.Or>

        <Styles.Social>
          <Image source={require('../../assets/fb.png')} />
          <Image source={require('../../assets/gmail.png')} />
          <Image source={require('../../assets/twitter.png')} />
        </Styles.Social>
      </Styles.Form>
    </Styles.Container>
  );
};

const styles = StyleSheet.create({
  imageStyles: {
    width: '100%',
  },
  elevationForm: {
    elevation: 20,
  },
});

export default LoginScreen;
