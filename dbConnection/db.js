const express = require('express');
const mongoose = require('mongoose');

const url ='mongodb+srv://mern:root@cluster0.9is9zo7.mongodb.net/Mern?retryWrites=true&w=majority';

const db = () => {
    try {
        mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then((con) => {
            if (con) {
                console.log('Connect successfully!');
            }
        })
    } catch (error) {
        console.log(`err mssg ${error}`);
    }
}

module.exports = db;