import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    modalcontainer: {
        backgroundColor: '#fff',
        position: 'absolute',
        right: 12,
        top: 55,
        padding: 10,
        borderRadius: 7,
        width: 160,

    },
    modalheadercontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    modalheadertext: {
        fontSize: 17,
    },
    modalclosebuttoncontainer: {},
    modalitemcontainer: {
        flexDirection: 'row',
    },
    btnNormal: {
        width: 17,
        height: 17,
        borderRadius: 10,
        marginRight: 17,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor:'#FF9600'
    },
    btnPress: {
        width: 17,
        height: 17,
        borderRadius: 10,
        marginRight: 17,
        backgroundColor: '#FF9600',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor:'#FF9600'
    },
    text: {
        fontSize: 15,

    }
})