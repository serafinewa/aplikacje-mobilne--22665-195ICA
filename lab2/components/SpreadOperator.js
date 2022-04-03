import * as React from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import styles from "./styles/styles";

export default function SpreadOperator({navigation}) {
    return (
        <View style = {styles.spreadOperator.spreadView}>
            <Text style = {styles.spreadOperator.spreadText}>Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
                Example:
            </Text>
            <View style = {styles.spreadOperator.spreadViewExample}>
                <Text style = {styles.spreadOperator.spreadTextExample}>{
                    `function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6`
                }</Text>
            </View>
            <View style = {styles.spreadOperator.spreadButtons}>
                <TouchableOpacity style={styles.spreadOperator.spreadButton} onPress={() => navigation.navigate('HookUseState')} >
                    <Text>Hook Use State</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.spreadOperator.spreadButton} onPress={() => navigation.navigate('RestParameters')} >
                    <Text>Rest Parameters</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}