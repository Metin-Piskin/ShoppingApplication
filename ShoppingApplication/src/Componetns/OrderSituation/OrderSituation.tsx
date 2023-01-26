import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';
import { OrderSituationProps } from '../../types';

import styles from './OrderSituation-style';

const OrderSituation: FC<OrderSituationProps> = ({ Durum }) => {
    return (
        <View style={styles.container}>
            {
                Durum === 'Teslim Edildi' &&
                <View style={styles.TeslimEdildicontainer}>
                    <Image
                        source={require('./TeslimEdildi.png')}
                        style={styles.TeslimEdildiimage}
                    />
                    <View style={styles.TeslimEdilditextcontainer}>
                        <Text style={styles.TeslimEdildionetext}>
                            Miraç Yıldırım adlı kişiye teslim edildi.
                        </Text>
                        <Text style={styles.TeslimEdilditwotext}>
                            Teslim tarihi 16 Ara Per; 18:09
                        </Text>
                    </View>
                </View>
            }
            {
                Durum === 'İptal Edildi' &&
                <View style={styles.İptalEdildicontainer}>
                    <Image
                        source={require('./İptalEdildi.png')}
                        style={styles.İptalEdildiimage}
                    />
                    <View style={styles.İptalEdilditextcontainer}>
                        <Text style={styles.İptalEdildionetext}>
                            İptal işlemi sağlandı.
                        </Text>
                        <Text style={styles.İptalEdilditwotext}>
                            İptal tarihi 16 Ara Per; 18:09
                        </Text>
                    </View>
                </View>
            }
            {
                Durum === 'İade Edildi' &&
                <View style={styles.İadeEdildicontainer}>
                    <Image
                        source={require('./İadeEdildi.png')}
                        style={styles.İadeEdildiimage}
                    />
                    <View style={styles.İadeEdilditextcontainer}>
                        <Text style={styles.İadeEdildionetext}>
                            İade işlemi tamamlandı.
                        </Text>
                        <Text style={styles.İadeEdilditwotext}>
                            49,68 TL'lik geri ödemeniz Tümo E-Ticaret A.Ş tarafından bankanıza yapılmıştır. Bankanızın bu tutarı **5297 ile biten kartınıza yansıtma süresi en geç 2 iş günüdür. Bu süre bankanız tarafından belirlenir. Belirtilen süre geçmesine rağmen geri ödemeniz yapılmadıysa bankanızla iletişime geçebilirsiniz.
                        </Text>
                    </View>
                </View>
            }
        </View>
    )
}

export default OrderSituation;