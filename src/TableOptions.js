import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { ScrollView } from 'react-native';

import { makeStyles } from '@material-ui/core/styles';

import {
    Card,
    Container,
    Typography,
} from '@material-ui/core';

export default function TableOptions( ) {
    const [isLoading, setIsLoading] = useState(true);
    const [dataOdd, setDataOdd] = useState(null);
    const [dataEven, setDataEven] = useState(null);

    // console.log("params", route.params.id)
    const API = require('./API').API;
    useEffect(() => {
        fetch(API + 'Schedule/28')
            .then(response => response.json())
            .then((responseJson) => {
                setDataOdd(responseJson.payload.odd); 
                setDataEven(responseJson.payload.even); 
                setIsLoading(false);
                //   console.log("Response is", responseJson.payload.odd);

                
            }, () => {
                // do something with new state
            })
                .catch((error) => {
                console.error(error);
            });
            
    }, []);
    const classes = useItemStyles();

    if (isLoading){
        return(
            <View style={{ flex: 1, paddingTop: 20 }}>
                <ActivityIndicator />
            </View>
        )
    }
    if (dataOdd != null){
        console.log("warning be like:", dataOdd['Понедельник']);
    }
    
    return (
        <ScrollView style={styles.container}> 

            <Text style={styles.oglav}>Нечётная неделя</Text>
            {
                Object.keys(dataOdd).map(key => (
                    <Typography>
                        <Text style={styles.weekday}>{key}</Text>
                        {dataOdd[key].map(item => (
                            <Card className={classes.card}>
                            <Typography className={classes.time}>
                                {`${item.start}-${item.end}`}
                            </Typography>

                            <Typography>{item.subject}</Typography>

                            <Typography>
                                {`${item.lecturerLastName} ${item.lecturerFirstName[0]}. ${item.lecturerPatronymic[0]}.`}
                            </Typography>
                                {item.desc && 
                                    <Typography>{item.desc}</Typography>
                                }
                        </Card>
                        ))}
                    </Typography>
                ))
            }

            <Text style={styles.oglav}>Чётная неделя</Text>
            {
                Object.keys(dataEven).map(key => (
                    <Typography>
                        <Text style={styles.weekday}>{key}</Text>
                        {dataEven[key].map(item => (
                            <Card className={classes.card}>
                            <Typography className={classes.time}>
                                {`${item.start}-${item.end}`}
                            </Typography>

                            <Typography>{item.subject}</Typography>

                            <Typography>
                                {`${item.lecturerLastName} ${item.lecturerFirstName[0]}. ${item.lecturerPatronymic[0]}.`}
                            </Typography>
                                {item.desc && 
                                    <Typography>{item.desc}</Typography>
                                }
                        </Card>
                        ))}
                    </Typography>
                ))
            }

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: '#303030',
        padding: 20,
    },
    weekday: {
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
    oglav: {
        textAlign:'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
});

const useItemStyles = makeStyles({
    card: {
        color: '#fff',
        fontSize: 18,
        backgroundColor: '#424242',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    time: {
        fontWeight: 'bold',
    },
});