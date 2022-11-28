import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Settings(){
    return(
        <View style={StyleSheet.settings}>
            <Text style={StyleSheet.settingsText}>
                This is a placeholder settings page
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    settings: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    settingsText: {
        fontSize: 26,
        fontWeight: 'bold',
    },
})