import React, {useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import MyButton from './components/MyButton';
import MyText from './components/MyText';
import {openDatabase} from 'react-native-sqlite-storage';
const db = openDatabase({name: 'user_db.db', createFromLocation: 1});
const HomeScreen = ({navigation}) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='tbl_user'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS tbl_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS tbl_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              [],
            );
          }
        },
      );
    });
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#8B0000'}}>
        <View style={{flex: 1}}>
          <MyText text="SQLite example using a pre-populated database!" />
          <MyButton
            title="Register"
            customClick={() => navigation.navigate('Register')}
          />
          <MyButton
            title="Update"
            customClick={() => navigation.navigate('Update')}
          />
          <MyButton
            title="View"
            customClick={() => navigation.navigate('View')}
          />
          <MyButton
            title="View All"
            customClick={() => navigation.navigate('ViewAll')}
          />
          <MyButton
            title="Delete"
            customClick={() => navigation.navigate('Delete')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
