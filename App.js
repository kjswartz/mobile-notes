import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation'

// import the different screens
import Loading from './src/Loading'
import SignUp from './src/SignUp'
import Login from './src/Login'
import Main from './src/Main'

// create our app's navigation stack
const App = SwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)
export default App

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
// import React from 'react';
// import firebase from 'react-native-firebase';
// // Components to display when the user is LoggedIn and LoggedOut 
// // Screens for logged in/out - outside the scope of this tutorial
// // import LoggedIn from './LoggedIn';
// import Login from './src/Login'
// import Main from './src/Main'
// // import LoggedOut from './LoggedOut';
// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       loading: true,
//     };
//   }
//   /**
//    * When the App component mounts, we listen for any authentication
//    * state changes in Firebase.
//    * Once subscribed, the 'user' parameter will either be null 
//    * (logged out) or an Object (logged in)
//    */
//   componentDidMount() {
//     this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
//       this.setState({
//         loading: false,
//         user,
//       });
//     });
//   }
//   /**
//    * Don't forget to stop listening for authentication state changes
//    * when the component unmounts.
//    */
//   componentWillUnmount() {
//     this.authSubscription();
//   }
//   render() {
//     // The application is initialising
//     if (this.state.loading) return null;
//     // The user is an Object, so they're logged in
//     if (this.state.user) return <Main />;
//     // The user is null, so they're logged out
//     return <Login />;
//   }
// }