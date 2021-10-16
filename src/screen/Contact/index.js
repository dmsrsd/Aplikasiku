import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import {connect} from 'react-redux';
import {getContactList} from '../../actions/ContactAPI';
import {SearchUser, CardUser} from '../../components/Big/';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(getContactList());
  }

  render() {
    const {getContactResult} = this.props;
    console.log('DATA MASUK : ', this.props.getContactResult);

    return (
      <View style={styles.container}>
        <SearchUser placeholder={'Search User. . .'} sortTitle="FILTER" />

        <FlatList
          style={styles.notificationList}
          data={getContactResult.data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => {
            return (
              <View>
                <TouchableOpacity style={styles.notificationBox}>
                  <Image style={styles.image} source={{uri: item.photo}} />
                  <Text style={styles.nameList}>
                    First Name : {item.firstName}
                  </Text>
                  <Text style={styles.nameList}>
                    Last Name : {item.lastName}
                  </Text>
                  <Text style={styles.nameList}>Age : {item.age}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const mapStatetoProps = state => ({
  getContactResult: state.ContactReducer.getContactResult,
});

export default connect(mapStatetoProps, null)(Contact);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC93C',
  },
  image: {
    marginLeft: 6,
    width: 100,
    height: 100,
  },
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  notificationBox: {
    padding: 50,
    marginTop: 15,
    marginBottom: 5,
    backgroundColor: 'white',
    flexDirection: 'column',
    borderRadius: 10,
  },
  nameList: {
    marginTop: 10,
    fontSize: 20,
    color: '#3498db',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  inputText: {
    height: 60,
    borderWidth: 2,
    paddingLeft: 20,
    margin: 5,
    borderColor: 'black',
    backgroundColor: 'white',
  },
});
