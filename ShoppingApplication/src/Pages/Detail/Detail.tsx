import React from 'react'
import { View, ScrollView } from 'react-native'
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types'

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;
type SearchScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;
type DetailScreenProps = NativeStackNavigationProp<RootStackParamList, 'Detail'>;


import DetailHeader from '../../Componetns/Headers/HeaderBack';
import DetailComponet from '../../Componetns/DetailComponet';

const Detail = () => {
    const DetailsRoute = useRoute<DetailsScreenRouteProp>();
    const SearchRoute = useRoute<SearchScreenRouteProp>();
    const navigation = useNavigation<DetailScreenProps>();
    const { Citem } = DetailsRoute.params;
    const { Sitem } = SearchRoute.params;

    return (
        <ScrollView>
            {
                Citem &&
                <>
                    <DetailHeader
                        title={Citem.title}
                        onPress={() => navigation.goBack()}
                    />
                    <DetailComponet
                        prop={Citem}
                    />
                </>
            }
            {
                Sitem &&
                <>
                    <DetailHeader
                        title={Sitem.title}
                        onPress={() => navigation.goBack()}
                    />
                    <DetailComponet
                        prop={Sitem}
                    />
                </>
            }
        </ScrollView>
    )
}

export default Detail