import * as React from 'react';
import {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TextInput, SafeAreaView } from 'react-native';

import CarCard from './components/CarCard.js';

export default function SearchPage() {
    
    const url = "https://myfakeapi.com/api/cars/";

    // hooks for api
    const [cars, setCars] = useState([]); 
    const [isLoading, setLoading] = useState([]);

    // hook for searching
    const [searchTerm, setSearchTerm] = useState("")

    //fetch data from api in json, set cars to data in json, catch any errors, set loading to false
    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((json) => setCars(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

    // in return, render our data from api
    return(
        <SafeAreaView style = {{ flex:1 }}>
            {isLoading ? <ActivityIndicator/> : 
                ( <View>
                    <Text style={{ fontSize: 18, color: '#009688', textAlign: 'center'}}>Rent-A-Car</Text>
                    <TextInput 
                        style = {styles.input}
                        value = {searchTerm}
                        placeholder = "Search for a car"
                        onChangeText= {e => {setSearchTerm(e)}}
                    />                    
                    <FlatList 
                        data={cars.cars}
                        keyExtractor={({ id }) => id}
                        renderItem={ ({item}) => {
                            // if statement to allow users to search through car make, model, year, color, and availability
                            if(searchTerm == ''){
                                return <CarCard item = {item}/>
                            }else if(item.car.toLowerCase().includes(searchTerm.toLowerCase())){
                                return <CarCard item = {item}/>
                            }else if(item.car_model.toLowerCase().includes(searchTerm.toLowerCase())){
                                return <CarCard item = {item}/>
                            }else if(item.car_model_year.toString().toLowerCase().includes(searchTerm.toLowerCase())){
                                return <CarCard item = {item}/>
                            }else if(item.car_color.toLowerCase().includes(searchTerm.toLowerCase())){
                                return <CarCard item = {item}/>
                            }  
                        }}
                    />
                </View>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 10,
        borderColor: '#009688',
        backgroundColor: 'white'
    }
})
