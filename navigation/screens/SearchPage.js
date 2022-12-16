import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TextInput, SafeAreaView, Modal, Dimensions, TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import Ionicons from 'react-native-vector-icons/Ionicons';

import CarCard from './components/CarCard.js';

const WIDTH = Dimensions.get('window').width// width of device window
const HEIGHT = 550;

export default function SearchPage() {

    const url = "https://myfakeapi.com/api/cars/";

    // hooks for api
    const [cars, setCars] = useState([]);
    const [isLoading, setLoading] = useState([]);

    // hook for searching
    const [searchTerm, setSearchTerm] = useState("");

    // hooks for modal filter
    const [isModalVisibile, setModalVisible] = useState(false);
    const [selected, setSelected] = useState("");

    //some data for makes
    const makeData = [
        { key: "Ford", value: "Ford" },
        { key: "Toyota", value: "Toyota" },
        { key: "Honda", value: "Honda" },
        { key: "Saab", value: "Saab" },
        { key: "BMW", value: "BMW" },
        { key: "Mercedes-Benz", value: "Mercedes-Benz" },
        { key: "Fiat", value: "Fiat" },
        { key: "Mitsubishi", value: "Mitsubishi" },
        { key: "Jaguar", value: "Jaguar" },
        { key: "Subaru", value: "Subaru" },
        { key: "Porsche", value: "Porsche" },
        { key: "Volkswagen", value: "Volkswagen" },
        { key: "Chevrolet", value: "Chevrolet" },
        { key: "Peugeot", value: "Peugeot" },
        { key: "Audi", value: "Audi" },
        { key: "Lamborghini", value: "Lamborghini" },
        { key: "Land Rover", value: "Land Rover" },
        { key: "Mazda", value: "Mazda" },
        { key: "Ferrari", value: "Ferrari" },
        { key: "GMC", value: "GMC" },
        { key: "Aston Martin", value: "Aston Martin" }
    ];

    //populate array with years
    const yearData = [];
    for (let i = 2013; i > 1958; i--) {
        yearData.push({ key: i, value: i })
    }

    //data for some colors
    const colorData = [
        { key: 'Blue', value: 'Blue' },
        { key: 'Red', value: 'Red' },
        { key: 'Green', value: 'Green' },
        { key: 'Yellow', value: 'Yellow' },
        { key: 'Orange', value: 'Orange' },
        { key: 'Indigo', value: 'Indigo' },
        { key: 'Violet', value: 'Violet' },
        { key: 'Maroon', value: 'Maroon' },
        { key: 'Puce', value: 'Puce' },
        { key: 'Fuscia', value: 'Fuscia' },
        { key: 'Pink', value: 'Pink' },
        { key: 'Turquoise', value: 'Turquoise' },
        { key: 'Teal', value: 'Teal' },
        { key: 'Crimson', value: 'Crimson' },
        { key: 'Aquamarine', value: 'Aquamarine' },
        { key: 'Khaki', value: 'Khaki' },
        { key: 'Mauv', value: 'Mauv' },
    ];

    //fetch data from api in json, set cars to data in json, catch any errors, set loading to false
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => { setCars(json) })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    //change the visibility of the modal
    const changeModalVisible = (bool) => {
        setModalVisible(bool);
    }

    // in return, render our data from api
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {isLoading ? <ActivityIndicator /> :
                (<View>
                    <View style={styles.searchBar}>
                        <TextInput
                            style={styles.input}
                            value={searchTerm}
                            placeholder="Search for a car"
                            onChangeText={e => { setSearchTerm(e) }}
                        />
                        <Modal
                            transparent={true}
                            animationType='fade'
                            visible={isModalVisibile}
                            nRequestClose={() => changeModalVisible(false)}
                        >
                            <TouchableOpacity
                                disabled={true}
                                style={styles.modalContainer}
                            >
                                <SafeAreaView style={styles.modal}>
                                    <View>
                                        <Text style={styles.title}>Filters</Text>
                                    </View>
                                    <View style={styles.item}>
                                        <Text style={styles.subtitle}>Make</Text>
                                        <View>
                                            <SelectList
                                                boxStyles={styles.selector}
                                                dropdownStyles={styles.dropdown}
                                                data={makeData}
                                                setSelected={(val) => setSelected(val)}
                                                placeholder="Select make"
                                                save="value"
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.item}>
                                        <Text style={styles.subtitle}>Year</Text>
                                        <View>
                                            <SelectList
                                                boxStyles={styles.selector}
                                                dropdownStyles={styles.dropdown}
                                                data={yearData}
                                                setSelected={(val) => setSelected(val)}
                                                placeholder="Select Year"
                                                save="value"
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.item}>
                                        <Text style={styles.subtitle}>Color</Text>
                                        <View>
                                            <SelectList
                                                boxStyles={styles.selector}
                                                dropdownStyles={styles.dropdown}
                                                data={colorData}
                                                setSelected={(val) => setSelected(val)}
                                                placeholder="Select color"
                                                save="value"
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.bottomButtonView}>
                                        <TouchableOpacity
                                            style={styles.touchable}
                                            onPress={() => {
                                                setModalVisible(false)
                                                setSearchTerm(selected.toString())
                                            }}
                                        >
                                            <Text style={styles.applyButton}>Apply</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.touchable}
                                            onPress={() => {
                                                setModalVisible(false)
                                            }}
                                        >
                                            <Text style={styles.cancelButton}>Cancel</Text>
                                        </TouchableOpacity>
                                    </View>
                                </SafeAreaView>
                            </TouchableOpacity>
                        </Modal>
                        <Ionicons
                            name='list'
                            size={40}
                            color='#009688'
                            style={styles.filter}
                            onPress={() => setModalVisible(true)}
                        />
                    </View>
                    <FlatList
                        data={cars.cars}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => {
                            // if statement to allow users to search through car make, model, year, color, and availability
                            if (searchTerm == '' || item.car.toLowerCase().includes(searchTerm.toLowerCase()) || item.car_model.toLowerCase().includes(searchTerm.toLowerCase()) || item.car_model_year.toString().toLowerCase().includes(searchTerm.toLowerCase()) || item.car_color.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return <CarCard item={item} />
                            }
                        }}
                        contentContainerStyle={{ paddingBottom: 50 }}
                    />
                </View>
                )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        height: 35,
        width: 325,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 10,
        borderColor: '#009688',
        backgroundColor: 'white'
    },
    filter: {
        alignSelf: 'right',
        justifyContent: 'center',
        paddingRight: 20,
        paddingTop: 5
    },
    modal: {
        height: HEIGHT,
        width: WIDTH - 80,
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 100,
        padding: 20,
        overflow: 'hidden',

    },
    bottomButtonView: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    touchable: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
    },
    applyButton: {
        color: '#009688',
        fontSize: 18,
    },
    cancelButton: {
        color: '#009688',
        fontSize: 18,
    },
    title: {
        color: '#009688',
        fontWeight: 'bold',
        fontSize: 24,
        padding: 10
    },
    item: {
        marginBottom: 20
    },
    subtitle: {
        color: '#009688',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        padding: 10
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        overflow: 'hidden'
    },
    selector: {
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginHorizontal: 10
    },
    dropdown: {
        marginTop: 10,
        borderRadius: 5,
        marginHorizontal: 10,
        height: 140
    }
})
/* 
    const allCars = Object.values(cars);
    const [filteredCars, setFilteredCars] = useState([]);

    const applyFilters = () => {
        // Filter the list of cars using the selected filters
        let filteredCars = filterCars(allCars, make, color, year);

        // Update the state with the filtered list of cars
        setCars(filteredCars);

        // Set the filtersApplied state variable to true
        setFiltersApplied(true);

        // Close the modal
        setModalVisible(false);
    }

    const resetFilters = () => {
        // Reset the selected filters
        setMake([]);
        setColor([]);
        setYear([]);

        // Set the filtersApplied state variable to false
        setFiltersApplied(false);

        // Fetch the original list of cars
        //fetch(cars);
    }

    
function filterCars(allCars, make, color, year) {
    // Filter the list of cars by make, color, and year
    return allCars.filter(car => {
        let makeMatches = true;
        let colorMatches = true;
        let yearMatches = true;

        if (make.length > 0) {
            // Check if the car's make is in the list of selected makes
            makeMatches = make.includes(car.make);
        }
        if (color.length > 0) {
            // Check if the car's color is in the list of selected colors
            colorMatches = color.includes(car.color);
        }
        if (year.length > 0) {
            // Check if the car's year is in the list of selected years
            yearMatches = year.includes(car.year);
        }
        // Return true if the car matches all of the selected filters
        return makeMatches || colorMatches || yearMatches;
    });
}

useEffect(() => {
        const filter = filterCars(allCars, make, color, year);
        setFilteredCars(filter);
    }, [make, color, year]);

    modal:    
    paddingTop: 10,
        backgroundColor: 'white',
        borderRadius: 4,
*/