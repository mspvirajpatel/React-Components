
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image ,StatusBar ,Platform ,View,NetInfo} from 'react-native';

export const connectionState = ({ status }) => {
    return { type: 'CHANGE_CONNECTION_STATUS', isConnected: status };
};

export function isNetworkConnected() {
    return NetInfo.fetch().then(reachability => {
        if (reachability === 'unknown') {
            return new Promise(resolve => {
                const handleFirstConnectivityChangeIOS = isConnected => {
                    NetInfo.isConnected.removeEventListener('change', handleFirstConnectivityChangeIOS);
                    resolve(isConnected);
                };
                NetInfo.isConnected.addEventListener('change', handleFirstConnectivityChangeIOS);
            });
        }
        reachability = reachability.toLowerCase();
        return (reachability !== 'none' && reachability !== 'unknown');
    });

}
