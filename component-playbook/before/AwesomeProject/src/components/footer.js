import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from '../containers/styles/sharedStyles'

export const Footer = () => {
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