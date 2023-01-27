import React, { FC } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ProductCardProps } from '../../types';

import styles from './ProductCard-style';

const ProductCard: FC<ProductCardProps> = ({ onPress, item }) => {
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
            <View style={styles.puancontainer}>
                <AntDesign
                    name='star'
                />
                <Text style={styles.puantext}>
                    {item.puan}/5
                </Text>
            </View>
            <Text style={styles.price}>
                {item.price}₺
            </Text>
        </TouchableOpacity>
    )
}

export default ProductCard;