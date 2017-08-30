import React from 'react';
import {Color} from "../../../utils/constant"
import {StyleSheet, PixelRatio,Dimensions} from 'react-native';
const win = Dimensions.get('window');
const radius = 10;
export const styles = StyleSheet.create({
    inputWrapAndroid:{

        marginBottom:15,
        width: win.width * (73/100),
        alignSelf: 'center',
    },
    inputWrap: {
        flexDirection: 'row',
        backgroundColor : Color.WHITE,
        height: 43,
        paddingLeft: 10,
        alignItems: 'center',
    },
    inputTextios: {
        paddingLeft: 10,
        height: 43,
        paddingTop: 2,
        marginBottom:15,
        width: win.width * (73/100),
        alignSelf: 'center',
        backgroundColor : Color.WHITE,
    },
    inputText: {
        color: '#222',
        fontSize: 18,
    },
    inputDel: {
        position: 'absolute',
        right: 0,
        top: 10,
        width: 16,
        height: 16,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputDelText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    inputDelImg: {
        width: 16,
        height: 16,
        opacity: 1
    },
    inputDelImgNone: {
        width: 10,
        height: 10
    },
});