import React, { memo, useState, useEffect } from 'react';
import { Text, TouchableHighlight, FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default function listOfGroups( {el} ) {
  return (
    <TouchableHighlight style={styles.container}>
        <Text>{el.text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 5,
    height: 200,
  },
});
