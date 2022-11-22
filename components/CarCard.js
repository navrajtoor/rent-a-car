import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const CarCard = ({item}) => {
    return(
        <View>
            <Text>{item.id + '. ' + item.car + ' ' + item.car_model + ' ' + item.car_color +' ' + item.car_model_year + ' ' + item.car_vin + ' ' + item.price + ' ' + item.availability + '\n'}</Text>
        </View>
    );
}

export default CarCard