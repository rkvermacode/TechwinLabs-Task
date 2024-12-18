import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
      <Text>HomeScreen</Text>
      <Button
        title="Go to review"
        onPress={() => navigation.navigate('Review')}
      />
    </View>
  );
};

export default HomeScreen;
