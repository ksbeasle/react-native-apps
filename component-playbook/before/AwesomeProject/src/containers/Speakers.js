import React, { useState } from 'react';
import {Text, View, FlatList, Image, TextInput, Pressable} from 'react-native';
import {speakers}  from '../data/speakers.json'
import styles from '../containers/styles/sharedStyles'
import { Footer } from '../components/footer'
import { Header } from '../components/header'

function Speakers() {

  const [filteredSpeaker, setFilteredSpeaker] = useState(speakers)

  const getSearchText = (text) => {
    let filteredSpeakersList = speakers.filter((value) => 
      value.sessions[0].name.toLowerCase().includes(text.toLowerCase())
    )
    setFilteredSpeaker(filteredSpeakersList)
    
  }

  return (
    <View>
      <SearchSessions getSearchText={getSearchText}/>
      <FlatList
      keyboardDismissMode={'on-drag'}
      keyboardShouldPersistTaps={'always'}
      data={filteredSpeaker}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={SeparatorComponent}
      ListHeaderComponent={HeaderComponent}
      ListFooterComponent={FooterComponent}>

      </FlatList>
    </View>
  )
}

const SearchSessions = (props) => {
  const [searchText, setSearchText] = useState('')

  const handleSearch = (text) => {
    setSearchText(text)
    props.getSearchText(text)
  }

  const clearSearch = () => {
    this.textInput1.clear()
    props.getSearchText('')
  }
  return (
    <View style={styles.container}>
      <TextInput
      ref={(ref) => {
        this.textInput1 = ref
      }}
      style={styles.searchInput} 
      value={searchText}
      onChangeText={(text) => handleSearch(text)}
      placeholder='Search Sessions'
      returnKeyType={'go'}
      autoCorrect={false}
      autoFocus={false}
      keyboardType={'default'}
      multiline={false}
      selectionColor={'red'}
      />
      <Pressable 
      onPress={clearSearch} 
      style={styles.clearContainer}>
        <Image
        style={styles.clearImage}
        source={require('../images/multiply-1_Orange.png')}>

        </Image>
      </Pressable>
    </View>
  )
}

const renderItem = ({item, index}) => {
  return (
    <View>
      <SpeakerList id={index} name={item.name} bio={item.bio}  session={item.sessions[0].name}/>
    </View>
  )
}

const SpeakerList = ({id, name, bio, session}) => {
  return (
    <View style={styles.sectionContainer} key={id}>
      <Text style={styles.sectionTitle} >{'Speaker NAme: ' + name}</Text>
      <Text style={styles.sectionDescription}>{'Bio: ' + bio}</Text>
      <Text style={styles.sectionDescriptionBold}>{'Session: ' + session}</Text>
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
