import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//import HomeScreen from '../screens/HomeScreen';
import CarSearchResults from '../../screens/SearchResults/CarSearchResults';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
//import SearchResultsMap from '../screens/SearchResultsMap';
//import CarLocationSearch from '../../screens/LocationSearch/CarLocationSearch';

const Tab = createMaterialTopTabNavigator();

const CarSearchResultsNavigator = (props) =>{
    return(
        <Tab.Navigator tabBarOptions={{
            activeTintColor: 'red',
            indicatorStyle: {
                backgroundColor: 'red',
            }
        }}>
            <Tab.Screen name={'list'} component = {CarSearchResults}/>
        </Tab.Navigator>
    );
};

export default CarSearchResultsNavigator;