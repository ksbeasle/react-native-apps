import React from 'react';
import {Text, View, SectionList, Image} from 'react-native';
import { sessions } from '../data/sessions.json'
import styles from './styles/sharedStyles'

function Sessions() {
  return (
    <View>
      <SectionList sections={sessions}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={(item, index) => index}
      stickySectionHeadersEnabled={true}
      ItemSeparatorComponent={SeparatorComponent}
      ListFooterComponent={FooterComponent}
      ListHeaderComponent={HeaderComponent}>
      </SectionList>
    </View>
  )
}

const renderSectionHeader = ({section}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{section.title}</Text>
    </View>
  )
}

const SessionList = ({id, name, speaker, desc}) => {
  return (
    <View key={id} style={styles.sectionContainer}>
      <Text style={styles.headerTitle}>{'Session' + name}</Text>
      <Text style={styles.sectionDescription}>{'Details' + desc}</Text>
      <Text style={styles.sectionDescription}>{'Speaker' + speaker}</Text>
    </View>
  )
}

const renderItem = ({item, index}) => {
  return (
    <View>
      <SessionList 
      id={index}
      name={item.title}
      desc={item.description}
      speaker={item.speakers[0].name}
      />
    </View>
  )
}


const HeaderComponent = () => {
  return (
    <View style={styles.sectionContainer}>

      <Image 
      style={styles.headerImage}
      source={require('../images/girl.png')}/>

      <Text style={styles.sectionDescription}>Awesome SeSSSIONSONSONSOSN !!!</Text>

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

export default Sessions;
