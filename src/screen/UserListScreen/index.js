import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Modal,
  TextInput,
  Button,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {SearchUser, CardUser} from '../../components/Big';
import VectorIcon from 'react-native-vector-icons/Ionicons';
import {listUser} from './UserService';

// const users = [
//   {
//     firstName: 'Albus',
//     lastName: 'Dumbledore',
//     age: '120',
//     photo: false,
//   },
// ];

const UserListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [users, setUsers] = useState([]);
  // const [form, setForm] = useState(initialForm);

  const loadData = () => {
    listUser().then(resp => {
      if (resp.code == 200) {
        setUsers(resp.data);
      }
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <SearchUser placeholder={'Search User. . .'} sortTitle="FILTER" />
      <FlatList
        data={users}
        renderItem={({item: user}) => <CardUser data={user} />}
        keyExtractor={({id}) => id}
      />
      <VectorIcon
        name="add-circle"
        size={66}
        style={{position: 'absolute', bottom: 10, right: 10}}
        color={'green'}
        onPress={() => setModalVisible(!modalVisible)}
      />
      <Modal
        visible={modalVisible}
        animationType="fade"
        presentationStyle="overFullScreen">
        <View style={styles.centeredModal}>
          <View style={styles.modalView}>
            <View style={styles.title}>
              <Text style={styles.modalTitle}>New User</Text>
              <Icon name="x" size={24} onPress={() => setModalVisible(false)} />
            </View>

            <TextInput
              // value={form.firstName}
              placeholder="First Name"
              // onChangeText={text => handleTextInput('firstName', text)}
            />
            <TextInput
              // value={form.lastName}
              placeholder="Last Name"
              // onChangeText={text => handleTextInput('lastName', text)}
            />
            <TextInput
              // value={form.age}
              placeholder="Age"
              // onChangeText={text => handleTextInput('age', text)}
            />
            <TextInput
              // value={form.photo}
              placeholder="Photo"
              // onChangeText={text => handleTextInput('photo', text)}
            />
            <Button
              title="Save"
              // onPress={() => {
              //   if (!form.id) {
              //     handleSave('CREATE');
              //   } else {
              //     handleSave('UPDATE');
              //   }
              // }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredModal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalView: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
