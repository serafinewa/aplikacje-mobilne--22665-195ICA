import React, {Component, useEffect, useState} from 'react';
import { Button, Modal, ToastAndroid, Text, View } from 'react-native';
import styles from "./styles/styles";

const Toast = ({ visible, message }) => {
    if (visible) {
        ToastAndroid.showWithGravityAndOffset(
            message,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
        );
        return null;
    }
    return null;
};


const ToastButton = () => {
    const [visibleToast, setVisibleToast] = useState(false);
    useEffect(() => setVisibleToast(false), [visibleToast]);
    const handleButtonPress = () => {
        setVisibleToast(true);
    };
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const [time, setTime] = useState(0);
    let promise = null;
    const createPromise = () => {
        const tempTime = Math.floor(Math.random() * 10000);
        setTime(tempTime)
        promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('hide');
            }, tempTime);
        });
    }

    return (
        <View >
            <Button title="𝕔𝕝𝕚𝕔𝕜!" onPress={() => {
                onToggleSwitch()
                handleButtonPress()
                createPromise()
                promise.then((value) => {
                    if(value === 'hide'){
                        setIsSwitchOn(false)
                    }
                });
            }}/>
            <Toast visible={visibleToast} message="Message..." />
            <Modal
                animationType="slide"
                transparent={true}
                visible={isSwitchOn}
                onRequestClose={() => {
                    setModalVisible(!isSwitchOn);
                }}
            >
                <View style={styles.sortFiltr.sortFiltrContainer}>
                    <View >
                        <Text style={styles.sortFiltr.sortFiltrText} onPress={onToggleSwitch} >{time} ms</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
export default class Active extends Component {
    render() {
        return (
            <View style={styles.sortFiltr.sortFiltrContainer}>
                    <ToastButton style={styles.sortFiltr.sortFiltrButton}/><Text style={styles.sortFiltr.sortFiltrText}/>
            </View>
        );
    }
}