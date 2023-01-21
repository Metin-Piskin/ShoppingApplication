import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { DetailComponetProps } from '../../types';

const DetailComponet: FC<DetailComponetProps> = ({ prop }) => {
    return (
        <View>
            <Text>{prop.title}</Text>
            <Text>{prop.categori}</Text>
            <Text>{prop.price}₺</Text>
            <Text>{prop.image}</Text>
        </View>
    )
}

export default DetailComponet