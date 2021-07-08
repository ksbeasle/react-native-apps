import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import { Header } from '../sections/Header'
import { StackNavigator } from 'react-navigation'

export class Contact extends React.Component {

    static navigationOptions = {
        header: null
    }

    // state
    constructor(props){
        super(props)
        this.state = {
            msg: 'Enter message',
            name: 'Enter name',
            email: 'Enter email'
        }
    }

    // clear input method
    clearFields = () => this.setState({msg:'', name:'', email:''})

    // send message method
    sendMessage = () => {
        Alert.alert(this.state.name, this.state.msg)
        this.props.navigation.goBack()
    }

    render(){
        return (
            <View
            style={styles.container}
            >
                <Header message="YO YO YO"/>
                <Text style={styles.heading}>Contact Us</Text>
                {/* <Text style={{flex:6}}>Contact form 2</Text> */}
                {/* <Text></Text> */}

                {/* Name */}
                <TextInput
                style={styles.inputs}
                onChangeText={(text) => {this.setState({name: text})}}
                value={this.state.name}
                />

                {/* Message */}
                <TextInput
                style={styles.multiInput}
                onChangeText={(text) => {this.setState({msg: text})}}
                value={this.state.msg}
                multiline={true}
                numberOfLines={4}
                />

                {/* Email */}
                <TextInput
                style={styles.inputs}
                onChangeText={(text) => {this.setState({email: text})}}
                value={this.state.email}
                />

                {/* Send Message */}
                <TouchableHighlight
                onPress={this.sendMessage}
                underlayColo={"cyan"}
                >
                    <Text 
                    style={styles.buttons}
                    >
                        Send Message
                    </Text>
                </TouchableHighlight>

                {/* clear fields */}
                <TouchableHighlight
                onPress={this.clearFields}
                underlayColo={"blue"}
                >
                    <Text 
                    style={styles.buttons}
                    >
                        Clear Form
                    </Text>
                </TouchableHighlight>

                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%' // important for mobile users (keyboard pop-up)
    }, 
    heading: {
        fontSize: 16,
        flex: 1
    },
    inputs: {
        flex: 1,
        width: '80%',
        padding: 10
    },
    multiInput: {
        flex: 2,
        width: '90%',
        paddingTop: 20
    },
    buttons: {
        marginTop: 15,
        fontSize: 16
    }
})