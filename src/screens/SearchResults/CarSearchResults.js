import React from 'react';
import { View, FlatList } from 'react-native';
import CarInformation from '../../assets/data/CarInformation';
import Rpost from '../../components/Rpost';

const CarSearchResults = (props) => {
    
    return(
        <View>
            <FlatList
                data={CarInformation}
                renderItem={({item}) => <Rpost post={item}/>}
            />
        </View>

    );
};

export default CarSearchResults;