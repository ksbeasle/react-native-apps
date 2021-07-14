import React, { useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ( {navigation, route} ) => {
    console.log(route);
    const movie = route.params.movie;

    // State for API data
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://www.omdbapi.com/?apikey=64af7da4&t=star+wars&y=1977');
      xhr.send()
      xhr.onload = () => {
        if(xhr.status === 200){
          // console.log('HERE?!?!?', xhr.responseText)
          let response = JSON.parse(xhr.response)

          // set movie details
          setMovieDetails(response)
        }else{
          console.error(`ERROR! ${xhr.status}`)
        }
      }

      xhr.onerror = () => {
        console.log('Error')
      }
    }, [])

    return (
      <View style={styles.mainView}>
        <Text>{movieDetails ? movieDetails.Title : ''}</Text>
        <Text>{movieDetails ? movieDetails.Released : ''}</Text>
        <Text>{movieDetails ? movieDetails.Plot :  ''}</Text>


        {/* <Text style={{fontSize: 20}}>{movie.title} ({movie.release})</Text>
        <Text style={{fontSize: 100}} >{movie.screenNumber}</Text> */}
        <Button
          title="Go to Image"
          onPress={() => {navigation.navigate("ImageView")}}/>
        <Button
          title="More Details"
          onPress={() => {
            movie.screenNumber = movie.screenNumber + 1;
            console.log(movie);
            navigation.push("Details_to_Details",
                            {movie: movie} )}}/>
        <Button
          title="Go Back to Home"
          onPress={() => {navigation.popToTop()}}/>
      </View>
    )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default DetailsScreen;