import React from 'react';
import { View, Text } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../types'

type CategoriScreenRouteProp = RouteProp<RootStackParamList, 'Categori'>;

import styles from './Categori-style';
import ProductCard from '../../Componetns/ProductCard';

const Categori = () => {
    const route = useRoute<CategoriScreenRouteProp>();
    const { item } = route.params;

    return (
        <View>
            <Text>{item.title}</Text>
            <ProductCard />
        </View>
    )
}

export default Categori;