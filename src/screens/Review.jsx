import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import {AirbnbRating} from 'react-native-ratings';
import CustomTextInput from '../components/CustomTextInput';

import CustomButton from '../components/CustomButton';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';

const icon = require('../../assets/icon.png');
const backArrow = require('../../assets/back.png');
const cancelIcon = require('../../assets/cancel.png');

const Review = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderBottomColor: '#939393',
        }}>
        <Image source={backArrow} onPress={() => navigation.goBack()} />

        <Text style={{color: 'black', fontSize: 24, fontWeight: '900'}}>
          Write a review
        </Text>
        <Image source={cancelIcon} />
      </View>
      <ScrollView>
        <Text
          style={{
            color: '#434343',
            fontWeight: '600',
            fontSize: 18,
            marginTop: 20,
          }}>
          How would you rate your experience?
        </Text>

        <AirbnbRating
          count={5}
          reviews={['Terrible', 'Poor', 'Average', 'Great', 'Amazing']}
          defaultRating={5}
          size={40}
          starContainerStyle={{gap: 20}}
        />

        <View
          style={{
            backgroundColor: '#F7F9FC',
            padding: 10,
            marginVertical: 10,
            borderRadius: 10,
            gap: 20,
          }}>
          <View style={{gap: 10}}>
            <Text style={{color: '#434343', fontWeight: '600', fontSize: 15}}>
              Write a title for your review
            </Text>

            <CustomTextInput
              placeholder={`e.g., 'Loved the fit' or 'Not great for beginners'`}
            />
          </View>

          <View style={{gap: 10}}>
            <Text style={{color: '#434343', fontWeight: '600', fontSize: 15}}>
              Tell us more
            </Text>

            <CustomTextInput
              placeholder={`Share your experience with this pattern (e.g., 'Loved the fit, but the instructions were unclear').`}
              isMultiline={true}
            />
          </View>

          <View style={{gap: 10}}>
            <Text style={{color: '#434343', fontWeight: '600', fontSize: 15}}>
              What size did you make?
            </Text>

            <CustomTextInput
              placeholder={`Enter the size you created from this pattern`}
            />
          </View>

          <View style={{gap: 10}}>
            <Text style={{color: '#434343', fontWeight: '600', fontSize: 15}}>
              Which fabric did you use
            </Text>

            <CustomTextInput placeholder={`Which fabric did you use`} />
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 120,
              borderStyle: 'dashed',
              borderWidth: 1,
              borderColor: '#A8A7A7',
              borderRadius: 10,
            }}>
            <Image source={icon} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                color: '#434343',
                fontWeight: '600',
                padding: 10,
              }}>
              Post as Anonymous
            </Text>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
          </View>

          <CustomButton />

          <Text
            style={{
              color: '#434343',
              fontSize: 19,
              fontWeight: '700',
              alignSelf: 'center',
              justifyContent: 'center',
              paddingHorizontal: 10,
            }}>
            Cancel
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: 'white',
  },

  topBorder: {
    borderWidth: 1,
    backgroundColor: '#939393',
  },
});
