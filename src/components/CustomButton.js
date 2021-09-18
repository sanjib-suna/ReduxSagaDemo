//import libraries
import React from 'react';
import {Text, StyleSheet, Button} from 'react-native';

// create a component
const CustomButton = ({onPress, buttonStyle, buttonText}) => {
  return (
     <Button
     title="Login"
     onPress={onPress}
   />
  );
};
export default CustomButton;

const styles = StyleSheet.create({
  commonButtonCSS: {
    height: 35,
    width: '50%',
    backgroundColor: 'transparent',
    borderRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentsText: {
    fontSize: 14,
    color: '#FFFFFF',
    letterSpacing: 0.1,
    lineHeight: 18,
  },
});
