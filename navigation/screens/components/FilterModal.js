import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width
const HEIGHT = 550;

const FilterModal = (props) => {
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
                        <Text>Filters</Text>
                    </View>
                    <View style={styles.buttonView}>
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
    buttonView: {
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
    }
})