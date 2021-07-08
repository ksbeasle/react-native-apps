import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class Header extends React.Component {

    constructor(props){
        // Must use super FIRST to avoid ref error
        super(props);
        this.state = { isLoggedIn: false }
    }
        // method to interact with state
        toggeUser = () => {
            this.setState((prevState) => {
                return { isLoggedIn: !prevState.isLoggedIn }
            })
        }

        // render
        render() {
            let display = this.state.isLoggedIn ? 'Sample User' : this.props.message
            return (
                <View style={styles.headStyle}>
                    <Image
                    style={styles.logoStyle}
                    source={require('./img/toast.jpeg')}
                    ></Image>
                    <Text 
                    style={styles.headText}
                    onPress={this.toggeUser}
                    > 
                    {display}
                    </Text>
                </View>
            );
        }
    
}

const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        color: 'white',
        fontSize: 25,
        flex: 1
    },
    headStyle: {
        paddingTop: 80,
        // paddingBottom: 10,
        paddingRight: 10,
        backgroundColor: '#35605a',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: 'black'
    },
    logoStyle: {
        flex: 1,
        width: undefined,
        height: undefined
    }
})