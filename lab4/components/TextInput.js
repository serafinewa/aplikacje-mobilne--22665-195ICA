import React ,{Component}  from 'react';
import { View, Text,TextInput ,ScrollView} from 'react-native';
import styles from "./styles/styles";

export default class TextInputPage extends Component {
    render(){
        return (
            <View style={styles.sortFiltr.sortFiltrContainer}>
                <View>
                    <Text style={styles.sortFiltr.sortFiltrText}>𝕕𝕖𝕗𝕒𝕦𝕝𝕥</Text>
                    <TextInput style={styles.sortFiltr.sortFiltrInput} /><Text/>
                </View>
                <View>
                    <Text style={styles.sortFiltr.sortFiltrText} >𝕡𝕝𝕒𝕔𝕖𝕙𝕠𝕝𝕕𝕖𝕣</Text>
                    <TextInput style={styles.sortFiltr.sortFiltrInput} placeholder=" 𝕡𝕝𝕒𝕔𝕖𝕙𝕠𝕝𝕕𝕖𝕣 " /><Text/>
                </View>
                <View>
                    <Text style={styles.sortFiltr.sortFiltrText}>𝕕𝕖𝕗𝕒𝕦𝕝𝕥 𝕧𝕒𝕝𝕦𝕖</Text>
                    <TextInput style={styles.sortFiltr.sortFiltrInput} defaultValue=" 𝕤𝕖𝕥 𝕧𝕒𝕝𝕦𝕖..." autoCorrect={true}/><Text/>
                </View>
                <View>
                    <Text style={styles.sortFiltr.sortFiltrText}>𝕞𝕦𝕝𝕥𝕚𝕝𝕚𝕟𝕖</Text>
                    <TextInput style={styles.sortFiltr.sortFiltrInput} multiline={true}/><Text/>
                </View>
                <View>
                    <Text style={styles.sortFiltr.sortFiltrText}>𝕞𝕒𝕩 𝕝𝕖𝕟𝕘𝕥𝕙 = 𝟙𝟝</Text>
                    <TextInput style={styles.sortFiltr.sortFiltrInput} maxLength={15} /><Text/>
                </View>
                <View>
                    <Text style={styles.sortFiltr.sortFiltrText}>𝕟𝕦𝕞𝕖𝕣𝕚𝕔 𝕜𝕖𝕪𝕓𝕠𝕒𝕣𝕕 & 𝕤𝕖𝕔𝕦𝕣𝕖 𝕥𝕖𝕩𝕥 𝕖𝕟𝕥𝕣𝕪</Text>
                    <TextInput style={styles.sortFiltr.sortFiltrInput} keyboardType=" 𝕟𝕦𝕞𝕖𝕣𝕚𝕔 " secureTextEntry/><Text/>
                </View>
                <View>
                    <Text style={styles.sortFiltr.sortFiltrText}> 𝕖𝕕𝕚𝕥𝕒𝕓𝕝𝕖 = 𝕗𝕒𝕝𝕤𝕖 </Text>
                    <TextInput style={styles.sortFiltr.sortFiltrInput} editable = {false} defaultValue=" 𝕓𝕝𝕠𝕔𝕜𝕖𝕕 𝕚𝕟𝕡𝕦𝕥, 𝕤𝕠𝕣𝕣𝕪! "/><Text/>
                </View>
            </View>

        );
    }
}