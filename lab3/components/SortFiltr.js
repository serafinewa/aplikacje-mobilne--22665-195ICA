import React, {Component} from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from "./styles/styles";


const Numbers = ({ liczby }) => {
    var index = 0
    console.log(liczby)
    return (
        <ScrollView >
            {liczby.map(liczba => <Text key={index++} >{liczba}</Text>)}
        </ScrollView>
    );
};

export default class Sort extends Component{
    constructor(){
        super();
        const arr = [];
        const sorted = false;
        for (let i = 0; i < 100; i++) {
            arr.push(Math.floor(Math.random() * 1000) + 1);
        }
        this.state = {
            arr
        };
    }
    sort = () =>{
        if(!this.state.sorted){
            this.state.arr.sort((a,b) => a > b ? 1:-1)
            this.state.sorted = true
        }
        else {
            this.state.arr.sort((a,b) => a > b ? -1:1)
            this.state.sorted = false
        }
        this.forceUpdate()
    }
    randomize = () =>{
        console.log(this.state.arr)
        const newarr = []
        for (let i = 0; i < this.state.arr.length; i++) {
            newarr.push(Math.floor(Math.random() * 1000) + 1);
        }
        this.state.arr = newarr
        this.state.sorted = false
        this.forceUpdate()
    }

    render(){
        return (
            <View style={styles.sortFiltr.sortFiltrContainer}>
                <View style={styles.sortFiltr.sortFiltrText}>
                    <TouchableOpacity  onPress={this.sort}>
                        <Text style={styles.sortFiltr.sortFiltrButtons}> 𝕊𝕠𝕣𝕥 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this.randomize}>
                        <Text style={styles.sortFiltr.sortFiltrButtons}> ℝ𝕒𝕟𝕕𝕠𝕞𝕚𝕫𝕖 </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.sortFiltr.sortFiltrEx} >
                    <Numbers  liczby={this.state.arr} />
                </View>
            </View>
        )
    };
}