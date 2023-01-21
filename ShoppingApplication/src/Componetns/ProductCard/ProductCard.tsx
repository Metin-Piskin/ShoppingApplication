import React, { FC } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { ProductCardProps } from '../../types';

import styles from './ProductCard-style';

const ProductCard: FC<ProductCardProps> = ({ onPress, item}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
        >
            <Image
                source={{ uri: item.image }}
                style={styles.image}
            />
            <Text style={styles.title}>
                {item.title}
            </Text>
            <Text style={styles.price}>
                {item.price}₺
            </Text>
            <Text style={styles.price}>
                {item.puan}/5
            </Text>
        </TouchableOpacity>
    )
}

export default ProductCard;