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

export default function TableTomorrow ( {groupID, tomorrowDay} ) {
    const [isLoading, setIsLoading] = useState(true);
    const [dataToday, setDataToday] = useState(null);

    console.log("params", groupID)
    useEffect(() => {
        fetch('http://45.147.178.73/api/Schedule/' + groupID + '?filter=tomorrow')
            .then(response => response.json())
            .then((responseJson) => {
                setDataToday(responseJson.payload.items); 
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
    
    return (
        <ScrollView style={styles.container}> 
            <Text style={styles.weekday}>{tomorrowDay}</Text>
            {
                dataToday.map(item => (
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