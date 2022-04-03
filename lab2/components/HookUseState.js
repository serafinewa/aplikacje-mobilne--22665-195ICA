import * as React from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import styles from './styles/styles';

export default function HookUseState({navigation}) {
    return (
        <View style = {styles.hookUseState.hookView}>
            <Text style = {styles.hookUseState.hookText}> A Hook is a special function that lets you “hook into” React features.
            For example, useState is a Hook that lets you add React state to function components.
            Example:
            </Text>
            <View style = {styles.hookUseState.hookViewExample}>
                <Text style= {styles.hookUseState.hookTextExample}>{
                    ` import React, { useState } from 'react';
   function Example() {
     const [count, setCount] = useState(0);

    return (
       <div>
        <p>You clicked {count} times</p>
        <button onClick={() =>
        setCount(count + 1)}>
         Click me
        </button>
      </div>
    );
  }`
                }</Text>
            </View>
            <View style={styles.hookUseState.hookButtons}>
                <TouchableOpacity style={styles.hookUseState.hookButton} onPress={() => navigation.navigate('RestParameters')} >
                    <Text> Rest Parameters </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.hookUseState.hookButton} onPress={() => navigation.navigate('SpreadOperator')} >
                    <Text> Spread Operator </Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}