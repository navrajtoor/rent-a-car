import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Settings({navigation}){
    <View style={StyleSheet.settings}>
        <Text
            onPress={() => alert('This is the settings page')} 
            style={StyleSheet.settingsText}>Settings Page
        </Text>
    </View>
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