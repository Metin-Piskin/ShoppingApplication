import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, Image, ScrollView } from 'react-native';
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import UserAbout from '../../Componetns/UserAbout';
import SearchInput from '../../Componetns/SearchInput';
import OrderKKDetail from '../../Componetns/OrderKKDetail';
import OrderSituation from '../../Componetns/OrderSituation';

import styles from './Basket-style';
import OrderData from '../../Data/OrderData.json';

const Basket = () => {
    const [status, setStatus] = useState<string>('Tümü');
    const [modal, setModal] = useState<boolean>(false);
    const [CurrentLoggedInUser, setCurrentLoggedInUser] = useState<any>(true)
    const [loading, setLoading] = useState<any>(true);

    useEffect(() => {
        const user = auth().currentUser
        firestore()
            .collection('users')
            .where('owner_uid', '==', user?.uid)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    setCurrentLoggedInUser(documentSnapshot.data());
                });
            });
        if (!!CurrentLoggedInUser) {
            setLoading(false);
        }
    }, [])

    const handlefilter = (status: string, value: string) => {
        setStatus(status);
    }

    return (
        <ScrollView>
            <UserAbout
                EditPress={() => null}
                ExitPress={() => auth().signOut()}
                item={CurrentLoggedInUser}
            />
            <SearchInput
                onChangeText={null}
                ModalOpenPress={() => setModal(true)}
                disabled={modal === true && true}
            />
            <View style={styles.tabbarcontaier}>
                {
                    TabBarList.map((e) => (
                        <TouchableOpacity
                            style={[styles.tabbarbtnNormal, status === e.status && styles.tabbarbtnPress]}
                            onPress={() => handlefilter(e.status, e.value)}
                            key={e.id}
                        >
                            <Text style={[styles.tabbartextNormal, status === e.status && styles.tabbartextPress]}>
                                {e.status}
                            </Text>
                        </TouchableOpacity>

                    ))
                }
            </View>

            {
                OrderData.map((e, index) => {
                    const [ordermodal, setOrdermodal] = useState<boolean>(false);
                    const totalprice = e.siparişler.map(e => e.price);
                    return (
                        <View key={index}>
                            <TouchableOpacity
                                style={styles.Ordercontainer}
                                onPress={() => setOrdermodal(ordermodal ? false : true)}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        gap: 3,
                                        maxWidth: 100,
                                        maxHeight: 100,
                                        alignContent: 'center',
                                        marginVertical: 5
                                    }}
                                >
                                    {
                                        e.siparişler.map((e, index) => {
                                            {
                                                return (
                                                    index > 3 ? (
                                                        <View></View>
                                                    ) : (
                                                        <Image
                                                            source={{ uri: e.image }}
                                                            style={{
                                                                width: 40,
                                                                height: 40,
                                                                resizeMode: 'contain'
                                                            }}
                                                        />
                                                    )
                                                )
                                            }

                                        })
                                    }
                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <Text>{e.titledate}</Text>
                                    <Text>Toplam {e.siparişler.length} Sipariş</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text>{totalprice.reduce((a, b) => a + b, 0)} TL </Text>
                                    {
                                        ordermodal ? (
                                            <FontAwesome5
                                                name='angle-down'
                                                size={18}
                                            />
                                        ) : (
                                            <FontAwesome5
                                                name='angle-right'
                                                size={18}
                                            />
                                        )
                                    }
                                </View>
                            </TouchableOpacity>
                            {
                                ordermodal ? (
                                    <View style={styles.OrderModalcontainer}>
                                        <OrderKKDetail />
                                        <OrderSituation Durum={e.durum} />
                                        {
                                            e.siparişler.map(e => {
                                                return (
                                                    <View style={styles.siparişcontainer}>
                                                        <Image
                                                            source={{ uri: e.image }}
                                                            style={styles.siparişimage}
                                                        />
                                                        <View>
                                                            <Text>{e.title}</Text>
                                                            <Text>{e.categori}</Text>
                                                            <Text>{e.puan}</Text>
                                                        </View>
                                                        <Text>{e.price} TL</Text>
                                                    </View>
                                                )
                                            })
                                        }
                                    </View>
                                ) : (
                                    <></>
                                )
                            }
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

export default Basket;

const TabBarList = [
    {
        id: 1,
        "status": "Tümü",
        "value": "Tümü",
    },
    {
        id: 2,
        "status": "İptallerim",
        "value": "İptal Edildi",
    },
    {
        id: 3,
        "status": "İadelerim",
        "value": "İade Edildi",
    }
]