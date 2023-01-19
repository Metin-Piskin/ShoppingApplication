import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {},
    innercontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 10
    },
    text: {
        color: '#4A6572'
    },
    buttoncontainer: {},
    buttontext: {
        color: '#F9AA33'
    },
    image: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height / 4,
        resizeMode: 'cover',
    }
})