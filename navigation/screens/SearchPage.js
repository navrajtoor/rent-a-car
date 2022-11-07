import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SearchPage({navigation}){
    <View style={StyleSheet.search}>
        <Text
            onPress={() => navigation.navigate('Home')} 
            style={StyleSheet.searchText}>Search Page
        </Text>
    </View>
}

const styles = StyleSheet.create({
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