import React, { memo, useState, useEffect } from 'react';
import { Text, View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { TouchableHighlight } from 'react-native';
import { TextInput } from 'react-native';


export default function GropSelector( {navigation} ) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

useEffect(() => {
    fetch('http://45.147.178.73/api/group/')
        .then(response => response.json())
        .then((responseJson) => {
          setIsLoading(false);
          // console.log("Response is", responseJson.payload);

          setData(responseJson.payload);
        }, () => {
          // do something with new state
        })
        .catch((error) => {
          console.error(error);
        });
  }, []);

  // var gog = data?.items.find(item => item.id === 2);
  return (
    <View style={styles.container}>
        <TextInput style={styles.serch} />
        { 
            isLoading &&   
            <View style={{ flex: 1, paddingTop: 20 }}>
                <ActivityIndicator />
            </View>
        }
        {
            !isLoading && 
            <TouchableHighlight style={{ justifyContent: 'center', flex: 1 }}>
                <FlatList style={styles.group_list}
                    data={data?.items}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableHighlight onPress={() => navigation.navigate('Cards', item)}>
                        <Text style={styles.paragraph}>
                                {item?.name}
                        </Text>
                        </TouchableHighlight>
                    )}
                />
            </TouchableHighlight>
        }
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // paddingTop: Constants.statusBarHeight,
        backgroundColor: '#303030',//303030
        paddingRight: 5,
        paddingLeft: 5,
    },
    paragraph: {
        justifyContent: 'center',
        textAlign:'center',
        margin: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    group_list:{
        marginTop: 5,
        height:200,
    },
    serch: {
        backgroundColor: 'pink',
        marginTop: 5,
        height: 40,
        borderColor: '#673ab7',
        borderStyle: 'solid',
        color: '#fff',
    }
});
