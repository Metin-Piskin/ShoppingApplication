import React, { FC } from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import { CategoriesProps } from '../../types';

import styles from './Categories-style';

const Categories: FC<CategoriesProps> = ({ onPress, image, title }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
        >
            <Image
                source={{ uri: image }}
                style={styles.image}
            />
            <Text
                style={styles.title}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Categories;