import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export class Menu extends React.Component{
    onPress = () => {
        Alert.alert('yeah you tapped the button')
    }

    render(){
        return(
            <View
            style={styles.container}
            >
                {/* Row 1 */}
                <View
                style={styles.buttonRow}
                >
                    <TouchableOpacity
                    style={styles.buttonStyles} 
                    onPress={this.onPress}>
                        <Text>LESSONS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttonStyles} 
                    onPress={this.onPress}>
                        <Text>REGISTER</Text>
                    </TouchableOpacity>

                </View>

                {/* Row 2 */}
                <View
                style={styles.buttonRow}
                >
                    <TouchableOpacity
                    style={styles.buttonStyles} 
                    onPress={this.onPress}>
                        <Text>BLOG</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttonStyles} 
                    onPress={() => {this.props.navigate('ContactRT')}}>
                        <Text>CONTACT</Text>
                    </TouchableOpacity>

                </View>

                {/* Row 3 */}
                <View
                style={styles.buttonRow}
                >
                    <TouchableOpacity
                    style={styles.buttonStyles} 
                    onPress={this.onPress}>
                        <Text>QUIZ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttonStyles} 
                    onPress={this.onPress}>
                        <Text>ABOUT</Text>
                    </TouchableOpacity>

                </View>


            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: '#35605a'
    },

    buttonRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderBottomWidth: 2
    },

    buttonStyles: {
        backgroundColor: '#35605a',
        height: '50%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: 'white',
        fontSize: 18
    }

})