import React, { useState } from 'react';
import { View, Image, Text, Pressable} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {useNavigation} from '@react-navigation/native';

const CarFilter = (props) => {
    const [capacity, setCapacity] = useState(initialState=0);
    const [mileage, setMileage] = useState(initialState=0);
    const navigation = useNavigation();

        

    
    return(
        <View style={{
            height: hp('100%'),
            width: wp('100%'),
            }}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{
                        marginTop: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#5cffff',
                        padding: 10,
                        height: 120,
                        width: 120,
                        borderRadius: 300,
                }}>
                    <Image 
                        style={{
                            height: 100,
                            width: 100,

                            resizeMode: 'center',
                        }}
                        source={require('../../assets/images/rent_a_car.png')}
                    />
                </View>              
            </View>

        <View style={{justifyContent: 'space-between', height: '100%'}}>
            <View>
            <View style={{
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    paddingVertical: 20,
                    marginHorizontal: 20,
                    borderBottomWidth: 1,
                    borderColor: 'lightgrey',
                    }}>
                    <View style={{marginTop: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Car Capacity</Text>
                        <Text style={{color: '#a3a3a3'}}>Total passenger.</Text>
                        
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Pressable
                            onPress={() => setCapacity(Math.max( 0, capacity - 1))}
                            style={{
                                borderWidth: 1,
                                borderRadius: 15,
                                width: 30,
                                height: 30,
                                margin: 20,
                                borderColor: '#2e2e2e',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        > 
                            <Text style={{fontSize: 20, color: '#5c5c5c'}}>-</Text>
                        </Pressable>

                        <Text style={{marginHorizontal: 20, fontSize: 18}}>{capacity}</Text>

                        <Pressable
                            onPress={() => setCapacity(capacity + 1)}
                            style={{
                                borderWidth: 1,
                                borderRadius: 15,
                                width: 30,
                                height: 30,
                                margin: 20,
                                borderColor: '#2e2e2e',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Text style={{fontSize: 20, color: '#5c5c5c'}}>+</Text>
                        </Pressable>
                    </View>

                </View>
                <View style={{
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    paddingVertical: 20,
                    marginHorizontal: 20,
                    borderBottomWidth: 1,
                    borderColor: 'lightgrey',
                    }}>
                    <View style={{marginTop: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Car Mileage</Text>
                        <Text style={{color: '#a3a3a3'}}>Choose mileage.</Text>
                        
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Pressable
                            onPress={() => setMileage(Math.max( 0, mileage - 5000))}
                            style={{
                                borderWidth: 1,
                                borderRadius: 15,
                                width: 30,
                                height: 30,
                                margin: 20,
                                borderColor: '#2e2e2e',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        > 
                            <Text style={{fontSize: 20, color: '#5c5c5c'}}>-</Text>
                        </Pressable>

                        <Text style={{marginHorizontal: 20, fontSize: 18}}>{mileage}</Text>

                        <Pressable
                            onPress={() => setMileage(mileage + 5000)}
                            style={{
                                borderWidth: 1,
                                borderRadius: 15,
                                width: 30,
                                height: 30,
                                margin: 20,
                                borderColor: '#2e2e2e',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Text style={{fontSize: 20, color: '#5c5c5c'}}>+</Text>
                        </Pressable>
                    </View>

                </View>
                <View>
                    <Pressable
                        onPress={() => 
                            navigation.navigate('Home',{
                                screen: 'Map',
                                params:{
                                    screen: 'CarSearchResults',
                                },
                            })
                        }
                        style={{
                            marginBottom: 20,
                            backgroundColor: '#ff1f1f',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 50,
                            marginHorizontal: 20,
                            borderRadius: 10,

                        }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: 'white',
                        }}>Search</Text>

                    </Pressable>
                </View>
            </View>

        </View>
</View>
    );
};

export default CarFilter;