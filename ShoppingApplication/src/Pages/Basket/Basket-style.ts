import { StyleSheet } from "react-native";

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
})