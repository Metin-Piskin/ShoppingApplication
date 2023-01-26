import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import styles from './OrderKKDetail-style';

const OrderKKDetail = () => {
    return (
        <>
            <View style={styles.oneinnercontainer}>
                <View style={styles.onetwotextcontainer}>
                    <Text style={styles.onetext}>
                        Online Kredi/Banka Kartı
                    </Text>
                    <Text style={styles.twotext}>
                        1 Sipariş Kargoda - 1 Sipariş Teslim Edildi
                    </Text>
                </View>
                <View style={styles.threetextcontainer}>
                    <Text style={styles.threetext}>
                        Sipariş No: 234234
                    </Text>
                </View>
            </View>
            <View style={styles.kkcontainer}>
                <Image
                    source={{ uri: 'https://resources.mynewsdesk.com/image/upload/b_auto,c_pad,h_628,q_auto:good,w_1200/cjnrln3vdoj8lxfcadod.jpg' }}
                    style={styles.kkimage}
                />
                <Text style={styles.kktext}>
                    5269 11** **** 8042 (Kredi Kartı ile)
                </Text>
            </View>
            <View style={styles.kdcontainer}>
                <View style={styles.kdinnercontainer}>
                    <Text style={styles.kdtext}>
                        Kargo
                    </Text>
                    <Text style={styles.kdtext}>
                        12,98
                    </Text>
                </View>
                <View style={styles.kdinnercontainer}>
                    <Text style={styles.kdtext}>
                        Ürünler
                    </Text>
                    <Text style={styles.kdtext}>
                        1.332,98
                    </Text>
                </View>
                <Text style={styles.kdMTtext}>
                    Kampanya
                </Text>
                <View style={styles.kdMinnercontainer}>
                    <Text style={styles.kdMltext}>
                        Seçili giyim ve ayakkabı ürünlerinizde
                        200 TL üzeri alışverişlerde 20 TL kazanın.
                    </Text>
                    <Text style={styles.kdMtext}>
                        132,98
                    </Text>
                </View>
                <View style={styles.sncontainer}>
                    <Text style={styles.snttext}>
                        Sipariş Notu:
                    </Text>
                    <Text style={styles.sntext}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Text>
                </View>
            </View>
        </>
    )
}

export default OrderKKDetail;