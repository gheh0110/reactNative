import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import CarSearchResults from '../../screens/SearchResults/CarSearchResults';
import HomeTabNavigator from '../HomeTabNavigation';
import CarFilter from '../../screens/Filter/CarFilter';
import SearchOption from '../../screens/SearchOption';
import CarLocationSearch from '../../screens/LocationSearch/CarLocationSearch';
//import RentalPostDetails from '../screens/RentalPostDetails';
//import RentalDetailedPost from '../components/RentalDetailedPost';

const Stack = createStackNavigator();

const Router = (props) => {

    return (

        
        <NavigationContainer>
            <Stack.Navigator>

            <Stack.Screen
                    name={'Home'}
                    component={HomeTabNavigator}
                    options={{
                        headerShown: false,
                    }}

                />

                <Stack.Screen
                    name={'SearchOption'}
                    component={SearchOption}
                    options={{
                        title: 'What are you looking?'
                    }}

                />

                <Stack.Screen
                    name={'CarLocationSearch'}
                    component={CarLocationSearch}
                    options={{
                        title: 'Search your desired location.'
                    }}

                />

                <Stack.Screen
                    name={'CarFilter'}
                    component={CarFilter}
                    options={{
                        title: 'Select your preferences'
                    }}

                />
                <Stack.Screen
                    name={'CarSearchResults'}
                    component={CarSearchResults}
                    options={{
                        title: 'Results'
                    }}

                />
    
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;