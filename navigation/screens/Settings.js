import * as React from 'react';
import { View, Text } from 'react-native';

export default function Settings({navigation}){
    <View style={StyleSheet.settings}>
        <Text
            onPress={() => navigation.navigate('Home')} 
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