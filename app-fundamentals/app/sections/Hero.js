import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class Hero extends React.Component {
    render(){
        return(
            <Image
            style={styles.hero}
            source={require('./img/bacon-burger.jpeg')}
            ></Image>
        )
    }
}


const styles = StyleSheet.create({
    hero: {
        width: undefined,
        height: undefined,
        flex: 8
    }
})