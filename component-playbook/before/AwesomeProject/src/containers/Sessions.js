import React, { useState } from 'react';
import {Text, View, SectionList, Image, TouchableOpacity} from 'react-native';
import { sessions } from '../data/sessions.json'
import styles from './styles/sharedStyles'
import { Footer } from '../components/footer'
import { Header } from '../components/header'

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

const SessionList = (props) => {

  const [moreInfo, setInfo] = useState(false)

  return (
    <View key={props.id} style={styles.sectionContainer}>
      <Text style={styles.headerTitle}>{'Session' + props.name}</Text>
      <Text style={styles.sectionDescription}>{'Speaker ' + props.speaker}</Text>
      <TouchableOpacity onPress={() => setInfo(!moreInfo)}>
      <Text style={styles.clickMe}> { moreInfo ? 'Hide info' : 'Click for more details' }</Text>
      </TouchableOpacity>
      {moreInfo && (
      <> 
      <Text style={styles.sectionDescription}>{'Details ' + props.desc}</Text>
      <Text style={styles.sectionDescription}>{'Level ' + props.level}</Text>
      <Text style={styles.sectionDescription}>{'ROOOM ' + props.room}</Text>
      </>
      )}
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
      level={item.level}
      room={item.room}
      />
    </View>
  )
}


const HeaderComponent = () => {
  return <Header image={require('../images/sec2.jpg')} heading={'AWESOME SESH!'} style={styles.sectionTitle}/>
}

const FooterComponent = () => {
  return <Footer />
}

const SeparatorComponent = () => {
  return <View style={styles.separatorStyle}/>
}

export default Sessions;
