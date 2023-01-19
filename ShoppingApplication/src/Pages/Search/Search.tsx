import React, { useState } from 'react';
import { View, Text } from 'react-native';

import styles from './Search-style';
import SearchInput from '../../Componetns/SearchInput';
import ProductCard from '../../Componetns/ProductCard';

const Search = () => {
    const [text, setText] = useState<any>();

    return (
        <View>
            <SearchInput
                onChangeText={setText}
            />
            <ProductCard />
        </View>
    )
}

export default Search;