import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const CarCard = ({item}) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.carCard}>
                <View style = {styles.title}>
                    <Text style = {styles.carName}>{item.car_model_year + ' ' + item.car + ' ' + item.car_model}</Text>
                    <Text> {item.price}/day</Text>
                </View>
                <Text style = {styles.bodyOfCard}>Color: {' ' + item.car_color}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'light gray',
        padding: 10
    },
    carCard: {
        flex: 1,
        borderWidth: 2, 
        borderRadius: 4,
        padding: 10,
        justifyContent: 'space-between',
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    carName: {
        color: 'blue',
        fontSize: 15,
    },
    bodyOfCard: {
        justifyContent: 'flex-end'
    }
})
export default CarCard

//+ ' ' + item.car_color +' ' + item.car_model_year + ' ' + item.car_vin + ' ' + item.price + ' ' + item.availability + '\n'