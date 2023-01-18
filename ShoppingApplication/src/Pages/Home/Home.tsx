import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types'

type HomeScreenProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

import Header from '../../Componetns/Header';
import CampaignThumbnail from '../../Componetns/CampaignThumbnail';
import Categories from '../../Componetns/Categories';

import Button from '../../Componetns/Button';

const Home = () => {
    const navigation = useNavigation<HomeScreenProps>();

    return (
        <View>
            <StatusBar backgroundColor={'#F9AA33'} />
            <Header />
            <CampaignThumbnail
                onPress={() => null}
            />
            <Text>kategori</Text>
            <Categories />
            <Button
                title="Detail Next"
                onPress={() => navigation.navigate('Detail', { name: 'metin' })}
            />
        </View>
    )
}

export default Home;