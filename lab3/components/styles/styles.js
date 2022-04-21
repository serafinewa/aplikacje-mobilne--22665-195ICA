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
        marginVertical: 60,
        borderRadius: 50,
    },
    mainText: {
        fontSize: 20,
    },
});

styles.sortFiltr = StyleSheet.create({
    sortFiltrContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'stretch',
        justifyContent: 'center',
        textAlign : 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    sortFiltrText: {
        color:'#000',
        fontSize:17,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sortFiltrEx: {
        flex: 1,
        backgroundColor: '#ffcc26',
        justifyContent: 'center',
        textAlign:'center',
        padding:2,
        margin:1,
        borderRadius: 8,
        fontSize: 10,

    },
    sortFiltrButtons: {
        flexDirection: 'row',
        backgroundColor: '#ffcc26',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginVertical: 10,
        paddingVertical: 10,
        borderRadius:30,
        elevation: 10,
    }
});
styles.lazyLoading = StyleSheet.create({
    loadContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'stretch',
        justifyContent: 'center',
        textAlign : 'center',
    },
    loadEx: {
        flex: 1,
        backgroundColor: '#ffcc26',
        justifyContent: 'center',
        marginHorizontal: 16,
        marginVertical: 32,
        paddingHorizontal:16,
        paddingVertical:16,
        borderRadius:8,
        fontSize:24,
    }
});
styles.stepProgress = StyleSheet.create({
   stepContainer: {
       flex: 1,
       justifyContent: "center",
   },
   stepHorizontal: {
       flexDirection: "row",
       justifyContent: "space-around",
       padding: 20,
       margin: 30
   }
});



export default styles