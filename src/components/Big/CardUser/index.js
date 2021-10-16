import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const CardUser = ({data, handleClicked, handleDeleteUser}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleClicked(data)}>
      <Icon
        name="x"
        size={24}
        style={styles.title}
        onPress={() => handleDeleteUser(data.id)}
      />
      <Text style={styles.nameList}> First Name : {data.firstName}</Text>
      <Text style={styles.nameList}>Last Name : {data.lastName}</Text>
      <Text style={styles.nameList}>Age : {data.age}</Text>
      {/* <Text style={styles.nameList}>{data.photo}</Text> */}
    </TouchableOpacity>
  );
};

export default CardUser;

const styles = StyleSheet.create({
  container: {
    height: 124,
    backgroundColor: 'white',
    display: 'flex',
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  nameList: {
    marginTop: 10,
    fontSize: 20,
    color: '#3498db',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
