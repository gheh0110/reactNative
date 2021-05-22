import React from 'react';
import { Text, View, Image, ImageBackground, Pressable, Dimensions } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'


const HomeScreen = (props) => {
    const navigation = useNavigation();

  return (
    <View>
        <Pressable
            style={{
                backgroundColor: '#f0f0f0',
                width: Dimensions.get('screen').width - 50,
                height: 50,
                borderRadius: 25,
                flexDirection: 'row',
                marginLeft: 25,
                marginRight: 25,
                marginBottom: 20,
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 50,
                zIndex: 100,
                elevation: 100,
                }}
            onPress={() => navigation.navigate('SearchOption')}>
            <Ionicons name={'md-search-sharp'} size={20} color={'#006161'}/>
            <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                }}
            >
                Search
            </Text>

            </Pressable>
        <ImageBackground
            style={{
            height: hp('85%'),
            width: wp('100%'),
            backgroundColor: '#5cffff',
            resizeMode: 'cover',
            justifyContent: 'center',
            }}
            source={require('../../assets/images/homeBackground.png')}>
            <Pressable
                style={{
                    backgroundColor: 'white',
                    width: 200,
                    height: 40,
                    borderRadius: 10,
                    marginTop: 250,
                    marginLeft: 25,
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
                onPress={() => console.warn('Button Clicked')}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',

                }}>
                    Explore
                </Text>

            </Pressable>
        </ImageBackground>

{/*=================================================================== */}
        <View>

        </View>
{/*=================================================================== */}
    </View>
  );
};
export default HomeScreen;