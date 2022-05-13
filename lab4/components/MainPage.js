import * as React from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import styles from './styles/styles';

export default function MainPage({navigation}) {
    return (
        <View style={styles.mainPage.mainView}>
            <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('TextInput')} >
                <Text style={styles.mainPage.mainText}> 𝕥𝕖𝕩𝕥 𝕚𝕟𝕡𝕦𝕥 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('Select')} >
                <Text style={styles.mainPage.mainText}> 𝕤𝕖𝕝𝕖𝕔𝕥 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('Switch')} >
                <Text style={styles.mainPage.mainText}> 𝕤𝕨𝕚𝕥𝕔𝕙 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('DateTime')} >
                <Text style={styles.mainPage.mainText}> 𝕕𝕒𝕥𝕖𝕥𝕚𝕞𝕖 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainPage.mainButton} onPress={() => navigation.navigate('Active')} >
                <Text style={styles.mainPage.mainText}> 𝕒𝕔𝕥𝕚𝕧𝕖 </Text>
            </TouchableOpacity>
        </View>
    );
}