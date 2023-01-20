import { View, Text } from 'react-native'
import React from 'react'

type Props = {}

import BasketHeader from '../../Componetns/Headers/Header'

const Basket = (props: Props) => {
    return (
        <View>
            <BasketHeader title='Basket'/>
            <Text>Basket</Text>
        </View>
    )
}

export default Basket