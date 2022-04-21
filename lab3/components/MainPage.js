import * as React from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import styles from './styles/styles';

export default function MainPage({navigation}) {
    return (
        <View style={styles.mainPage.mainView}>
            <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('SortFiltr')} >
                <Text style={styles.mainPage.mainText}> 𝕊𝕠𝕣𝕥 & 𝔽𝕚𝕝𝕥𝕣 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('LazyLoading')} >
                <Text style={styles.mainPage.mainText}> 𝕃𝕒𝕫𝕪 𝕃𝕠𝕒𝕕𝕚𝕟𝕘 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('StepProgress')} >
                <Text style={styles.mainPage.mainText}> 𝕊𝕥𝕖𝕡 ℙ𝕣𝕠𝕘𝕣𝕖𝕤𝕤 </Text>
            </TouchableOpacity>
        </View>
    );
}