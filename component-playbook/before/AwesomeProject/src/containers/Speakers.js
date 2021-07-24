import React from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import {speakers}  from '../data/speakers.json'
import styles from '../containers/styles/sharedStyles'
import { Footer } from '../components/footer'
import { Header } from '../components/header'

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
  return <Header image={require('../images/G.png')} heading={'SHMONEY$$$!'} style={styles.sectionTitleGreen}/>
}

const FooterComponent = () => {
  return <Footer />
}

const SeparatorComponent = () => {
  return <View style={styles.separatorStyle}/>
}
export default Speakers;
