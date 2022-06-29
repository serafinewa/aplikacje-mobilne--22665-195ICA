import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, SafeAreaView} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
const db = openDatabase({name: 'user_db.db', createFromLocation: 1});
const ViewAllUser = () => {
  let [flatListItems, setFlatListItems] = useState([]);
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM tbl_user', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setFlatListItems(temp);
      });
    });
  }, []);
  let listViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.2,
          width: '100%',
          backgroundColor: '#ffcc26',
        }}
      />
    );
  };
  let listItemView = (item) => {
    return (
      <View
        key={item.user_id}
        style={{backgroundColor: '#ffcc26', padding: 20}}>
        <Text style={{color: '#ffffff'}}>Id: {item.user_id}</Text>
        <Text style={{color: '#ffffff'}}>Name: {item.user_name}</Text>
        <Text style={{color: '#ffffff'}}>Contact: {item.user_contact}</Text>
        <Text style={{color: '#ffffff'}}>Address: {item.user_address}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#ffcc26'}}>
        <View style={{flex: 1}}>
          <FlatList
            data={flatListItems}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => listItemView(item)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ViewAllUser;