import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomePage(){
    <View style={StyleSheet.home}>
        <Text style={StyleSheet.homeText}>
            Home Page
        </Text>
    </View>
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