import React ,{Component}  from 'react';
import { ActivityIndicator,StyleSheet,View, Text } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import styles from "./styles/styles";

export default class FirstStepProgress extends Component {

    defaultScrollViewProps = {
        keyboardShouldPersistTaps: 'handled',
        contentContainerStyle: {
            flex: 1,
            justifyContent: 'center'
        }
    };

    render(){
        const progressStepsStyle = {
            activeStepIconBorderColor: '',
            activeLabelColor: '#000000',
            activeStepNumColor: '#000000',
            activeStepIconColor: '#ffcc26',
            completedStepIconColor: '#000000',
            completedProgressBarColor: '#ffcc26',
            completedCheckColor: '#ffcc26'
        };

        const buttonTextStyle = {
            color: '#000000',
            fontWeight: 'bold'
        };
        return (
            <View style={{flex: 1, marginTop: 50 }}>
                <ProgressSteps {...progressStepsStyle}>
                    <ProgressStep
                        label="𝔽𝕚𝕣𝕤𝕥 𝕊𝕥𝕖𝕡"
                        scrollViewProps={this.defaultScrollViewProps}
                        nextBtnTextStyle={buttonTextStyle}
                        previousBtnTextStyle={buttonTextStyle}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text>𝕊𝕥𝕖𝕡 𝟙</Text>
                            <View style={[styles.stepProgress.stepContainer, styles.stepProgress.stepHorizontal]}>

                                <ActivityIndicator size="large" color="#fe7f00" />
                            </View>

                        </View>
                    </ProgressStep>
                    <ProgressStep
                        label="𝕊𝕖𝕔𝕠𝕟𝕕 𝕊𝕥𝕖𝕡"
                        scrollViewProps={this.defaultScrollViewProps}
                        nextBtnTextStyle={buttonTextStyle}
                        previousBtnTextStyle={buttonTextStyle}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text>𝕊𝕥𝕖𝕡 𝟚</Text>
                            <View style={[styles.stepProgress.stepContainer, styles.stepProgress.stepHorizontal]}>

                                <ActivityIndicator size="large" color="#cc0000" />
                            </View>
                        </View>
                    </ProgressStep>
                    <ProgressStep
                        label="𝕋𝕙𝕚𝕣𝕕 𝕊𝕥𝕖𝕡"
                        scrollViewProps={this.defaultScrollViewProps}
                        nextBtnTextStyle={buttonTextStyle}
                        previousBtnTextStyle={buttonTextStyle}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text>𝕊𝕥𝕖𝕡 𝟛</Text>
                            <View style={[styles.stepProgress.stepContainer, styles.stepProgress.stepHorizontal]}>

                                <ActivityIndicator size="small" color="#380A2E" />
                            </View>
                        </View>
                    </ProgressStep>
                </ProgressSteps>
            </View>
        );
    }
}