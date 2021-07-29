import React, { memo, useState, useEffect } from 'react';
import { Text, View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

useEffect(() => {
    fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then((responseJson) => {
        // const ds = new FlatList.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        setIsLoading(false);
        setData(responseJson);
      }, () => {
        // do something with new state
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
     { 
       isLoading &&   
       <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      }
       { 
        !isLoading && 
          <View style={{ justifyContent: 'center', flex: 1 }}>
            <FlatList
              data={data?.movies}
              keyExtractor={item => item.id}
              ListHeaderComponent={() => (
                <View>
                  <Text style={{ color: 'blue', fontSize: 28, }}>{data?.title}</Text>
                  <Text style={{ color: 'brown', fontSize: 18, }}>{data?.description}</Text>
                </View>
              )}
              renderItem={({ item }) => (
                <Text style={styles.paragraph}>
                  {` - ${item?.title}: ${item?.releaseYear}`}
                </Text>
              )}
            />
          </View>
       }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 14,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
