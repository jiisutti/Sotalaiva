import React from 'react';
import {Text, View } from 'react-native';
import StyleS from '../style/style';

export default function Header() {
  return (
    
    <View style={StyleS.header}>
      
      <Text style={StyleS.title}> BATTLESHIPS </Text>
    
    </View>
  )
}

