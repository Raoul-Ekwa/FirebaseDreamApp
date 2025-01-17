import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
//import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {Colors} from '../../constant/Colors';
import MyButton from '../composants/MyButton';
import MyTextInput from '../composants/MyTextInput';
import SocialMedia from '../composants/SocialMedia';


const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.bgImage}>

        <View style={styles.inputContainer}>
          <MyTextInput placeholder="E-mail" />
          <MyTextInput placeholder="Mot de passe" secureTextEntry />
          <MyTextInput placeholder="Confirmrz le mot de passe" secureTextEntry />

          <MyButton title={'Sign Up'} />

          <View style={styles.OuText}>
            <Text style={{fontFamily: 'Audiowide-Regular'}}>Ou</Text>
            <Image source={require("../assets/image_vers_le_bas.png")} style={styles.flecheVersLebas}/>
          </View>

          <SocialMedia />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  bgImage: {
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 20
    
  },
  inputContainer: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 20,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
    gap: 10,
  },
  OuText: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  flecheVersLebas: {
    width: 30,
    height: 35,
    resizeMode: 'contain',
    marginTop: 5,
  }
});
