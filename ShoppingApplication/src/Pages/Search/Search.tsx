import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

type SearchScreenProps = NativeStackNavigationProp<RootStackParamList>;

import styles from './Search-style';
import SearchHeader from '../../Componetns/Headers/Header';
import SearchInput from '../../Componetns/SearchInput';
import ProductCard from '../../Componetns/ProductCard';
import Data from '../../Data/Data.json';

const Search = () => {
    const [products, setProducts] = useState(Data);
    const navigation = useNavigation<SearchScreenProps>();

    const quickSearch = (text: string) => {
        const filteredList = Data.filter(product => {
            const searchedText = text.toLowerCase();
            const currentTitle = product.title.toLowerCase();
            return currentTitle.indexOf(searchedText) > -1;
        });
        setProducts(filteredList);
    };
    return (
        <View>
            <SearchHeader title='Search'/>
            <SearchInput
                onChangeText={quickSearch}
            />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    products.map((item) => {
                        return (
                            <ProductCard
                                onPress={() => navigation.navigate('Detail', { Sitem: item })}
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

export default Search;