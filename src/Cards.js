import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableHighlight, SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { ScrollView } from 'react-native';

import { makeStyles } from '@material-ui/core/styles';

import {
    AppBar,
    Card,
    Container,
    Tab,
    Tabs,
    Typography,
  } from '@material-ui/core';

  const useItemStyles = makeStyles({
    root: {
      padding: 16,
    },
    time: {
      fontWeight: 'bold',
    },
  });

export default function Cards( {route} ) {
    const [isLoading, setIsLoading] = useState(true);
    const [dataOdd, setDataOdd] = useState(null);
    const [dataEven, setDataEven] = useState(null);
    // console.log("params", route.params.id)
useEffect(() => {
    fetch('http://45.147.178.73/api/Schedule/' + route.params.id)
        .then(response => response.json())
        .then((responseJson) => {
          setIsLoading(false);
        //   console.log("Response is", responseJson.payload.odd);

        setDataOdd(responseJson.payload.odd); 
        setDataEven(responseJson.payload.even); 
        }, () => {
          // do something with new state
        })
        .catch((error) => {
          console.error(error);
        });
        
  }, []);

//   console.log(data?.Понедельник);
    const classes = useItemStyles();
    return (
        <ScrollView style={styles.container}>
            <Card className={classes.root}>
                <Typography
                    className={classes.time}
                    variant="body1"
                >{`$start}-end`}</Typography>
                <Typography variant="body1">subjec</Typography>
                <Typography variant="body1">{`$lecturerLastName $lecturerFirstName[0]. $lecturerPatronymic[0].`}</Typography>
                <Typography variant="body1">desc</Typography>
            </Card>
            <Text style={styles.oglav}>Нечётная неделя</Text>

            <Text style={styles.weekday}>Понедельник</Text>
            
            <FlatList
                scrollEnabled={false}
                data={dataOdd?.Понедельник}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Text style={styles.paragraph}>
                        {`${item?.subject}: ${item?.start} - ${item?.end}`}
                    </Text>
                )}
            />

            <Text style={styles.weekday}>Вторник</Text>
            <FlatList
                scrollEnabled={false}
                data={dataOdd?.Вторник}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Text style={styles.paragraph}>
                        {`${item?.subject}: ${item?.start} - ${item?.end}`}
                    </Text>
                )}
            />

            <Text style={styles.weekday}>Среда</Text>
            <FlatList
                scrollEnabled={false}
                data={dataOdd?.Среда}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Text style={styles.paragraph}>
                        {`${item?.subject}: ${item?.start} - ${item?.end}`}
                    </Text>
                )}
            />

            <Text style={styles.weekday}>Четверг</Text>
            <FlatList
                scrollEnabled={false}
                data={dataOdd?.Четверг}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Text style={styles.paragraph}>
                        {`${item?.subject}: ${item?.start} - ${item?.end}`}
                    </Text>
                )}
            />

            <Text style={styles.weekday}>Пятница</Text>
            <FlatList
                scrollEnabled={false}
                data={dataOdd?.Пятница}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Text style={styles.paragraph}>
                        {`${item?.subject}: ${item?.start} - ${item?.end}`}
                    </Text>
                )}
            />


        <Text style={styles.oglav}>Чётная неделя</Text>

        <Text style={styles.weekday}>Понедельник</Text>
        <FlatList
            scrollEnabled={false}
            data={dataEven?.Понедельник}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Text style={styles.paragraph}>
                    {`${item?.subject}: ${item?.start} - ${item?.end}`}
                </Text>
            )}
        />

        <Text style={styles.weekday}>Вторник</Text>
        <FlatList
            scrollEnabled={false}
            data={dataEven?.Вторник}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Text style={styles.paragraph}>
                    {`${item?.subject}: ${item?.start} - ${item?.end}`}
                </Text>
            )}
        />

        <Text style={styles.weekday}>Среда</Text>
        <FlatList
            scrollEnabled={false}
            data={dataEven?.Среда}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Text style={styles.paragraph}>
                    {`${item?.subject}: ${item?.start} - ${item?.end}`}
                </Text>
            )}
        />

        <Text style={styles.weekday}>Четверг</Text>
        <FlatList
            scrollEnabled={false}
            data={dataEven?.Четверг}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Text style={styles.paragraph}>
                    {`${item?.subject}: ${item?.start} - ${item?.end}`}
                </Text>
            )}
        />

        <Text style={styles.weekday}>Пятница</Text>
        <FlatList
            scrollEnabled={false}
            data={dataEven?.Пятница}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Text style={styles.paragraph}>
                    {`${item?.subject}: ${item?.start} - ${item?.end}`}
                </Text>
            )}
        />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#303030',
        padding: 5,
    },
    weekday: {
        textAlign:'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    paragraph: {
        margin: 5,
        color: '#fff',
        fontSize: 18,
        backgroundColor: '#424242',
        padding: 10,
        borderRadius: 5,
    },
    card: {
        backgroundColor: '#303030',
    },
    oglav: {
        textAlign:'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
});

const useStyles = makeStyles({
    appBar: {
        height: 64,
        alignItems: 'center',
        flexDirection: 'row',
        padding: '0 16px',
    },
    logo: {
        width: 48,
        height: 48,
        marginRight: 16,
    },
    heading: {
        fontSize: 24,
    },
    container: {
        marginTop: 64,
        padding: 16,
    },
    card: {
        padding: 16,
        overflow: 'visible',
        marginBottom: 16,
    },
    cardText: {
        fontSize: 18,
        marginBottom: 16,
    },
});