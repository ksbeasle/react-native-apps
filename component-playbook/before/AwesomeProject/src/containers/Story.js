import React from 'react';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';

import styles from './styles/sharedStyles.js';

function Story() {
  return (
    <ScrollView 
    style={styles.storyContainer} 
    contentContainerStyle={styles.storyInnerContainer}
    stickyHeaderIndices={[0, 1]}
    indicatorStyle="white"
    pagingEnabled={true}
    ref={(a) => (this.scroll) = a}>
      <Image
        style={styles.storyImageSmall}
        source={require('../images/shutterstock_211091626.png')}
      />
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitleStory}>Our Story</Text>
          <Text style={styles.sectionDescriptionStory}>
            Conference by nerds for nerds!
          </Text> 
        </View>
      </View>

      <View style={styles.body}>
      {/* <Pressable onPress={() => this.scroll.scrollToEnd({animated: true})}> Pressable doesn't work ????? */}
            <Text style={styles.sectionDescriptionStory}>Go to End</Text>
      {/* </Pressable> */}
        <Text style={styles.sectionDescriptionStory}>
          $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        </Text>
        <Text style={styles.sectionDescriptionStory}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis viverra scelerisque. 
        Aenean nec velit sollicitudin, rhoncus tortor nec, facilisis arcu. Nullam id lacus consectetur, 
        pellentesque magna id, porttitor metus. Pellentesque imperdiet rhoncus interdum. Phasellus non enim 
        facilisis, porta purus nec, imperdiet orci. Class aptent taciti sociosqu ad litora torquent per conubia 
        nostra, per inceptos himenaeos. Cras imperdiet dolor lacus, vitae dapibus tortor porttitor tincidunt. 
        Donec orci libero, bibendum eget massa vitae, suscipit sodales lacus. 
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Praesent egestas, est quis fringilla aliquet, ligula nulla hendrerit mauris, a feugiat sem tortor nec lacus. 
        Nulla nec cursus nisi.
        </Text>

        <Text style={styles.sectionDescriptionStory}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis viverra scelerisque. 
        Aenean nec velit sollicitudin, rhoncus tortor nec, facilisis arcu. Nullam id lacus consectetur, 
        pellentesque magna id, porttitor metus. Pellentesque imperdiet rhoncus interdum. Phasellus non enim 
        facilisis, porta purus nec, imperdiet orci. Class aptent taciti sociosqu ad litora torquent per conubia 
        nostra, per inceptos himenaeos. Cras imperdiet dolor lacus, vitae dapibus tortor porttitor tincidunt. 
        Donec orci libero, bibendum eget massa vitae, suscipit sodales lacus. 
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Praesent egestas, est quis fringilla aliquet, ligula nulla hendrerit mauris, a feugiat sem tortor nec lacus. 
        Nulla nec cursus nisi.
        </Text>

        <Text style={styles.sectionDescriptionStory}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis viverra scelerisque. 
        Aenean nec velit sollicitudin, rhoncus tortor nec, facilisis arcu. Nullam id lacus consectetur, 
        pellentesque magna id, porttitor metus. Pellentesque imperdiet rhoncus interdum. Phasellus non enim 
        facilisis, porta purus nec, imperdiet orci. Class aptent taciti sociosqu ad litora torquent per conubia 
        nostra, per inceptos himenaeos. Cras imperdiet dolor lacus, vitae dapibus tortor porttitor tincidunt. 
        Donec orci libero, bibendum eget massa vitae, suscipit sodales lacus. 
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Praesent egestas, est quis fringilla aliquet, ligula nulla hendrerit mauris, a feugiat sem tortor nec lacus. 
        Nulla nec cursus nisi.
        </Text>

        <Text style={styles.sectionDescriptionStory}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis viverra scelerisque. 
        Aenean nec velit sollicitudin, rhoncus tortor nec, facilisis arcu. Nullam id lacus consectetur, 
        pellentesque magna id, porttitor metus. Pellentesque imperdiet rhoncus interdum. Phasellus non enim 
        facilisis, porta purus nec, imperdiet orci. Class aptent taciti sociosqu ad litora torquent per conubia 
        nostra, per inceptos himenaeos. Cras imperdiet dolor lacus, vitae dapibus tortor porttitor tincidunt. 
        Donec orci libero, bibendum eget massa vitae, suscipit sodales lacus. 
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Praesent egestas, est quis fringilla aliquet, ligula nulla hendrerit mauris, a feugiat sem tortor nec lacus. 
        Nulla nec cursus nisi.
        </Text>

        <Text style={styles.sectionDescriptionStory}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis viverra scelerisque. 
        Aenean nec velit sollicitudin, rhoncus tortor nec, facilisis arcu. Nullam id lacus consectetur, 
        pellentesque magna id, porttitor metus. Pellentesque imperdiet rhoncus interdum. Phasellus non enim 
        facilisis, porta purus nec, imperdiet orci. Class aptent taciti sociosqu ad litora torquent per conubia 
        nostra, per inceptos himenaeos. Cras imperdiet dolor lacus, vitae dapibus tortor porttitor tincidunt. 
        Donec orci libero, bibendum eget massa vitae, suscipit sodales lacus. 
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Praesent egestas, est quis fringilla aliquet, ligula nulla hendrerit mauris, a feugiat sem tortor nec lacus. 
        Nulla nec cursus nisi.
        </Text>

        <Text style={styles.sectionDescriptionStory}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis viverra scelerisque. 
        Aenean nec velit sollicitudin, rhoncus tortor nec, facilisis arcu. Nullam id lacus consectetur, 
        pellentesque magna id, porttitor metus. Pellentesque imperdiet rhoncus interdum. Phasellus non enim 
        facilisis, porta purus nec, imperdiet orci. Class aptent taciti sociosqu ad litora torquent per conubia 
        nostra, per inceptos himenaeos. Cras imperdiet dolor lacus, vitae dapibus tortor porttitor tincidunt. 
        Donec orci libero, bibendum eget massa vitae, suscipit sodales lacus. 
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Praesent egestas, est quis fringilla aliquet, ligula nulla hendrerit mauris, a feugiat sem tortor nec lacus. 
        Nulla nec cursus nisi.
        </Text>

        <Text style={styles.sectionDescriptionStory}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis viverra scelerisque. 
        Aenean nec velit sollicitudin, rhoncus tortor nec, facilisis arcu. Nullam id lacus consectetur, 
        pellentesque magna id, porttitor metus. Pellentesque imperdiet rhoncus interdum. Phasellus non enim 
        facilisis, porta purus nec, imperdiet orci. Class aptent taciti sociosqu ad litora torquent per conubia 
        nostra, per inceptos himenaeos. Cras imperdiet dolor lacus, vitae dapibus tortor porttitor tincidunt. 
        Donec orci libero, bibendum eget massa vitae, suscipit sodales lacus. 
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Praesent egestas, est quis fringilla aliquet, ligula nulla hendrerit mauris, a feugiat sem tortor nec lacus. 
        Nulla nec cursus nisi.
        </Text>

        <Text style={styles.sectionDescriptionStory}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis viverra scelerisque. 
        Aenean nec velit sollicitudin, rhoncus tortor nec, facilisis arcu. Nullam id lacus consectetur, 
        pellentesque magna id, porttitor metus. Pellentesque imperdiet rhoncus interdum. Phasellus non enim 
        facilisis, porta purus nec, imperdiet orci. Class aptent taciti sociosqu ad litora torquent per conubia 
        nostra, per inceptos himenaeos. Cras imperdiet dolor lacus, vitae dapibus tortor porttitor tincidunt. 
        Donec orci libero, bibendum eget massa vitae, suscipit sodales lacus. 
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Praesent egestas, est quis fringilla aliquet, ligula nulla hendrerit mauris, a feugiat sem tortor nec lacus. 
        Nulla nec cursus nisi.
        </Text>

        <Text style={styles.sectionDescriptionStory}>End of this Story!</Text>

      </View>
    </ScrollView>
  );
}

export default Story;
