import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import VectorIcon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {getContactList} from '../../actions/ContactAPI';
import {SearchUser, CardUser} from '../../components/Big/';
import {API_CONTACT, DELETE_CONTACT} from '../../utils/constant';
import axios from 'axios';
import {FotoDefault} from '../../assets';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(getContactList());
  }

  showAlertDelete = id => {
    Alert.alert('Konfirmasi', 'Yakin Hapus Data ?', [
      {
        text: 'Batal',
      },
      {
        text: 'Hapus',
        onPress: () => this.deleteUser(id),
      },
    ]);
  };

  deleteUser = id => {
    fetch(DELETE_CONTACT + id, {method: 'DELETE'})
      .then(response => response.json())
      .then(data => {
        console.log('INI DATA', data);
        this.setState({
          loading: false,
          data: data.results,
          next: data.next,
          prev: data.previous,
        });
      })
      .catch(error => console.log('error get list', error));
  };

  render() {
    const {getContactResult} = this.props;
    console.log('DATA MASUK : ', this.props.getContactResult);

    return (
      <View style={styles.container}>
        <SearchUser placeholder={'Search User. . .'} sortTitle="FILTER" />

        <FlatList
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={getContactResult.data}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => this.props.navigation.navigate('Edit Contact')}>
                <Image
                  style={styles.image}
                  source={item.photo ? {uri: item.photo} : FotoDefault}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.name}>
                    {`${item.firstName} ${item.lastName}`}
                  </Text>
                  <Text style={styles.age}>Age : {item.age}</Text>
                  <VectorIcon
                    name="trash-bin-outline"
                    size={20}
                    style={{bottom: 35, left: 175}}
                    color={'red'}
                    onPress={() =>
                      this.setState({index}, () =>
                        this.showAlertDelete(item.id),
                      )
                    }
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <VectorIcon
          name="add-circle"
          size={66}
          style={{position: 'absolute', bottom: 10, right: 10}}
          color={'#E93B81'}
          onPress={() => this.props.navigation.navigate('Add Contact')}
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
    backgroundColor: '#B2EBF2',
  },
  contentList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#ebf0f7',
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 55,
  },

  name: {
    fontSize: 20,
    flex: 1,
    color: '#3399ff',
    fontWeight: 'bold',
  },
  age: {
    fontSize: 20,
    flex: 1,
    color: '#3399ff',
    fontWeight: 'bold',
    alignSelf: 'auto',
  },
  editButton: {
    marginTop: 10,
    marginLeft: 100,
    height: 35,
    width: 100,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 30,
    backgroundColor: 'yellow',
    borderWidth: 1,
    borderColor: '#dcdcdc',
  },
  followButtonText: {
    color: 'black',
    fontSize: 12,
  },
  deleteButtonText: {
    color: 'red',
    fontSize: 20,
    marginLeft: 200,
  },
});
