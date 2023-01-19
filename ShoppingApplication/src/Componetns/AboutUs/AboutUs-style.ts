import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        marginTop: 10,
        borderTopWidth: 1,
        borderColor: "#F9AA33",
        paddingVertical: 5,
        paddingHorizontal: 5
    },
    aboutuscontainer: {},
    aboutustitle: {
        fontSize:19,
        color: '#232F34'
    },
    aboutustext: {
        color: '#4A6572',
        marginLeft:7
    },
    iconcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 5
    },
    iconimage: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    }
})