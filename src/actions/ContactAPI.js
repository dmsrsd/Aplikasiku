import axios from 'axios';
import {API_CONTACT, API_TIMEOUT} from '../utils/constant';

export const GET_CONTACT = 'GET_CONTACT';

export const getContactList = () => {
  return dispatch => {
    //LOADING PROCESS
    dispatch({
      type: GET_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: 'get',
      url: API_CONTACT,
      timeout: API_TIMEOUT,
    })
      .then(response => {
        console.log('RESPONSE GET BERHASIL', response);
        if (response.status !== 200) {
          dispatch({
            type: GET_CONTACT,
            payload: {
              loading: false,
              data: false,
              errorMessage: response,
            },
          });
        } else {
          // SUKSES GET
          console.log('RESPONSE BERHASIL', response.data);
          dispatch({
            type: GET_CONTACT,
            payload: {
              loading: false,
              data: response.data ? response.data : [],
              errorMessage: false,
            },
          });
        }
      })
      .catch(error => {
        //ERROR HANDLING
        dispatch({
          type: GET_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
        alert(error);
      });
  };
};
