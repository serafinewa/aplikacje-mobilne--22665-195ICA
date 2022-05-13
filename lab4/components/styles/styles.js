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

styles.sortFiltr = StyleSheet.create({
    sortFiltrContainer: {
        flex: 1,
        backgroundColor: '#ffcc26',
        alignItems: 'stretch',
        justifyContent: 'center',
        textAlign : 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    sortFiltrInput: {
        backgroundColor: '#ddd',
        padding: 10,
    },
    sortFiltrButton: {
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 70,
        marginVertical: 20,
        borderRadius: 50,
    },
    sortFiltrText: {
        color:'#ffffff',
        fontSize:17,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
styles.lazyLoading = StyleSheet.create({
    loadContainer: {
        flex: 1,
        backgroundColor: '#ffcc26',
        alignItems: 'stretch',
        justifyContent: 'center',
        textAlign : 'center',
    },
    loadEx: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        marginHorizontal: 16,
        marginVertical: 32,
        paddingHorizontal:16,
        paddingVertical:16,
        borderRadius:8,
        fontSize:24,
    },
    loadText: {
        color:'#ffffff',
        backgroundColor: '#ffcc50',
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