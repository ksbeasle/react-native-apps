import React, { useEffect, useState} from 'react'
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image } from 'react-native'

const News = () => {

    const [isLoaded, setDataLoaded] = useState(true)
    const [storyData, setStoryData] = useState()

    const getNews = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            const stories = await response.json()
            setStoryData(stories)
            setDataLoaded(false)
        } catch (error) {
            console.error('ERROR: ', error)
        }
    }

    useEffect (() => {
        getNews();
    }, []) //pass [] to only make a single request without it, it will possibly make more than one request

   // console.log(storyData)

    const newsItem = ({item}) => {
        return (
            <View style={styles.storyList}>
                <Image 
                style={styles.thumb}
                source={{ uri: item.url }}
                />
                <Text style={styles.storyText}>{item.title}</Text>
                <Text style={styles.storyText}>{item.url}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            { isLoaded ? <ActivityIndicator /> : (
                <FlatList 
                data={storyData}
                renderItem={newsItem}
                keyExtractor={(item) => item.title}
                />
                
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        paddingTop: 20
    },
    storyList: {
        paddingBottom: 20
    },
    thumb: {
        height: 100,
        width: '100%'
    },
    storyText: {
        padding: 10
    }

})

export default News