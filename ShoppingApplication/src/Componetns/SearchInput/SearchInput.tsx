import React, { FC } from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

import { SearchInputProps } from '../../types';

import styles from './SearchInput-style';

const SearchInput: FC<SearchInputProps> = ({ onChangeText, ModalOpenPress, disabled }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputcontainer}>
                <Octicons
                    name='search'
                    color={"#fff"}
                    size={18}
                    style={styles.inputicon}
                />
                <TextInput
                    style={styles.input}
                    placeholder=' Search'
                    placeholderTextColor={'#ffff'}
                    onChangeText={onChangeText}
                />
            </View>
            <TouchableOpacity
                style={styles.buttoncontainer}
                onPress={ModalOpenPress}
                disabled={disabled}
            >
                <Octicons
                    name='sort-desc'
                    color={disabled === true ? "#F9AA33" : "#fff"}
                    size={18}
                />
            </TouchableOpacity>
        </View>
    )
}

export default SearchInput;