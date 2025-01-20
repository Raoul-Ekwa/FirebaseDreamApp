import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigation/MyStack';
import messaging from '@react-native-firebase/messaging';

// Fonction pour demander la permission d'envoyer des notifications
async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

// Fonction pour obtenir le token d'abonnement FCM
const getToken = async () => {
  const token = await messaging().getToken();
  console.log('Token:', token);
};

const App = () => {
  useEffect(() => {
    // Appel des fonctions lors du montage du composant
    requestUserPermission();
    getToken();
  }, []); // Le tableau vide [] garantit que cet effet est exécuté uniquement au montage du composant

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;


