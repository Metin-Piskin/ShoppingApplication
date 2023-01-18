import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface IButtonProps {
    title: string;
    onPress: () => void;
}

const Button: FC<IButtonProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <Text>{title}</Text>
        </TouchableOpacity >
    )
}

export default Button;