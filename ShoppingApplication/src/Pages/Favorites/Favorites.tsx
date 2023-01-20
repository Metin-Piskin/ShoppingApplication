import { View, Text } from 'react-native'
import React from 'react'

type Props = {}
import FavoritesHeader from '../../Componetns/Headers/Header'

const Favorites = (props: Props) => {
    return (
        <View>
            <FavoritesHeader title='Favorites'/>
            <Text>Favorites</Text>
        </View>
    )
}

export default Favorites