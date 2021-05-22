import React from 'react';
import { Text, View, Image, Pressable, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Rpost = (props) => {

    const post = props.post;

    //const navigation = useNavigation();

    const getImage = () => {
        if (post.id === '00234'){
            return require('../../assets/images/hondaCity.png')
        }
        if (post.id === '00426'){
            return require('../../assets/images/toyotaFortuner.png')
        }
        if (post.id === '00433'){
            return require('../../assets/images/mitsubishiMontero.png')
        }
        if (post.id === '00673'){
            return require('../../assets/images/toyotaInnova.png')
        }
        if (post.id === '03461'){
            return require('../../assets/images/nissanNV200.png')
        }
        if (post.id === '07921'){
            return require('../../assets/images/mazdaSport.png')
        }
    };

  return (
    <View>
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
                           {post.carName}
                        </Text>
                </View>

                <Image style={{
                    width: '100%',
                    height: 200,
                    aspectRatio: 3/2,
                    resizeMode: 'center',
                    borderRadius: 10,

                }}
                    source={getImage()}
                />

                <View style={{
                    flexDirection: 'row',
                    height: 30,
                    width: '100%',
                    justifyContent: 'space-between',
                    paddingLeft: 10,
                    paddingRight: 10,
                    backgroundColor: 'pink',
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}>
                        <MaterialCommunityIcons name={'car-seat'} size={24} color={'#dc143c'}/>
                        {post.capacity}
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
                        {post.transmission}
                    </Text>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginLeft: 10,
                    }}>
                        <MaterialIcons name={'device-thermostat'} size={24} color={'#dc143c'}/>
                        {post.aircon}
                    </Text>   
                </View>

                <Text style={{
                    fontSize: 18,
                    fontWeight: '100',
                    marginLeft: 10,
                }}>
                    <MaterialCommunityIcons name={'highway'} size={24} color={'#dc143c'}/>
                    {''}+ ₱200 / km after 50km

                </Text>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginLeft: 10,
                    marginBottom: 10,
                }}>
                    <MaterialCommunityIcons name={'currency-php'} size={24} color={'#dc143c'}/>
                    {post.price}.00 / day

                </Text>
               

            </Pressable>
        </View>
{/*=================================================================== */}
    </View>
  );
};
export default Rpost;