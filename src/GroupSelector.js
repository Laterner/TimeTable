import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, TextField } from '@material-ui/core';
import { 
    Text, 
    View, 
    FlatList,
    ActivityIndicator, 
    StyleSheet, 
    TextInput, 
    TouchableHighlight,
} from 'react-native';


export default function GropSelector( {navigation} ) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const classes = useItemStyles();

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

    var groups = data?.items;

    const [name_filter, set_filter] = useState('');
    var gog = groups?.filter(item => item.name.includes(name_filter.toUpperCase()));


    return (
        <View id="non" style={styles.container}>
            <Card className={classes.card}>
                <Typography>Выберите группу</Typography>

                {/* <TextInput className={classes.search}
                onChange={(event) => set_filter(event.target.value)} /> */}

                <TextField 
                    className={classes.search} 
                    onChange={(event) => set_filter(event.target.value)} 
                    InputProps={{
                        className: classes.searchInput,
                    }}  
                />
            </Card>

            { 
                isLoading &&   
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            }
            {
                !isLoading && 
                <FlatList style={styles.group_list}
                    data={gog}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableHighlight onPress={() => navigation.navigate('Cards', item)}>
                            <Text style={styles.paragraph}>
                                    {item?.name}
                            </Text>
                        </TouchableHighlight>
                    )}
                />
            }
        </View> 
    // <View style={styles.container}>
    //     <TextInput style={styles.search} />
    //     <FlatList style={styles.group_list}
    //         data={data?.items}
    //         keyExtractor={item => item.id}
    //         renderItem={({ item }) => (
    //             <TouchableHighlight onPress={() => navigation.navigate('Cards', item)}>
    //                 <Text style={styles.paragraph}>
    //                         {item?.name}
    //                 </Text>
    //             </TouchableHighlight>
    //         )}
    //     />
    // </View>
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
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    group_list:{
        marginTop: 5,
    }
});

const useItemStyles = makeStyles({
    card: {
        marginTop: 15,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        backgroundColor: '#424242',
        padding: 10,
        borderRadius: 5,
    },
    search: {
        backgroundColor: '#424242',
        marginTop: 5,
        height: 40,
        width: '100%',
        // border:'1px solid white',

        // "&:hover":{
        //     borderColor: '#fff',
        // }
    },
    searchInput:{
        color: '#fff',
    }
});