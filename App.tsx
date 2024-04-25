import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import AuthStack from './src/Navigation/AuthStack'
import Login from './src/Screens/Login/Login';

import Routes from './src/Navigation/Routes';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Routes />
    </View>
  );
};
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'lightgray',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default App;
