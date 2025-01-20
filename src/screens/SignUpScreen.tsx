import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../constant/Colors';
import MyButton from '../composants/MyButton';
import MyTextInput from '../composants/MyTextInput';
import SocialMedia from '../composants/SocialMedia';
import auth from '@react-native-firebase/auth';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUpTestFn = () => {
    if (password !== confirmPassword) {
      Alert.alert("Les mots de passe ne correspondent pas");
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Utilisateur créé");
        Alert.alert("Compte créé avec succès !");
        navigation.navigate('Login');
      })
      .catch((err) => {
        console.log(err.message);
        Alert.alert(err.message);
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.bgImage}>
        <View style={styles.inputContainer}>
          <MyTextInput
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="E-mail"
          />
          <MyTextInput
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Mot de passe"
            secureTextEntry
          />
          <MyTextInput
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            placeholder="Confirmer le mot de passe"
            secureTextEntry
          />

          <MyButton onPress={signUpTestFn} title={'Sign Up'} />

          <View style={styles.OuText}>
            <Text style={{ fontFamily: 'Audiowide-Regular' }}>Ou</Text>
            <Image
              source={require("../assets/image_vers_le_bas.png")}
              style={styles.flecheVersLebas}
            />
          </View>

          <SocialMedia />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 20,
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
  },
});
