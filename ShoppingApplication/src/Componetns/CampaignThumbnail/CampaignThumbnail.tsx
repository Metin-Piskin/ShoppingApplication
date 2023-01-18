import React, { FC } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { CampaignThumbnailProps } from '../../types';

import styles from './CampaignThumbnail-styles';

const CampaignThumbnail: FC<CampaignThumbnailProps> = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <Text style={styles.text}>
                    Kampanyalar
                </Text>
                <TouchableOpacity
                    style={styles.buttoncontainer}
                    onPress={onPress}
                >
                    <Text style={styles.buttontext}>
                        Tümünü Gör
                    </Text>
                </TouchableOpacity>
            </View>
            <Image
                source={{ uri: 'https://st4.depositphotos.com/2926785/20196/v/450/depositphotos_201966066-stock-illustration-wide-polygon-sale-banner-flashy.jpg' }}
                style={styles.image}
            />
        </View>
    )
}

export default CampaignThumbnail;