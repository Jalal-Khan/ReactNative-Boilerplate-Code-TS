import React from 'react';
import navigationStings from '../../Constants/navigationStrings';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface SignupProps {
  navigation: any;
}

const Signup: React.FC<SignupProps> = ({ navigation }) => {
  console.log('Signup Screen');
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(navigationStings.HOME)}>
        <Text style={styles.headerText}>Signup</Text>
      </TouchableOpacity>
    </View >
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  headerText: {
    transform: 'uppercase', // 'uppercase', 'lowercase', 'capitalize', 'none
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
export default Signup;

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
