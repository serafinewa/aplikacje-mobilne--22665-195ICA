import * as React from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import styles from './styles'


export default function MainPage({navigation}) {
    return (
      <View style={styles.mainPage.mainView}>
          <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('ScrollOne')}>
              <Text style={styles.mainPage.mainText}> 𝕊𝕔𝕣𝕠𝕝𝕝𝕍𝕚𝕖𝕨 𝟙 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('ScrollTwo')}>
              <Text style={styles.mainPage.mainText}> 𝕊𝕔𝕣𝕠𝕝𝕝𝕍𝕚𝕖𝕨 𝟚 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('Touchable')}>
              <Text style={styles.mainPage.mainText}> 𝕋𝕠𝕦𝕔𝕙𝕒𝕓𝕝𝕖 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('SwipeableApp')}>
              <Text style={styles.mainPage.mainText}> 𝕊𝕨𝕚𝕡𝕖𝕒𝕓𝕝𝕖 </Text>
          </TouchableOpacity>
      </View>
    );
}