import React, { FC } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { UserAboutProps } from '../../types';

import styles from './UserAbout-style';

const UserAbout: FC<UserAboutProps> = ({ EditPress }) => {
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
                source={{ uri: 'https://avatars.githubusercontent.com/u/85956297?v=4' }}
                style={styles.image}
            />
            <View style={styles.innercontainer}>
                <View style={styles.innercontainers}>
                    <Text style={styles.titletext}>
                        Name Surname:
                    </Text>
                    <Text style={styles.text}>
                        Metin Pişkin
                    </Text>
                </View>
                <View style={styles.innercontainers}>
                    <Text style={styles.titletext}>
                        Phone:
                    </Text>
                    <Text style={styles.text}>
                        05356477957
                    </Text>
                </View>
                <View style={styles.innercontainers}>
                    <Text style={styles.titletext}>
                        E-mail:
                    </Text>
                    <Text style={styles.text}>
                        metin@mail.com
                    </Text>
                </View>
                <View style={styles.innercontainers}>
                    <Text style={styles.titletext}>
                        Pasword:
                    </Text>
                    <Text style={styles.text}>
                        ********
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default UserAbout;