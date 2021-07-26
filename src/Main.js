import React, { memo, useState, useEffect } from 'react';
import { Text, View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native';


export default function Main( {navigation} ) {
    const loadScene = () => {
        navigation.navigate('GropSelector');
    }
    return (
        <View style={styles.container}>
            <Text>Это главная</Text>
            <Button title='loadScene' onPress={loadScene}></Button>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 5,
        height: 200,
    },
});
