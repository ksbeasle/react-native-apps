import React from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import {speakers}  from '../data/speakers.json'
import styles from '../containers/styles/sharedStyles'

function Speakers() {
  return (
    <View>
      <FlatList
      data={speakers}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={SeparatorComponent}
      ListHeaderComponent={HeaderComponent}
      ListFooterComponent={FooterComponent}>

      </FlatList>
    </View>
  )
}

const renderItem = ({item, index}) => {
  return (
    <View>
      <SpeakerList id={index} name={item.name} bio={item.bio}  />
    </View>
  )
}

const SpeakerList = ({id, name, bio}) => {
  return (
    <View style={styles.sectionContainer} key={id}>
      <Text style={styles.sectionTitle} >{'Speaker NAme: ' + name}</Text>
      <Text style={styles.sectionDescription}>{'Bio: ' + bio}</Text>
    </View>
  )
}

const HeaderComponent = () => {
  return (
    <View style={styles.sectionContainer}>

      <Image 
      style={styles.headerImage}
      source={require('../images/girl.png')}/>

      <Text style={styles.sectionDescription}>Awesome SPEAKERS !!!</Text>

    </View>
  )
}

const FooterComponent = () => {
  return (
    <View>
      <Image style={styles.footerImage} source={require('../images/G.png')}/>
      <Text style={styles.sectionDescription}>
        {' '}
        All Rights reserved BLAH BLAH BLAH
      </Text>
    </View>
  )
}

const SeparatorComponent = () => {
  return <View style={styles.separatorStyle}/>
}
export default Speakers;
