import {GET_USER} from '../../actions/UserAction';

const intialState = {
  dataUser: false,
};
export default function (state = intialState, action) {
  switch (action.type) {
    case GET_USER:
      console.log('USER REDUCER is OK', action);
      return {
        ...state,
        dataUser: action.payload,
      };
    default:
      return state;
  }
}
