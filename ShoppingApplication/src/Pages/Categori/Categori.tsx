import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

type CategoriScreenRouteProp = RouteProp<RootStackParamList, 'Categori'>;
type CategoriScreenProps = NativeStackNavigationProp<RootStackParamList, 'Categori'>;

import styles from './Categori-style';
import CategoriHeader from '../../Componetns/Headers/HeaderBack';
import ProductCard from '../../Componetns/ProductCard';
import Data from '../../Data/Data.json';

const Categori = () => {
    const [veri, setVeri] = useState(Data);
    const route = useRoute<CategoriScreenRouteProp>();
    const navigation = useNavigation<CategoriScreenProps>();
    const { item } = route.params;

    useEffect(() => {
        setVeri([...Data.filter(e => e.categori === item.title)])
    }, [])


    return (
        <View>
            <CategoriHeader
                title={item.title}
                onPress={() => navigation.goBack()}
            />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    veri.map((item) => {
                        return (
                            <ProductCard
                                onPress={() => navigation.navigate('Detail', { Citem: item })}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                key={item.id}
                            />
                        )
                    })
                }
            </View>
        </View>
    )
}

export default Categori;