import React from 'react';
import { View, Text, Button, SafeAreaView, Image, FlatList } from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import styles from './styles'; // Import your stylesheet

const Meeting: React.FC = () => {
  // Implement your logic to render each item in the FlatList here (assuming dummyData has a structure)
  const renderItem = ({ item }: { item: any }) => {
    // ... JSX for each item based on your data structure
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={styles.headerStyle}>
          <Text /> {/* Placeholder for potential header text */}
          <Text style={styles.headerText}>Nanny Line</Text>
          <Image
            source={imagePath.notification}
            style={styles.notificationImage}
          />{' '}
          {/* Added style for notification image */}
        </View>

        <View
          style={{
            marginTop: moderateVerticalScale(14),
            marginHorizontal: moderateScale(16),
            flex: 1,
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dummyData}
            renderItem={renderItem}
            ItemSeparatorComponent={() => (
              <View style={{ marginBottom: moderateVerticalScale(16) }} />
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Meeting;
