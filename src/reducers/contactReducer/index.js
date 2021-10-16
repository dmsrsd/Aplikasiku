import {GET_CONTACT} from '../../actions/ContactAPI';

const intialState = {
  getContactLoading: false,
  getContactResult: false,
  getContactDataError: false,
};
export default function (state = intialState, action) {
  switch (action.type) {
    case GET_CONTACT:
      console.log('CONTACT REDUCER is OK', action);
      return {
        ...state,
        getContactLoading: action.payload.loading,
        getContactResult: action.payload.data,
        getContactDataError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
