import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import UserAbout from '../../Componetns/UserAbout';
import SearchInput from '../../Componetns/SearchInput';

import styles from './Basket-style';

const Basket = () => {
    const [modal, setModal] = useState<boolean>(false);
    const [status, setStatus] = useState<string>('Tümü');

    const handlefilter = (status: string, value: string) => {
        setStatus(status);
    }

    return (
        <View>
            <UserAbout
                EditPress={() => null}
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