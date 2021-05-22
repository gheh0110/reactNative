import React from 'react';
import { Text, View, Image, ImageBackground, Pressable, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Rpost = (props) => {
  return (
    <View style={{        
        height: hp('100%'),
        width: wp('100%'),
    }}>
        <View style={{
            margin: 20,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#dc143c',
        }}>
            <Pressable>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: 'black',
                            marginLeft: 10,
                        }}>
                            Honda City
                        </Text>
                </View>

                <Image style={{
                    width: '100%',
                    height: 200,
                    aspectRatio: 3/2,
                    resizeMode: 'center',
                    borderRadius: 10,

                }}
                    source={require('../../assets/images/hondaCity.png')}
                />

                <View style={{
                    flexDirection: 'row',
                    height: 30,
                    width: '100%',
                    justifyContent: 'space-between',
                    paddingLeft: 10,
                    paddingRight: 10,
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}>
                        <MaterialCommunityIcons name={'car-seat'} size={24} color={'#dc143c'}/>
                        8
                    </Text>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginLeft: 10,
                    }}>
                        <MaterialCommunityIcons name={'gas-station'} size={24} color={'#dc143c'}/>
                        20MPG
                    </Text>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginLeft: 10,
                    }}>
                        <MaterialCommunityIcons name={'car-shift-pattern'} size={24} color={'#dc143c'}/>
                        Automatic
                    </Text>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginLeft: 10,
                    }}>
                        <MaterialIcons name={'device-thermostat'} size={24} color={'#dc143c'}/>
                        Yes
                    </Text>   
                </View>

                <Text style={{
                    fontSize: 18,
                    fontWeight: '100',
                    marginLeft: 10,
                }}>
                    <MaterialCommunityIcons name={'highway'} size={24} color={'#dc143c'}/>
                    {''}+ ₱100 / km after 50km

                </Text>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginLeft: 10,
                    marginBottom: 10,
                }}>
                    <MaterialCommunityIcons name={'currency-php'} size={24} color={'#dc143c'}/>
                    2500.00 / day

                </Text>
               

            </Pressable>
        </View>
{/*=================================================================== */}
    </View>
  );
};
export default Rpost;