# Firebase Dream App: React Native Mobile Application

Firebase Dream App is a React Native mobile application that integrates Firebase authentication for user management. It provides a seamless login and signup experience with email/password authentication and social media login options.

The app showcases a modern UI design with custom components and utilizes Firebase's real-time database capabilities. It's built with TypeScript for improved type safety and developer experience.

## Repository Structure

The repository is organized as follows:

- `android/`: Contains Android-specific configuration and build files
- `ios/`: Contains iOS-specific configuration and build files
- `src/`: Main source code directory
  - `composants/`: Reusable UI components
  - `navigation/`: Navigation configuration
  - `screens/`: Individual screen components
- `__tests__/`: Test files
- `App.tsx`: Main application component
- `index.js`: Entry point of the application

Key Files:
- `android/app/build.gradle`: Android build configuration
- `src/screens/LoginScreen.tsx`: Login screen implementation
- `src/screens/SignUpScreen.tsx`: Sign-up screen implementation
- `App.tsx`: Main application setup and Firebase initialization

## Usage Instructions

### Installation

Prerequisites:
- Node.js (v18 or higher)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

Steps:
1. Clone the repository
2. Run `npm install` to install dependencies
3. Set up Firebase:
   - Create a Firebase project
   - Add Android and iOS apps to your Firebase project
   - Download and place the `google-services.json` file in `android/app/`
   - Download and place the `GoogleService-Info.plist` file in the iOS project
4. Run `npx react-native run-android` for Android or `npx react-native run-ios` for iOS

### Configuration

The app uses Firebase for authentication. Ensure you have set up your Firebase project and added the necessary configuration files as mentioned in the installation steps.

### Common Use Cases

1. User Login:
```javascript
auth().signInWithEmailAndPassword(email, password)
  .then((res) => {
    console.log(res);
    Alert.alert("Connexion réussie!");
    navigation.navigate('Home');
  })
  .catch((err) => {
    console.log(err);
    Alert.alert(err.message);
  });
```

2. User Sign Up:
```javascript
auth().createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log("Utilisateur créé");
    Alert.alert("Compte créé avec succès !");
    navigation.navigate('Login');
  })
  .catch((err) => {
    console.log(err.message);
    Alert.alert(err.message);
  });
```

### Testing & Quality

To run tests:
```
npm test
```

### Troubleshooting

Common issues:
1. Firebase configuration missing:
   - Error: "Firebase app not initialized"
   - Solution: Ensure `google-services.json` and `GoogleService-Info.plist` are correctly placed in the project

2. Build errors on Android:
   - Error: "Failed to install the app"
   - Solution: Check Android SDK setup and ensure all dependencies are correctly installed

For debugging:
- Enable verbose logging in React Native CLI: `react-native run-android --verbose`
- Use React Native Debugger for runtime debugging

## Data Flow

The Firebase Dream App follows a typical React Native and Firebase authentication flow:

1. User opens the app
2. App initializes Firebase
3. User navigates to Login or Sign Up screen
4. User enters credentials
5. App sends authentication request to Firebase
6. Firebase responds with success or error
7. App updates UI based on authentication result
8. If successful, user is navigated to Home screen

```
[User] -> [Login/SignUp Screen] -> [Firebase Auth] -> [Home Screen]
   ^                                     |
   |_____________________________________|
          (Error handling/feedback)
```

Important technical considerations:
- Ensure proper error handling for network issues and invalid credentials
- Implement secure storage for user tokens
- Consider implementing refresh token mechanism for long-term sessions

## Deployment

### Prerequisites
- Apple Developer Account (for iOS)
- Google Play Developer Account (for Android)

### Deployment Steps
1. Configure app signing for Android in `android/app/build.gradle`
2. Set up app signing for iOS in Xcode
3. Generate release build:
   - Android: `cd android && ./gradlew assembleRelease`
   - iOS: Use Xcode to archive and export the app
4. Submit to respective app stores following their guidelines

## Infrastructure

The project uses the following key infrastructure components:

- Firebase Authentication: Handles user authentication
- React Native: Core framework for building the mobile app
- Android Gradle Plugin: For building the Android app
- CocoaPods: For managing iOS dependencies

Android build configuration (`android/app/build.gradle`):
- Application ID: `com.firebasedreamapp`
- Min SDK Version: 24
- Target SDK Version: 34
- Version Code: 1
- Version Name: "1.0"