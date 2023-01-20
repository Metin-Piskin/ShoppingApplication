import React from 'react';
import { View, StatusBar, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types'

type HomeScreenProps = NativeStackNavigationProp<RootStackParamList, 'TabBar'>;

import HomeHeader from '../../Componetns/Headers/Header';
import CampaignThumbnail from '../../Componetns/CampaignThumbnail';
import Categories from '../../Componetns/Categories';
import AboutUs from '../../Componetns/AboutUs';

import CategoriData from '../../Data/CategoriData.json';

import styles from './Home-style';

const Home = () => {
    const navigation = useNavigation<HomeScreenProps>();

    return (
        <ScrollView>
            <StatusBar backgroundColor={'#4A6572'} />
            <HomeHeader title='Shopping' />
            <CampaignThumbnail
                onPress={() => null}
            />
            <Text style={styles.categoriesbartext}>
                Categories
            </Text>
            <View style={styles.categoriescontainer}>
                {
                    CategoriData.map((item) => {
                        return (
                            <Categories
                                title={item.title}
                                image={item.image}
                                onPress={() => navigation.navigate('Categori', { item: item })}
                                key={item.id}
                            />
                        )
                    })
                }
            </View>
            <AboutUs />
        </ScrollView>
    )
}

export default Home;