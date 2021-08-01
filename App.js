import { StatusBar } from 'expo-status-bar';

import {
  AppBar,
  Card,
  Container,
  Tab,
  Tabs,
  Typography,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { SearchBar } from 'react-native-elements';

import React from 'react';

import GropSelector from './src/GroupSelector';
import Cards from './src/Cards';
import Moka from './src/Moka';
import Main from './src/Main';



import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackRouter } from '@react-navigation/native';

const Stack = createStackNavigator();


const API = 'http://45.147.178.73/api/';


export default function App(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name="GropSelector"
                component={GropSelector}
                options={{title:'Выбор группы'}}
                />
            <Stack.Screen 
                name="Cards"
                component={Cards}
                options={{title:'Расписание'}}
                />
        </Stack.Navigator>
    </NavigationContainer>
}