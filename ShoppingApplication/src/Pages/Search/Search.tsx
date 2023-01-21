import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { RootStackParamList } from '../../types';

type SearchScreenProps = NativeStackNavigationProp<RootStackParamList>;

import styles from './Search-style';
import SearchHeader from '../../Componetns/Headers/Header';
import SearchInput from '../../Componetns/SearchInput';
import ProductCard from '../../Componetns/ProductCard';
import Data from '../../Data/Data.json';

const Search = () => {
    const [products, setProducts] = useState(Data);
    const navigation = useNavigation<SearchScreenProps>();
    const [siralaStatus, setSiralaStatus] = useState<string>('Varsayılan');
    const [modal, setModal] = useState<boolean>(false);

    const quickSearch = (text: string) => {
        const filteredList = Data.filter(product => {
            const searchedText = text.toLowerCase();
            const currentTitle = product.title.toLowerCase();
            return currentTitle.indexOf(searchedText) > -1;
        });
        setProducts(filteredList);
    };

    const setStatusFilter = (status: any) => {
        const VarsayılanfilteredList = [...Data].sort((a, b) => a.id - b.id); //Varsayılan
        const EnÇokPuanfilteredList = [...Data].sort((a, b) => b.puan - a.puan); //En Çok Puan
        const ArtanFiyatfilteredList = [...Data].sort((a, b) => a.price - b.price); //Artan Fiyat
        const AzalanFiyatfilteredList = [...Data].sort((a, b) => b.price - a.price);//Azalan Fiyat
        const AlfabetikSıralafilteredList = [...Data].sort((a, b) => a.title > b.title ? 1 : -1,);// Alfabetik Sırala

        {
            status === 'Varsayılan' &&
                setProducts(VarsayılanfilteredList);
        }
        {
            status === 'En Çok Puan' &&
                setProducts(EnÇokPuanfilteredList);
        }
        {
            status === 'Artan Fiyat' &&
                setProducts(ArtanFiyatfilteredList);
        }
        {
            status === 'Azalan Fiyat' &&
                setProducts(AzalanFiyatfilteredList);
        }
        {
            status === 'Alfabetik Sırala' &&
                setProducts(AlfabetikSıralafilteredList);
        }
        setSiralaStatus(status)
    }

    return (
        <View>
            <SearchHeader title='Search' />
            <View>
                <SearchInput
                    onChangeText={quickSearch}
                    ModalOpenPress={() => setModal(true)}
                    disabled={modal === true && true}
                />
                {
                    modal &&
                    <View style={styles.modalcontainer}>
                        <View style={styles.modalheadercontainer}>
                            <Text style={styles.modalheadertext}>Arrangement</Text>
                            <TouchableOpacity
                                style={styles.modalclosebuttoncontainer}
                                onPress={() => setModal(false)}
                            >
                                <EvilIcons
                                    name='close-o'
                                    color={'#FF9600'}
                                    size={28}
                                />
                            </TouchableOpacity>
                        </View>
                        {
                            ModalİtemList.map((e) => {
                                return (
                                    <TouchableOpacity
                                        style={styles.modalitemcontainer}
                                        onPress={() => setStatusFilter(e.status)}
                                        key={e.id}
                                    >
                                        <View style={[styles.btnNormal, siralaStatus === e.status && styles.btnPress]}>
                                            <Entypo
                                                name='check'
                                                color={'#fff'}
                                            />
                                        </View>
                                        <Text style={styles.text}>
                                            {e.status}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })
                        }

                    </View>
                }

            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', zIndex: -5 }}>
                {
                    products.map((item) => {
                        return (
                            <ProductCard
                                onPress={() => navigation.navigate('Detail', { Sitem: item })}
                                item={item}
                                key={item.id}
                            />
                        )
                    })
                }
            </View>
        </View>
    )
}

export default Search;

const ModalİtemList = [
    {
        id: 1,
        "status": "Varsayılan"
    },
    {
        id: 2,
        "status": 'En Çok Puan'
    },
    {
        id: 3,
        "status": "Artan Fiyat"
    },
    {
        id: 4,
        "status": "Azalan Fiyat"
    },
    {
        id: 5,
        "status": "Alfabetik Sırala"
    }
]