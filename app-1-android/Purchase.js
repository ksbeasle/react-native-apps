import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native'
import Tickets from './ticketsDB'

const Purchase = ({route, navigation}) => {
    const [ticketQuantity, setTicketQuantity] = useState('1')
    const { eventId } = route.params
    const selectedEvent = Tickets.find(tick => tick.eventId === eventId)

    const purchase = () => {
        const price = selectedEvent.price * ticketQuantity
        Alert.alert(`Total: ${price}`)
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{selectedEvent.event}</Text>
            <Image
            style={styles.img}
            source={selectedEvent.image}
            />
            <Text style={styles.desc}>{selectedEvent.description}</Text>

            <View style={styles.purchase}>
                <Text style={styles.shortdesc}>
                    Quantity:
                </Text>
                <TextInput
                style={styles.qty}
                onChangeText={(val) => setTicketQuantity(val)}
                value={ticketQuantity}
                selectTextOnFocus={true}
                keyboardType='numeric'
                />
            </View>

            <Text style={styles.price}>
                Total Price: ${selectedEvent.price * ticketQuantity}
            </Text>

            <TouchableOpacity
            onPress={purchase}
            style={styles.button}>
                <Text style={styles.buttonText}>Buy Now</Text>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 10
    },
    purchase: {
        flexDirection: 'row'
    },
    button: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: '60%'
    },
    title: {
        paddingBottom: 10
    },
    img: {
        width: '100%',
        height: 180
    },
    shortdesc: {
        paddingTop: 5,
        textAlignVertical: 'center'
    },
    desc: {
        textAlign: 'left',
        fontWeight: '600',
        padding: 10
    },
    price: {
        paddingTop: 5,
        paddingBottom: 10
    },
    buttonText: {
        textAlign: 'center',
        padding: 5
    }, 
    qty: {
        borderWidth: 1,
        height: 38,
        width: 40,
        marginLeft: 25
    }
})





export default Purchase