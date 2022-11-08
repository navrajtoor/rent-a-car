import * as React from 'react';
import {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';

export default function SearchPage({ navigation }) {
    
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = "https://myfakeapi.com/api/cars/?apikey=" + API_KEY;

    // variables for api
    const [response, setResponse] = useState([]) // state for 
    const [loading, setLoading] = useState(true) // state to show if api is loading
    const [error, setError] = useState(); // for any errors

    const searchCars = async(car) =>{
        const response = await fetch(`${url}&s=${car}`);
        const data = await response.json();
        setCars(data.Search)
    }

    useEffect(() => {
         fetch(url)// fetch data from api url
        .then((response)=>response.json())// store response in response.json
        .then((json)=>setResponse(json))// setData from json
        .catch((error) => alert("Problem with your fetch operation" + error))// error handling
        .finally(() => setLoading(false))// set loading to false when we are done with getting info from api
    }, [])

    return(
        <View style={StyleSheet.search}>
            <View>
                {loading ? <ActivityIndicator/> : 
                <FlatList style={StyleSheet.card}
                    data={response}
                />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    search: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchText: {
        fontSize: 26,
        fontWeight: 'bold',
    },
})