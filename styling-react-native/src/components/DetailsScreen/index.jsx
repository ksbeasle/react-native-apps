import React from 'react';
import { Text, Image, Button, ScrollView, StyleSheet, View, Pressable } from 'react-native';


export const DetailsScreen = ({route})=>{

    const { name, date } = route.params.item;

    const [img1, img2, img3] = [
        require('./../../img/img-1.jpg'),
        require('./../../img/img-2.jpg'),
        require('./../../img/img-3.jpg')
    ]

    return (

        <ScrollView style={styles.container}>

            <Image resizeMode="cover" source={img3} style={styles.image}/>

            <View style={styles.imageThumbContainer}>
                <Image resizeMode="cover" source={img1} style={styles.imageThumb} resizeMode="contain"/>
                <Image resizeMode="cover" source={img2} style={styles.imageThumb} resizeMode="contain"/>
                <Image resizeMode="cover" source={img3} style={styles.imageThumb} resizeMode="contain"/>

                <Image resizeMode="cover" source={img1} style={styles.imageThumb} resizeMode="contain"/>
                <Image resizeMode="cover" source={img2} style={styles.imageThumb} resizeMode="contain"/>
                <Image resizeMode="cover" source={img3} style={styles.imageThumb} resizeMode="contain"/>

                <Image resizeMode="cover" source={img1} style={styles.imageThumb} resizeMode="contain"/>
                <Image resizeMode="cover" source={img2} style={styles.imageThumb} resizeMode="contain"/>
                <Image resizeMode="cover" source={img3} style={styles.imageThumb} resizeMode="contain"/>

                <Image resizeMode="cover" source={img1} style={styles.imageThumb} resizeMode="contain"/>
                <Image resizeMode="cover" source={img2} style={styles.imageThumb} resizeMode="contain"/>
                <Image resizeMode="cover" source={img3} style={styles.imageThumb} resizeMode="contain"/>

                <Image resizeMode="cover" source={img1} style={styles.imageThumb} resizeMode="contain"/>
                <Image resizeMode="cover" source={img2} style={styles.imageThumb} resizeMode="contain"/>
            </View>
  
            <Text>

                
               
                <h1>

                    {name}

                </h1>
                <h2>

                    {date.toLocaleDateString("en-us", {day: "numeric", weekday: "long", month: "long", year:"numeric"})}

                </h2> 
                <View>
                    <Text style={styles.text}>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget tellus fringilla, tempus magna ut, accumsan lectus. 
                        Sed pellentesque, mi non tempor auctor, nisl sem cursus sem, sed ultricies augue metus non ex. 
                        Morbi venenatis suscipit nunc vel facilisis. Sed sit amet dictum mauris, quis blandit velit. 

                    </Text>
                </View>

            </Text>

            <Button title="Purchase Tickets" onPress={()=>{}}></Button>
                {/* <Pressable>
                    <Text>
                        ok
                    </Text>
                </Pressable> */}

        </ScrollView>
    )

}

const styles = StyleSheet.create({
    image: {
        // height: 200,
        // width: 280
        height: "32vh",
        display: "flex",
        alignItems: "stretch"
    },
    container: {
        backgroundColor: "white",
        height: 480,
        margin: 20,
        padding: 20,
    },
    imageThumb: {
        display: "flex",
        height: "6vh",
        width: "7vh"
    },
    imageThumbContainer: {
        display: "flex",
        marginTop: "2vh",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    button: {
        backgroundColor: "red",
        color: "white",
        fontSize: "2vh"
    },
    text: {
        fontSize: "3vh"
    }
})