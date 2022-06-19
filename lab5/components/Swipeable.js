import React, { Component }  from 'react';
import {TouchableOpacity, View, Text, ScrollView } from 'react-native';
import Swipeable from 'react-native-swipeable';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function(props) {
    const navigation = useNavigation();
    return <SwipeableApp {...props} navigation = {navigation} />;
}

const leftButtons = [
    <TouchableOpacity style={{backgroundColor: '#D9BBBB'}}
                      onPress={() => alert('Pressed button!')}>
        <Text>1</Text>
    </TouchableOpacity>,
    <TouchableOpacity style={{backgroundColor: '#BEAFB6'}}>
        <Text>2</Text>
    </TouchableOpacity>
];


function SwipeEx({onOpen, onClose}) {
    return (
        <Swipeable
            leftButtonWidth={55}
            leftButtons={leftButtons}
            onLeftButtonsOpenRelease={onOpen}
            onLeftButtonsCloseRelease={onClose}
        >
            <View>
                <Text style={styles.swipe.text}>Swipe right!</Text>
            </View>
        </Swipeable>
    );
}

export class SwipeableApp extends Component {
    state = {
        swiped: false,
        toggle: false,
        currentlyOpenSwipeable: null,
        ex1: 'Swipe left!',
    };

    render(){
        const { swiped} = this.state;
        const rightContent=[
            <View style={styles.swipe.right}>
                { swiped ?
                    <Text style={{color: '#000000', fontSize:30, marginTop: 20, fontWeight: 'bold' }}>Delete</Text>
                    : <Text style={{color: '#000000', fontSize:30, marginTop: 20, fontWeight: 'bold'}}>Go On...</Text>}
            </View>
        ]

        const {currentlyOpenSwipeable} = this.state;
        const itemProps = {
            onOpen: (event, gestureState, swipeable) => {
                if (currentlyOpenSwipeable && currentlyOpenSwipeable !== swipeable) {
                    currentlyOpenSwipeable.recenter();
                }
                this.setState({currentlyOpenSwipeable: swipeable});
            },
            onClose: () => this.setState({
                currentlyOpenSwipeable: null
            })
        };

        return (
            <View style={styles.swipe.container}>
                <View style={styles.swipe.container}>
                        <View style={styles.swipe.mid}>
                            <Text style={styles.swipe.text}>Swipeable Example</Text>
                            <ScrollView style={styles.swipe.button}>
                                <Swipeable
                                    rightContent={rightContent}
                                    rightActionActivationDistance={200}
                                    onRightActionActivate={() => this.setState({swiped: true})}
                                    onRightActionDeactivate={() => this.setState({swiped: false})}
                                    onRightActionComplete={() => this.setState({ex1: 'Deleted!'})}
                                >
                                    <Text style={styles.swipe.text}>{this.state.ex1}</Text>
                                </Swipeable>
                            </ScrollView>
                            <ScrollView style={styles.swipe.button}>
                                <SwipeEx {...itemProps}/>
                            </ScrollView>
                        </View>
                    </View>
            </View>
        );
    }
}