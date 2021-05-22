import React, { useState } from 'react';
import { View, TextInput, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const CarLocationSearch = (props) => {

    const navigation = useNavigation();
    
    return(

        <ImageBackground style={{
            height: hp('100%'),
            width: wp('100%'),
            backgroundColor: '#5cffff',
            resizeMode: 'center',
            justifyContent: 'center',
            }}
            source={require('../../assets/images/map.jpg')}>
            <View style={{
                height: 600,
                margin: 20, }}>
                <GooglePlacesAutocomplete
                        placeholder='Search Location'
                        onPress={(data = {GooglePlaceData}, details = {GooglePlaceDetail} = null) => {
                            // 'details' is provided when fetchDetails = true
                            console.log(data, details);
                            navigation.navigate('CarFilter')
                        }}
                        fetchDetails
                        styles={{
                            textInput: {
                                fontSize: 20,
                                marginBottom: 15,
                                borderColor: 'lightgrey',
                            },
                        }}

                        query={{
                            key: 'AIzaSyD6hl1nh-mG9scBryWnwx0F0kXiSShqXHQ',
                            language: 'en',
                            types: '(cities)',
                        }}
                        
                        
                        />
            </View>
            </ImageBackground>



    );
};

export default CarLocationSearch;