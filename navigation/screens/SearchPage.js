import * as React from 'react';
import {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';

export default function SearchPage() {
    
    const url = "https://myfakeapi.com/api/cars/";

    // hooks for api
    const [cars, setCars] = useState([]); 
    const [isLoading, setLoading] = useState([]);
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
        <View style={StyleSheet.search}>
            {isLoading ? <ActivityIndicator/> : 
                ( <View>
                    <Text style={{ fontSize: 18, color: '#5ced73', textAlign: 'center'}}>Rent-A-Car</Text>
                    <FlatList
                        data={cars.cars}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <Text>{item.id + '. ' + item.car + ' ' + item.car_model + ' ' + item.car_color +' ' + item.car_model_year + ' ' + item.car_vin + ' ' + item.price + ' ' + item.availability + '\n'}</Text>
                        )}
                    />
                </View>
            )}
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