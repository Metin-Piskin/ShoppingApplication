import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    logincontainer: {
        backgroundColor: '#4A6572',
        //position: 'absolute',
        //width: Dimensions.get('screen').width - 20,
        //maxWidth: Dimensions.get('screen').width - 20,
        //marginLeft: 10,
        //top: Dimensions.get('screen').width / 1.5,
        //zIndex: 999,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal:10,
        borderRadius: 10
    },
    inputcontainer: {
        borderBottomWidth: 2,
        borderColor: '#4A6572',
        marginHorizontal: 5,
        borderRadius: 5
    },
    input: {
        backgroundColor: "#F9AA33",
        marginTop: 5,
        //marginHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 5
    },
    textbuttoncontainer: {
        alignItems: 'flex-end',
        marginRight: 10,
        marginTop: 6
    },
    textbuttontext: {
        color: '#fff'
    },
    girişbuttoncontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        marginHorizontal: 25,
        marginVertical: 6
    },
    girişbuttontext: {
        color: '#fff'
    },
    kayıtolbuttoncontainer: {
        alignItems: 'flex-end',
        marginRight: 10
    },
    kayıtolbuttontext: {
        color: '#fff'
    },
})