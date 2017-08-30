import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Color} from "../../../utils/constant";

const win = Dimensions.get('window');

export default styles = StyleSheet.create({
    button: {
        height: 30,
        paddingTop:6,
        marginTop: 10,
        marginLeft:5,
        marginRight:5,
        backgroundColor: 'transparent',
    },
    buttonContainer: {
        alignItems: 'center',
    },
    btnContent: {
        alignItems: 'center',
    },
    buttonText: {
        paddingLeft: 7,
        fontSize: 10,
        paddingRight: 7,
        paddingTop: 8,
        paddingBottom: 8,
        color: Color.WHITE
    }
});
