import React, {useState} from 'react';
import { Text, View,TouchableOpacity, TouchableHighlight } from 'react-native';
import styles from './styles';

function Touchable() {

    const [count, setCount] = useState(0);
    function onPress() {
        setCount(prevCount => prevCount + 1);
    }
    const [count2, setCount2] = useState(0);
    const onPress2 = () => setCount2(count2 + 1);

    return (
        <View style={styles.touchableScreen.container}>
            <View style={styles.touchableScreen.countContainer}>
                <Text>Count: {count}</Text>
            </View>
            <TouchableOpacity
                style={styles.touchableScreen.button}
                onPress={onPress}
            >
                <Text>Press Here</Text>
            </TouchableOpacity>
            <TouchableHighlight onPress={onPress2}>
                <View style={styles.touchableScreen.button}>
                    <Text>Touch Here</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.touchableScreen.countContainer}>
                <Text style={styles.touchableScreen.countText}>
                    {count2 || null}
                </Text>
            </View>
        </View>
    )
}

export default Touchable;