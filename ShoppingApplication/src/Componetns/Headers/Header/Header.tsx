import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { HeaderProps } from '../../../types';

import styles from './Header-style';

const Header: FC<HeaderProps> = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
        </View >
    )
}

export default Header;