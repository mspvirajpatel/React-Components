import React, { Component } from 'react';
import request from './index'

get = (url) => {
    return request({
        url: url,
        method: 'GET'
    });
};


post = (url, data) => {
    return request({
        url: url,
        method: 'POST',
        data: data,
    });
};


const Movie = {
    get, post //, update, delete, etc. ...
};

export default Movie;