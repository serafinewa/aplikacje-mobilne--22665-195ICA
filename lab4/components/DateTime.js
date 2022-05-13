import React, {useState} from 'react';
import {View, Platform, Text, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from "./styles/styles";

export default function DateTime() {
    const [date, setDate] = useState(new Date("June 10, 2022 21:12:25"));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const B = (props) => <Text style={{fontWeight: 'bold',color:'black'}}>{props.children}</Text>

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <>
            <View style={styles.lazyLoading.loadContainer}>
                <TouchableOpacity  onPress={showDatepicker}>
                    <Text style={styles.lazyLoading.loadText}>
                        𝕤𝕖𝕝𝕖𝕔𝕥 𝕕𝕒𝕥𝕖
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={showTimepicker}>
                    <Text style={styles.lazyLoading.loadText}>
                        𝕤𝕖𝕝𝕖𝕔𝕥 𝕥𝕚𝕞𝕖
                    </Text>
                </TouchableOpacity>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
            <View style={styles.lazyLoading.loadContainer}>
                <Text style={styles.lazyLoading.loadEx}>𝕕𝕒𝕥𝕖: {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</Text>
                <Text style={styles.lazyLoading.loadEx}>𝕥𝕚𝕞𝕖: {date.getHours()}:{date.getMinutes()}</Text>
            </View>
        </>
    );
};