import React, { FC, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { DetailComponetProps } from '../../types';

import styles from './DetailComponet-style';
import Data from '../../Data/Data.json';
import ProductCard from '../ProductCard';

const DetailComponet: FC<DetailComponetProps> = ({ prop }) => {
    const resimdata: Array<string> = prop.detail.images;
    const [fullimage, setFullimage] = useState<string>(prop.image)
    const bedenlist: Array<string> = prop.beden;
    const [number, setNumber] = useState<number>(1);
    const [veri, setVeri] = useState(Data);

    useEffect(() => {
        setVeri([...Data.filter(e => e.categori === prop.categori)])
    }, [])

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: fullimage }}
                style={styles.image}
            />
            <ScrollView horizontal>
                {
                    resimdata.map((e, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => setFullimage(e)}
                                key={index}
                                style={[styles.selectimagebutton, fullimage === e && styles.selectimagebuttonPress]}
                            >
                                <Image
                                    source={{ uri: e }}
                                    style={styles.selectimage}
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
            <View style={styles.innercontainer}>
                <Text style={styles.categoritext}>
                    {prop.categori}
                </Text>
                <Text style={styles.puantext}>
                    {prop.puan}/5
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                {
                    bedenlist.map((e, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.bedencontainer}
                            >
                                <Text style={styles.bedentext}>
                                    {e}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <View style={styles.buycontainer}>
                <View style={styles.buyinnercontainer}>
                    <TouchableOpacity
                        onPress={() => setNumber(number - 1)}
                        disabled={number === 1 && true}
                        style={styles.numberbuttoncontainer}
                    >
                        <Text style={styles.numberbuttontext}>-</Text>
                    </TouchableOpacity>
                    <Text>{number}</Text>
                    <TouchableOpacity
                        onPress={() => setNumber(number + 1)}
                        style={styles.numberbuttoncontainer}
                    >
                        <Text style={styles.numberbuttontext}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buyinnercontainer}>
                    <Text style={styles.pricetext}>
                        {number * prop.price} TL
                    </Text>
                    <TouchableOpacity
                        style={styles.buybutton}
                    >
                        <Text style={styles.buybuttontext}>
                            Buy
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.detailcontainer}>
                <Text style={styles.detailtitle}>Detail</Text>
                <Text style={styles.detailtext}>
                    {prop.detail.detailtext}
                </Text>
            </View>
            <View>
                <Text style={styles.detailtitle}>
                    Benzer Ürünler
                </Text>
                <ScrollView horizontal>
                    {
                        veri.map(e => {
                            return (
                                <ProductCard
                                    onPress={() => null}
                                    item={e}
                                    key={e.id}
                                />
                            )
                        })
                    }
                </ScrollView>
            </View>
            <View>
                <Text style={styles.detailtitle}>
                    Yorumlar
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={{ uri: 'https://avatars.githubusercontent.com/u/85956297?v=4' }}
                        style={{ width: 70, height: 70 }}
                    />
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Nickname</Text>
                            <Text>Puan</Text>
                        </View>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ex corporis perferendis iste possimus minima quam dolores nisi pariatur non repellendus voluptatem.</Text>
                        <Text>14.10.1999</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={{ uri: 'https://avatars.githubusercontent.com/u/85956297?v=4' }}
                        style={{ width: 70, height: 70 }}
                    />
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Nickname</Text>
                            <Text>Puan</Text>
                        </View>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ex corporis perferendis iste possimus minima quam dolores nisi pariatur non repellendus voluptatem.</Text>
                        <Text>14.10.1999</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DetailComponet;
{/*
                <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={prop.puan}
                    starStyle={{backgroundColor:''}}
                />
*/}