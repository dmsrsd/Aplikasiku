import React, {Component} from 'react';
import axios from 'axios';
import {StyleSheet, View, Button, Alert} from 'react-native';
import {Input} from '../../components/Small';
import {ADD_CONTACT, API_CONTACT} from '../../utils/constant';

export class EditContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      age: '',
    };
  }

  componentDidMount() {
    console.log(this.state.navigation);
  }

  sendData = () => {
    console.log(this.state);
    const {navigation, firstName, lastName, age} = this.props;
    axios
      .post(ADD_CONTACT, this.state)
      .then(function (response) {
        Alert.alert('Berhasil', 'Berhasil Menambah Data', [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Home'),
          },
        ]);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log('ok');
  };

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="First Name"
          value={this.state.firstName}
          onChangeText={value => this.setState({firstName: value})}
        />
        <View style={{height: 20}} />
        <Input
          placeholder="Last Name"
          value={this.state.lastName}
          onChangeText={value => this.setState({lastName: value})}
        />
        <View style={{height: 20}} />
        <Input
          placeholder="Age"
          value={this.state.age}
          onChangeText={value => this.setState({age: value})}
        />
        <View style={styles.buttonAdd} />
        <Button title="Save" onPress={() => this.sendData()} />
      </View>
    );
  }
}

export default EditContact;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: 'grey',
  },
  buttonAdd: {
    borderRadius: 22,
    paddingVertical: 15,
    paddingHorizontal: 5,
    paddingLeft: 10,
    alignItems: 'center',
  },
});
