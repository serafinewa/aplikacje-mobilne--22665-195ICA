import React, {Component} from 'react';
import styles from './styles'
import { View, ScrollView} from 'react-native';

export default class ScrollTwo extends Component {
    render() {
        return (
            <View>
                <ScrollView contentContainerStyle={styles.secondScroll.scrollView}>
                    <View style={[styles.secondScroll.viewStyle, { backgroundColor: "#1984c5" }]}/>
                    <View style={[styles.secondScroll.viewStyle, { backgroundColor: "#22a7f0" }]}/>
                    <View style={[styles.secondScroll.viewStyle, { backgroundColor: "#63bff0" }]}/>
                    <View style={[styles.secondScroll.viewStyle, { backgroundColor: "#a7d5ed" }]}/>
                    <View style={[styles.secondScroll.viewStyle, { backgroundColor: "#e2e2e2" }]}/>
                    <View style={[styles.secondScroll.viewStyle, { backgroundColor: "#e1a692" }]}/>
                    <View style={[styles.secondScroll.viewStyle, { backgroundColor: "#de6e56" }]}/>
                    <View style={[styles.secondScroll.viewStyle, { backgroundColor: "#e14b31" }]}/>
                    <View style={[styles.secondScroll.viewStyle, { backgroundColor: "#c23728" }]}/>
                    <View style={[styles.secondScroll.viewStyle, { backgroundColor: "#b04238" }]}/>
                </ScrollView>
            </View>
        );
    }
}