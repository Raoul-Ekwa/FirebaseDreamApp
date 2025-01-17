import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    TouchableOpacity,
    Alert,
  } from 'react-native';
  //import AntDesign from 'react-native-vector-icons/AntDesign';
  import React from 'react';
  import {Colors} from '../../constant/Colors';
  import MyButton from '../composants/MyButton';
  import MyTextInput from '../composants/MyTextInput';
  import SocialMedia from '../composants/SocialMedia';
  

  const CreerCompte = () => {
    Alert.alert('Creer un Compte')
  }
  const LoginScreen = () => {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/background.png')}
          style={styles.bgImage}>
          <Image
            source={require('../assets/food/food.png')}
            style={styles.imageHeader}
          />
          <Text style={styles.title}>Fatmore</Text>
  
          <View style={styles.inputContainer}>
            <MyTextInput placeholder="E-mail" />
            <MyTextInput placeholder="Mot de passe" secureTextEntry />

            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 3, marginLeft: 90, marginTop: 10}}>
                <Text style={{ fontSize:12}}>Vous avez deja un compte?</Text>
                <TouchableOpacity onPress={() => CreerCompte()}>
                        <Text style={{color: 'blue', fontSize:12}}>Creez-en un !</Text>
                </TouchableOpacity>
            </View>
  
            <MyButton title={'Login'} />
  
            <View style={styles.OuText}>
              <Text style={{fontFamily: 'Audiowide-Regular'}}>Ou</Text>
              {/* <Image source={require("../assets/image_vers_le_bas.png")}/> */}
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
      paddingHorizontal: 20,
      
    },
    imageHeader: {
      width: 100,
      height: 100,
      position: 'absolute',
      top: Platform.OS == 'android' ? 20 : 50,
      right: 20,
      resizeMode: 'contain',
    },
    titleWrappe: {
      flex: 1,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 40,
      color: Colors.white,
      marginTop: Platform.OS == 'android' ? 100 : 110,
      fontFamily: 'Audiowide-Regular',
    },
    inputContainer: {
      width: '100%',
      backgroundColor: Colors.white,
      borderRadius: 20,
      height: 450,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      paddingHorizontal: 20,
      gap: 10
    },
    pasdeCompte: {
      marginTop: 20,
      alignSelf: 'flex-end',
      marginRight: 10,
      fontSize: 12,
      color: 'black',
    },
    OuText: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 20,
    },
  });
  