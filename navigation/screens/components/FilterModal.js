import React from 'react';
import { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width// width of device window
const HEIGHT = 550;

/*const [make, setMake] = useState();
const [model, setModel] = useState();
const [year, setYear] = useState();
const [color, setColor] = useState();
const [price, setPrice] = useState();*/

const FilterModal = (props, {item}) => {
    // close the modal
    closeModal = (bool) => {
        props.changeModalVisible(bool);

    }

    return(
        <TouchableOpacity 
            disabled={true}
            style={styles.container}
        >
            <SafeAreaView style = {styles.modal}>
                    <View>
                        <Text style={styles.title}>Filters</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.subtitle}>Make</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.subtitle}>Model</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.subtitle}>Year</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.subtitle}>Color</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.subtitle}>Price</Text>
                    </View>
                    <View style={styles.bottomButtonView}>
                        <TouchableOpacity 
                            style={styles.touchable}
                        >
                            <Text style={styles.applyButton}>Apply</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.touchable} 
                            onPress={() => closeModal(false, 'Cancel')}
                        >
                            <Text style={styles.cancelButton}>Cancel</Text> 
                        </TouchableOpacity>
                    </View>
            </SafeAreaView>
        </TouchableOpacity>
    )
}

export default FilterModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        height: HEIGHT,
        width: WIDTH - 80,
        paddingTop: 10,
        backgroundColor: 'white',
        borderRadius: 4,
    },
    bottomButtonView: {
        width: '100%',
        flexDirection: 'row'
    },
    touchable: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
    },
    applyButton: {
        color: '#009688'
    },
    cancelButton: {
        color: '#009688'
    },
    title: {
        color: '#009688',
        fontWeight: 'bold',
        fontSize: 17,
        padding: 10 
    },
    item: {
        marginVertical: 10
    },
    subtitle: {
        color: '#009688',
        fontSize: 17,
        padding: 10
    }
})