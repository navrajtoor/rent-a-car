import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
function SearchPage(props) {
    return (
        <ImageBackground>
            <View style={StyleSheet.bottomBar}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    
    bottomBar: {
        width: '100%',
        height: 60,
        color: 'red',
        justifyContent: 'flex-end',
    }
})

export default SearchPage;