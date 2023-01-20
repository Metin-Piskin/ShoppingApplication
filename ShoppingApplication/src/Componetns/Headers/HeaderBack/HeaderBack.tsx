import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HeaderBackProps } from '../../../types';

import styles from './HeaderBack-style';

const HeaderBack: FC<HeaderBackProps> = ({ title, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPress}
                style={styles.backcontainer}
            >
                <Ionicons
                    name='arrow-back'
                    size={28}
                    color={"#F9AA33"}
                />
            </TouchableOpacity>
            <Text style={styles.title}>
                {title}
            </Text>
            <View></View>
        </View >
    )
}

export default HeaderBack