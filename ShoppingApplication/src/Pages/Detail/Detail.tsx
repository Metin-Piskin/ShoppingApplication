import React from 'react'
import { View, Text } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../types'

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const Detail = () => {
    const route = useRoute<DetailsScreenRouteProp>();
    const { name } = route.params;
    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}

export default Detail