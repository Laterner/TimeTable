import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { ScrollView } from 'react-native';

import { makeStyles } from '@material-ui/core/styles';

import { useMemo } from 'react';

import {
    AppBar,
    Card,
    Container,
    Tab,
    Tabs,
    Typography,
  } from '@material-ui/core';
import { render } from 'react-dom';

export default function Moka(  ) {
    const [isLoading, setIsLoading] = useState(true);
    const [groups, setGroups] = useState(null);
    const [dataOdd, setDataOdd] = useState(null);
    const [dataEven, setDataEven] = useState(null);
    // console.log("params", route.params.id)
    useEffect(() => {
        fetch('http://45.147.178.73/api/Schedule/28')
            .then(response => response.json())
            .then((responseJson) => {
                setIsLoading(false);
                //   console.log("Response is", responseJson.payload.odd);

                setGroups(responseJson.payload); 
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
    
    var oddMap = [];
    var evenMap = [];

    console.log("dataEven", dataEven);
    for(var i in dataOdd)
    {
        oddMap.push(dataOdd [i]);
    }
    for(var i in dataEven)
    {
        evenMap.push(dataEven [i]);
    }
    

    return (
        
        <View>
            { 
                isLoading &&   
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            }
            { 
            !isLoading && 
            <ScrollView style={styles.container}>

                <Text style={styles.oglav}>Нечётная неделя</Text>
                
                {oddMap.map(item => 
                    {
                        var days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
                        console.log("days:", item)
                        return( 
                            <View>
                                <Text style={styles.weekday}>Day</Text>
                                {
                                    item.map(el =>{
                                        return(
                                            <Card className={classes.root}>
                                                <Typography className={classes.time} variant="body1">
                                                    {`${el.start}-${el.end}`}
                                                </Typography>

                                                <Typography variant="body1">{el.subject}</Typography>

                                                <Typography variant="body1">
                                                    {`${el.lecturerLastName} ${el.lecturerFirstName[0]}. ${el.lecturerPatronymic[0]}.`}
                                                </Typography>
                                                    {el.desc && 
                                                        <Typography variant="body1">{el.desc}</Typography>
                                                    }
                                            </Card>
                                        )
                                    })
                                }
                            </View>
                            
                        )
                    }
                )}

                <Text style={styles.oglav}>Чётная неделя</Text>
            
                {evenMap.map(item => 
                    {
                        var days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
                        console.log("days2:", item)
                        return( 
                            <View>
                                <Text style={styles.weekday}>Day</Text>
                                {
                                    item.map(el =>{
                                        return(
                                            <Card className={classes.root}>
                                                <Typography className={classes.time} variant="body1">
                                                    {`${el.start}-${el.end}`}
                                                </Typography>
                                                <Typography variant="body1">{el.subject}</Typography>
                                                <Typography variant="body1">{`${el.lecturerLastName} ${el.lecturerFirstName[0]}. ${el.lecturerPatronymic[0]}.`}</Typography>
                                                {el.desc && <Typography variant="body1">{el.desc}</Typography>}
                                            </Card>
                                        )
                                    })
                                }
                            </View>
                            
                        )
                    }
                )}

            </ScrollView>
            }
        </View>
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
        // textAlign:'center',
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
        marginBottom: 20,
    },
});

const useItemStyles = makeStyles({
    root: {
        margin: 5,
        color: '#fff',
        fontSize: 18,
        backgroundColor: '#424242',
        padding: 10,
        borderRadius: 5,
    },
    time: {
        fontWeight: 'bold',
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