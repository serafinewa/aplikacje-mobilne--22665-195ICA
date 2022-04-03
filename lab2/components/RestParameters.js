import * as React from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import styles from "./styles/styles";

export default function RestParameters({navigation}) {
    return (
        <View style = {styles.restParameters.restView}>
            <Text style = {styles.restParameters.restText}>The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
            Example:
            </Text>
            <View style = {styles.restParameters.restViewExample}>
                <Text style = {styles.restParameters.restTextExample}>{
                    `function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10`
                }</Text>
            </View>
            <View style = {styles.restParameters.restButtons}>
                <TouchableOpacity style={styles.restParameters.restButton} onPress={() => navigation.navigate('HookUseState')} >
                    <Text style = {styles.restParameters.restText}>HookUseState</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.restParameters.restButton} onPress={() => navigation.navigate('SpreadOperator')} >
                    <Text style = {styles.restParameters.restText}>Spread Operator</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}