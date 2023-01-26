import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    tabbarcontaier: {
        flexDirection: 'row',
        backgroundColor: '#4A6572',
        justifyContent: 'space-around',
        paddingVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    tabbarbtnPress: {
        backgroundColor: "#F9AA33",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    tabbartextPress: {
        color: '#4A6572',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    tabbarbtnNormal: {
        backgroundColor: '#4A6572',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    tabbartextNormal: {
        color: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    Ordercontainer: {
        flexDirection: 'row',
        width: Dimensions.get('screen').width - 20,
        maxWidth: Dimensions.get('screen').width - 20,
        height:110,
        maxHeight:110,
        justifyContent: 'space-around',
        backgroundColor: "#F9AA33",
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10
    },
    Ordertitleimage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginVertical: 5,
        borderRadius: 5
    },
    OrderModalcontainer: {
        //backgroundColor: 'red',
        marginTop: -10,
        marginBottom: 10,
        marginHorizontal: 10,
        borderRadius: 10
    },
    siparişcontainer: {
        flexDirection: 'row',
        backgroundColor: "#F9AA33",
        marginTop: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    siparişimage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginHorizontal: 5,
        borderRadius: 5
    }
})