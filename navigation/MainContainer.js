import * as React from 'react';

//imports for navigation bar
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { createDrawerNavigator } from '@react-navigation/drawer';
//imports for screens
import HomePage from './screens/HomePage';
import SearchPage from './screens/SearchPage';
import Settings from './screens/Settings';
import FilterDrawer from './screens/components/FilterDrawer.js'

// variables for holding the names of different variables
const homeName = 'Home'
const searchName = 'Search'
const settingsName = 'Settings'
const filterName = 'Filter'

const tab = createBottomTabNavigator();

//const drawer = createDrawerNavigator();

/*function DrawerRoutes() {
    return(
        <DrawerRoutes.Navigator>
            <DrawerRoutes.screen name='Filter' component={FilterDrawer}/>
        </DrawerRoutes.Navigator>
    )
}*/
export default function MainContainer(){
    return(
        <NavigationContainer>
            <tab.Navigator 
                initialRouteName = {homeName} //initial render and route is set to homeName
                screenOptions={({route}) => ({
                    
                    //styling for tab bar 
                    tabBarActiveTintColor: '#009688',
                    tabBarInactiveTintColor: 'grey',
                    style: {padding: 10, height: 70},
                    labelStyle: { paddingBottom: 10, fontSize: 10},

                    //handling what to do stylistically when a tab bar is selected
                    tabBarIcon: ({focused,color,size}) => {
                        let iconName;
                        let routeName = route.name; 

                        //if else for app to know which icon has been selected and needs to be focused - if not focues, just outline of icon is needed
                        if(routeName === homeName){
                            iconName = focused ? 'home' : 'home-outline'
                        }else if(routeName === searchName){
                            iconName = focused ? 'search' : 'search-outline'
                        }else if(routeName == settingsName){
                            iconName = focused ? 'settings' : 'settings-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>// return appropriate icon
                    },
                })}>
                <tab.Screen 
                    name={homeName} component={HomePage} //set screen to home page
                />
                <tab.Screen 
                    name={searchName} component={SearchPage} //set screen to search page
                />
                <tab.Screen 
                    name={settingsName} component={Settings} //set screen to settings page
                />
            </tab.Navigator>
        </NavigationContainer>
    )
}
/*                <drawer.Navigator initialRouteName={homeName}>
                    <drawer.Screen 
                        name={filterName} component={FilterDrawer}
                    />
                </drawer.Navigator>*/