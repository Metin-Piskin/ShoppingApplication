import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';

import UserAbout from '../../Componetns/UserAbout';
import SearchInput from '../../Componetns/SearchInput';

import styles from './Basket-style';

const Basket = () => {
    const [modal, setModal] = useState<boolean>(false);
    const [status, setStatus] = useState<string>('Tümü');

    const handlefilter = (status: string, value: string) => {
        setStatus(status);
    }

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

    return (
        <View>
            <UserAbout
                EditPress={() => null}
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
            <Button
                title='Exit'
                onPress={() => auth().signOut()}
            />
        </View>
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