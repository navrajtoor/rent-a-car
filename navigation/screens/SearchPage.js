import * as React from 'react';
import {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';

export default function SearchPage({ navigation }) {
    
    const url = "https://myfakeapi.com/api/cars";

    // variables for api
    const [response, setResponse] = useState([]) // state for 
    const [loading, setLoading] = useState(true) // state to show if api is loading
    const [error, setError] = useState(); // for any errors

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFzIiwicGFzc3dvcmQiOiIxMjMiLCJ3ZWJzaXRlIjoid3d3Lm15ZmFrZWFwaS5jb20iLCJpYXQiOjE1NzM1NDMzNjcsImV4cCI6MTU3MzU0NTE2N30.95fFJcUIOsTVLrTNxSVdk4loPQnwWx9tBGJIb19o65"
    });
    
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        id: 'id',
        car: 'car',
        model: 'car_model',
        color: 'car_color',
        modelYear: 'car_model_year',
        vin: 'car_vin',
        price: 'price',
        availability: 'availability',
    };
    
    const searchCars = async(car) =>{
        const response = await fetch(`${url}&s=${car}`);
        const data = await response.json();
        setCars(data.Search)
    }

    fetch("https://myfakeapi.com/api/cars/", requestOptions)
    .then((response) => {
        
        return response.text()
    })
    .then((result) => {
        console.log(result)
        setLoading(false);
        setResponse(result);
    })
    .catch((error) => {
        setLoading(false);
        setError(error);
        console.log('error', error)
    })
    useEffect(() => {
        searchCars('');
    }, [])

    const getContent = () => {
        if(loading){
            return <ActivityIndicator/>
        }
        if(error){
            return <Text>error</Text>
        }
        return <Text>{response}</Text>
    };

    return(
        <View style={StyleSheet.search}>
            {getContent()}
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