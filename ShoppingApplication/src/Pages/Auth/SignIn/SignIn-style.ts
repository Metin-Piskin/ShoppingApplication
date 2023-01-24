import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    signincontainer: {
        backgroundColor: '#4A6572',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderRadius: 10
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center'
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
        paddingVertical: 5,
        borderRadius: 5
    },
    kayıtbuttoncontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        marginHorizontal: 25,
        marginVertical: 6
    },
    kayıtbuttontext: {
        color: '#fff'
    },
    loginbuttoncontainer: {
        alignItems: 'flex-end',
        marginRight: 10
    },
})