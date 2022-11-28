import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomePage(){
    return(
        <View style={StyleSheet.home}>
            <Text style={StyleSheet.homeText}>
                This is a placeholder home page
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeText: {
        fontSize: 26,
        fontWeight: 'bold',
    },
})