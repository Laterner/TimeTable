import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { ScrollView } from 'react-native';

import { makeStyles } from '@material-ui/core/styles';

import { useMemo, Fragment} from 'react';

import {
    Card,
    Container,
    Typography,
} from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import TableOptions from './TableOptions';

export default function Cards( {route} ) {
    function returnCurrentDay(jo = 0){
        const days = [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота'
        ];
        const currentDayIndex = new Date().getUTCDay() + jo;
        // console.warn("currentDay:", require('./API'));
        return days[currentDayIndex];
    }

    const currentDay = returnCurrentDay();
    const tomorrowDay = returnCurrentDay(1);

    const classes = useItemStyles();
    
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const handleChange = (event, value) => {
        setActiveTabIndex(value);
    }

    function TabPanel(props) {
        const {children, value, index} = props;
        return (
            <div>
            {
                value === index &&
                <h1>{children}</h1>
            }
            </div>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Tabs className={classes.tabs} value={activeTabIndex} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="ВСЕ"/>
                <Tab label="СЕГОДНЯ"  />
                <Tab label="ЗАВТРА"  />
            </Tabs>
            
            <TabPanel value={activeTabIndex} index={0}> 
                <TableOptions groupID={route.id}/>
            </TabPanel>
            <TabPanel value={activeTabIndex} index={1}>
            {currentDay}
            </TabPanel>
            <TabPanel value={activeTabIndex} index={2}>
            {tomorrowDay}
            </TabPanel>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: '#303030',
        padding: 20,
    }
});

const useItemStyles = makeStyles({
    tabs: {
        color: '#fff',
        fontSize: 18,
    },
    time: {
        fontWeight: 'bold',
    }
});