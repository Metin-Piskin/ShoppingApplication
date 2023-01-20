import React, { FC } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { ProductCardProps } from '../../types';

import styles from './ProductCard-style';

const ProductCard: FC<ProductCardProps> = ({ image, onPress, price, title }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
        >
            <Image
                source={{ uri: image }}
                style={styles.image}
            />
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.price}>
                {price}
            </Text>
        </TouchableOpacity>
    )
}

export default ProductCard;