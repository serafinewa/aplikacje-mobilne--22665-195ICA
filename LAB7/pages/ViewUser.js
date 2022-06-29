import React, {useState} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import MyTextInput from './components/MyTextInput';
import MyButton from './components/MyButton';
import {openDatabase} from 'react-native-sqlite-storage';
const db = openDatabase({name: 'user_db.db', createFromLocation: 1});
const ViewUser = () => {
  let [inputUserId, setInputUserId] = useState('');
  let [userData, setUserData] = useState({});

  let searchUser = () => {
    console.log(inputUserId);
    setUserData({});
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM tbl_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setUserData(results.rows.item(0));
          } else {
            alert('No user found');
          }
        },
      );
    });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#ffcc26'}}>
        <View style={{flex: 1}}>
          <MyTextInput
            placeholder="Enter User Id"
            onChangeText={(inputUserId) => setInputUserId(inputUserId)}
            style={{padding: 10}}
          />
          <MyButton title="Search User" customClick={searchUser} />
          <View style={{marginLeft: 35, marginRight: 35, marginTop: 10}}>
            <Text style={{color: '#ffffff'}}>User Id: {userData.user_id}</Text>
            <Text style={{color: '#ffffff'}}>
              User Name: {userData.user_name}
            </Text>
            <Text style={{color: '#ffffff'}}>
              User Contact: {userData.user_contact}
            </Text>
            <Text style={{color: '#ffffff'}}>
              User Address: {userData.user_address}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ViewUser;
