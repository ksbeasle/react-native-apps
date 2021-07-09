import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import DB from './ticketsDB'
import { useFonts } from 'expo-font';

const Tickets = ({navigation}) => {
    // console.log(DB)

    let [fontsLoaded] = useFonts({
        'Ubuntu-Light': require('./assets/fonts/Ubuntu-Light.ttf'),
        'Ubuntu-Regular': require('./assets/fonts/Ubuntu-Regular.ttf')
      });

    const ticketItem = ({item}) => {

        return (
            <View style={styles.tickets}>
                <View>
                    <Image
                    style={styles.img}
                    source={item.image}
                    />
                </View>
                <View>
                    <Text style={styles.tickettitle}
                    >
                        {item.title}
                    </Text>
                    <Text style={styles.desc}
                    numberOfLines={2}
                    ellipsizeMode='tail'
                    >
                        {item.description}
                    </Text>
                    <Text style={styles.price}>
                        {item.price}
                    </Text>
                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Purchase', { eventId: item.eventId })
                    }}>
                    <Text style={styles.buyButton}>
                        Get Ticket
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    // Holds the list (FlatList)
    return (
        <View style={styles.container}>
            <FlatList 
            data={DB}
            renderItem={ticketItem}
            keyExtractor={(item) => item.eventId}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 15
    },
    tickets: {
        flexDirection: 'column'
    },
    img: {
        height: 180,
        width: '100%'
    },
    tickettitle: {
        fontFamily: 'Ubuntu-Regular',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    desc: {
        fontFamily: 'Ubuntu-Light', 
        fontWeight: '600',
        textAlign: 'center',
        paddingTop: 5
    },
    buyButton: {
        fontFamily: 'Ubuntu-Regular', 
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 30
    },
    price: {
        fontWeight: '600',
        textAlign: 'center',
        paddingTop: 5
    }
})

export default Tickets