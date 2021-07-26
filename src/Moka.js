import React, { memo, useState, useEffect } from 'react';
import { Text, View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { TouchableHighlight } from 'react-native';


export default function Moka( {SelectGroup} ) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

useEffect(() => {
    fetch('http://45.147.178.73/api/Schedule/28')
        .then(response => response.json())
        .then((responseJson) => {
          setIsLoading(false);
          console.log("Response is", responseJson.payload.odd);

          setData(responseJson.payload.odd);
        }, () => {
          // do something with new state
        })
        .catch((error) => {
          console.error(error);
        });
  }, []);

  console.log(data?.Понедельник);
  return (
    <View style={styles.container}>

      <Text>Понедельник</Text>
      <FlatList
        data={data?.Понедельник}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
                <Text style={styles.paragraph}>
                    {console.log("item", item) }
                    {`${item?.subject}: ${item?.start} - ${item?.end}`}
                </Text>
          </View>
        )}
      />

      <Text>Вторник</Text>
      <FlatList
        data={data?.Вторник}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <View>
                <Text style={styles.paragraph}>
                    {`${item?.subject}: ${item?.start} - ${item?.end}`}
                </Text>
            </View>
        )}
      />

    <Text>Среда</Text>
      <FlatList
        data={data?.Среда}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <View>
                <Text style={styles.paragraph}>
                    {`${item?.subject}: ${item?.start} - ${item?.end}`}
                </Text>
            </View>
        )}
      />

    <Text>Четверг</Text>
      <FlatList
        data={data?.Четверг}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <View>
                <Text style={styles.paragraph}>
                    {`${item?.subject}: ${item?.start} - ${item?.end}`}
                </Text>
            </View>
        )}
      />

<Text>Пятница</Text>
      <FlatList
        data={data?.Пятница}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <View>
                <Text style={styles.paragraph}>
                    {`${item?.subject}: ${item?.start} - ${item?.end}`}
                </Text>
            </View>
        )}
      />

    </View>

    
    
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
    paragraph: {
        margin: 5,
        fontSize: 18,
        fontWeight: 'bold',
    },
    group_list:{
        height:200,
    }
});
