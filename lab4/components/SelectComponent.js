import React from "react";
import PropTypes from "prop-types";
import { View, Picker, Text } from "react-native";
import styles from "./styles/styles";

export default function SelectComp(props) {
    return (
        <View>
            <Text style={styles.sortFiltr.sortFiltrText}>{props.label}</Text>
            <Picker {...props}>
                {props.items.map(i => (
                    <Picker.Item key={i.label} {...i} />
                ))}
            </Picker>
        </View>
    );
}

SelectComp.propTypes = {
    items: PropTypes.array,
    label: PropTypes.string
};