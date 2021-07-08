import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header'
import { Hero } from '../sections/Hero'
import { Menu } from '../sections/Menu'
import { StackNavigator } from 'react-navigation'

export class Home extends React.Component{

    static navigationOptions = {
        header: null
    }

    render(){
        const { navigate } = this.props.navigation
        return(
            <View style={styles.container}>
                <Header message="sign in please"/>
                {/* <Text style={{flex:8}}>This will be the homePAge</Text> */}
                <Hero />
                <Menu navigate = {navigate}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})