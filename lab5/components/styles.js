import { StyleSheet } from 'react-native';

const styles = {}
styles.mainPage = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    mainButton: {
        flex: 1,
        backgroundColor: '#ffcc26',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 70,
        marginVertical: 20,
        borderRadius: 50,
    },
    mainText: {
        fontSize: 30,
    },
});
styles.firstScroll = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    scrollView: {
        marginTop: 30,
        height: 100,
        width: 100
    },
    viewStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
});
styles.secondScroll = StyleSheet.create({
    styleView: {
        flex: 1,
    },
    scrollView: {
        alignContent:'space-around',
        flexDirection: 'column',
    },
    viewStyle:{
        alignSelf:'center',
        width: 100,
        height: 128,
        fontSize: 30,
    }
});
styles.touchableScreen = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        margin: 20
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },
    countText: {
        color: "#ffcc26"
    }
});
styles.swipe = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    mid: {
        backgroundColor: '#ffffff',
        padding: '10%',
        textAlign: 'justify',
    },
    listItem: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center'
    },
    right: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginRight: 20,
    },
    left: {
        flex: 1,
        justifyContent: 'flex-end',
        marginLeft: 30
    },
    text:{
        paddingTop:20,
        fontSize:30,
        margin: 10,
        marginTop: 0,
        fontWeight: 'bold',
        textAlign: 'justify'
    },
    button: {
        marginTop: 10,
        elevation: 6,
        paddingVertical: 25,
        backgroundColor: "#ffcc26"
    }
});

export default styles;