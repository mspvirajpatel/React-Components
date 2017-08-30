import React, { Component } from 'react';
import PropTypes from 'prop-types';

const initialState = {
    isConnected: false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'CHANGE_CONNECTION_STATUS':
            return Object.assign({}, state, {
                isConnected: action.isConnected,
            });
        default:
            return state
    }
};