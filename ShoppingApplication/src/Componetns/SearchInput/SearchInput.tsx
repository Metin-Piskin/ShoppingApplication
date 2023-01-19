import React, { FC } from 'react';
import { TextInput } from 'react-native';
import { SearchInputProps } from '../../types';

import styles from './SearchInput-style';

const SearchInput: FC<SearchInputProps> = ({ onChangeText }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder=' Search'
            placeholderTextColor={'#ffff'}
            onChangeText={onChangeText}
        />
    )
}

export default SearchInput;