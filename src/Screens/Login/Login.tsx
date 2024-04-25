import React from 'react';
import navigationStrings from '../../Constants/navigationStrings';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';

interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  console.log('Login Screen');
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate(navigationStrings.SIGNUP)} title='Register' />
      <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.SIGNUP)}>


        <Text style={styles.headerText}>Login</Text>
      </TouchableOpacity>

    </View >
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  headerText: {
    transform: 'uppercase', // 'uppercase', 'lowercase', 'capitalize', 'none
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Login;

// import React from 'react';
// import { View, Text, Button, SafeAreaView, Image, FlatList } from 'react-native';
// import {
//   scale,
//   verticalScale,
//   moderateScale,
//   moderateVerticalScale,
// } from 'react-native-size-matters';
// import styles from './styles'; // Import your stylesheet

// const Login: React.FC = () => {
//   // Implement your logic to render each item in the FlatList here (assuming dummyData has a structure)
//   const renderItem = ({ item }: { item: any }) => {
//     // ... JSX for each item based on your data structure
//   };

//   return (
//     <View style={styles.container}>
//       <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
//         <View style={styles.headerStyle}>
//           <Text /> {/* Placeholder for potential header text */}
//           <Text style={styles.headerText}>Nanny Line</Text>
//           <Image
//             source={imagePath.notification}
//             style={styles.notificationImage}
//           />{' '}
//           {/* Added style for notification image */}
//         </View>

//         <View
//           style={{
//             marginTop: moderateVerticalScale(14),
//             marginHorizontal: moderateScale(16),
//             flex: 1,
//           }}>
//           <FlatList
//             showsVerticalScrollIndicator={false}
//             data={dummyData}
//             renderItem={renderItem}
//             ItemSeparatorComponent={() => (
//               <View style={{ marginBottom: moderateVerticalScale(16) }} />
//             )}
//           />
//         </View>
//       </SafeAreaView>
//     </View>
//   );
// };

// export default Login;
