import { StyleSheet } from 'react-native';

const styles = {}
    styles.mainPage = StyleSheet.create({
        mainView: {
            flex: 1,
            backgroundColor: '#fff',
        },
        mainButton: {
            flex: 1,
            backgroundColor: '#ffcc26',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 70,
            marginVertical: 60,
            borderRadius: 50,
        },
        mainText: {
            fontSize: 20,
        },
    });

    styles.hookUseState = StyleSheet.create({
        hookView: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'stretch',
            justifyContent: 'center',
            textAlign : 'center',
            paddingHorizontal: 20,
            paddingVertical: 30,
        },
        hookText: {
            color:'#000',
            fontSize: 20,
        },
        hookTextExample: {
            color:'#fff',
            fontSize: 20,
        },
        hookViewExample: {
            flex: 1,
            backgroundColor: '#ffcc26',
            justifyContent: 'center',
            marginHorizontal: 20,
            marginVertical: 60,
            paddingHorizontal: 50,
            paddingVertical: 20,
            borderRadius: 10,
        },
        hookButtons: {
            flexDirection: 'row',
        },
        hookButton: {
            flex: 1,
            backgroundColor: '#ffcc26',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 30,
            marginVertical: 20,
            paddingVertical: 10,
            borderRadius: 50,
        }
    });

    styles.restParameters = StyleSheet.create({
        restView: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'stretch',
            justifyContent: 'center',
            textAlign : 'center',
            paddingHorizontal: 30,
            paddingVertical: 20,
        },
        restText: {
            color:'#000',
            fontSize:20,
        },
        restTextExample: {
            color:'#fff',
            fontSize: 20,
        },
        restViewExample: {
            flex: 1,
            backgroundColor: '#ffbe45',
            justifyContent: 'center',
            marginHorizontal: 20,
            marginVertical: 60,
            paddingHorizontal: 50,
            paddingVertical: 50,
            borderRadius: 10,
        },
        restButtons: {
            flexDirection: 'row',
        },
        restButton: {
            flex: 1,
            backgroundColor: '#ffbe45',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 30,
            marginVertical: 20,
            paddingVertical: 10,
            borderRadius: 30,
        }
    });

    styles.spreadOperator = StyleSheet.create({
        spreadView: {
            flex: 1,
            backgroundColor: '#ffffff',
            alignItems: 'stretch',
            justifyContent: 'center',
            textAlign : 'center',
            paddingHorizontal: 30,
            paddingVertical: 20,
        },
        spreadText: {
            color:'#000',
            fontSize: 20,
        },
        spreadTextExample: {
            color:'#fff',
            fontSize: 18,
        },
        spreadViewExample: {
            flex: 1,
            backgroundColor: '#ff6145',
            justifyContent: 'center',
            marginHorizontal: 20,
            marginVertical: 60,
            paddingHorizontal: 50,
            paddingVertical: 20,
            borderRadius: 30,
        },
        spreadButtons: {
            flexDirection: 'row',
        },
        spreadButton: {
            flex: 1,
            backgroundColor: '#ff6145',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 20,
            marginVertical: 30,
            paddingVertical: 10,
            borderRadius: 10,
        }
    });

export default styles