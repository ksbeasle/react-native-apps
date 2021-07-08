import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Menu from './Menu'

const Home = (props) => {

    let [fontsLoaded] = useFonts({
        'Ubuntu-Light': require('./assets/fonts/Ubuntu-Light.ttf'),
        'Ubuntu-Regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
        'Dancing-Script': require('./assets/fonts/DancingScript-SemiBold.ttf'),
      });

    if(!fontsLoaded){
        return <AppLoading />
    } else {
        return (
            <View style={styles.container}>
                <Image
                style={styles.logo}
                source={require('./assets/bacon-burger.jpeg')}></Image>
    
                <Text style={styles.title}>Title</Text>
                <Text style={styles.subtitle}>{props.username}</Text>
    
                <View style={styles.textContainer}>
                    <Text style={styles.content}>{intro}</Text>
                </View>
                <View style={styles.menu}>
                    <Menu />
                </View>
            </View>
        );
    }
}
const intro = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1
    },
    textContainer: {
        // textAlign: 'center', Something about View documentation only accepting View styles
        padding: 20
    },
    logo: {
        height: 100,
        width: 150
    },
    title: {
        fontFamily: 'Ubuntu-Regular'
    },
    subtitle: {
        paddingTop: 5,
        fontFamily: 'Dancing-Script'
    },
    content: {
        fontFamily: 'Ubuntu-Light',
        fontWeight: '300'
    },
    menu: {
        position: 'absolute',
        bottom: 100
    }
})
export default Home