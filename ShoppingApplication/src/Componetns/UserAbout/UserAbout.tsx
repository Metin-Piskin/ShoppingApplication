import React, { FC } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { UserAboutProps } from '../../types';

import styles from './UserAbout-style';

const ppimage = 'https://t4.ftcdn.net/jpg/01/17/95/91/360_F_117959178_mOp22kjhdhWdoSoePHPafN7GLUYyvFNY.jpg'

const UserAbout: FC<UserAboutProps> = ({ EditPress, item }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={EditPress}
                style={styles.editbutton}
            >
                <Feather
                    name='edit'
                    color={'#232F34'}
                    size={22}
                />
            </TouchableOpacity>
            <Image
                source={{
                    uri: item == null ? (ppimage) : (item.profile_picture)
                }}
                style={styles.image}
            />
            <View style={styles.innercontainer}>
                <View style={styles.innercontainers}>
                    <Text style={styles.titletext}>
                        Name Surname:
                    </Text>
                    <Text style={styles.text}>
                        {item.name} {item.surname}
                    </Text>
                </View>
                <View style={styles.innercontainers}>
                    <Text style={styles.titletext}>
                        Phone:
                    </Text>
                    <Text style={styles.text}>
                        {item.phone}
                    </Text>
                </View>
                <View style={styles.innercontainers}>
                    <Text style={styles.titletext}>
                        E-mail:
                    </Text>
                    <Text style={styles.text}>
                        {item.email}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default UserAbout;