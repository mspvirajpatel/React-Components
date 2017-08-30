import React from 'react';
import {Color} from "../../../utils/constant"
import {StyleSheet, PixelRatio,Dimensions} from 'react-native';
const win = Dimensions.get('window');
const radius = 10;
export const styles = StyleSheet.create({

    buttonContainer: {
        alignItems: 'center',
    },
    buttonText: {
        paddingLeft: 7,
        paddingRight: 7,
        paddingTop: 8,
        paddingBottom: 8,
    }
});