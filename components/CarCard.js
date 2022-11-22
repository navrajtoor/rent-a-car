import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const CarCard = ({item}) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.carCard}>
                <View style = {styles.title}>
                    <Text style = {styles.carName}>{item.car + ' ' + item.car_model}</Text>
                    <Text style = {{fontSize: 16, textAlign: 'right'}}> {item.price}/day</Text>
                </View>
                <View style = {styles.bodyOfCard}>
                    <View style = {{alignSelf: 'flex-end'}}>
                        <Text style = {{textAlign: 'right'}}>Year: {item.car_model_year}</Text>
                        <Text style = {{textAlign: 'right'}}>Color: {item.car_color}</Text>
                        <Text style = {{textAlign: 'right'}}>VIN: {item.car_vin}</Text>
                        <Text style = {{textAlign: 'right'}}>Available: {item.availability ? <Text>Available to Rent</Text> : <Text>Not Available to Rent</Text>}</Text>
                    </View>
                    <Image source = {{uri: 'https://picsum.photos/id/655/500'}} style = {{height: 60, width: 60}}/>
                </View>
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
        justifyContent: 'space-between'
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    carName: {
        color: 'blue',
        fontSize: 17
    },
    bodyOfCard: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        paddingTop: 10
    }
})
export default CarCard