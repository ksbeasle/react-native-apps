import React from 'react';
import { Image, StyleSheet } from 'react-native';

const img = require('../../img/logo.png');

export const Logo = () => (
    <Image source={img} style={styles.logo} resizeMethod="contain"/>
)


const styles = StyleSheet.create({
    logo: {
        height: "16vh",
        borderBottomColor: 'darksteelblue',
        borderBottomWidth: StyleSheet.hairlineWidth
    }
})