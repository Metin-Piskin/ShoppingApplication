import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {

    },
    image: {
        width: Dimensions.get('screen').width / 1.6,
        height: Dimensions.get('screen').height / 3,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    selectimagebutton: {
        borderWidth: 2,
        borderColor: "#fff",
        marginVertical: 10,
        marginHorizontal: 5
    },
    selectimagebuttonPress: {
        borderWidth: 2,
        borderColor: "#F9AA33",
        marginVertical: 10,
        marginHorizontal: 5
    },
    selectimage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    innercontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10
    },
    categoritext: {
        backgroundColor: '#4A6572',
        color: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
        textAlign: 'center'
    },
    puantext: {
        color: "#F9AA33",
    },
    pricetext: {
        fontSize: 20,
        color: '#232F34'
    },
    buycontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 10
    },
    buyinnercontainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    numberbuttoncontainer: {
        backgroundColor: "#F9AA33",
        paddingHorizontal: 10,
        //paddingVertical: 5,
        borderRadius: 5,
        marginHorizontal: 10
    },
    numberbuttontext: {
        color: '#fff',
        fontSize: 19,
    },
    buybutton: {
        backgroundColor: "#F9AA33",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 5,
        marginLeft: 20
    },
    buybuttontext: {
        color: '#fff',
        fontSize: 18
    },
    bedencontainer: {
        marginHorizontal: 5,
        backgroundColor: '#4A6572',
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#F9AA33",
    },
    bedentext: {
        color: '#fff'
    },
    detailcontainer: {
        alignItems: 'center',
        marginHorizontal: 3
    },
    detailtitle: {
        fontSize: 20,
        color: '#232F34'
    },
    detailtext: {
        fontSize: 15,
        color: '#232F34'
    }
})