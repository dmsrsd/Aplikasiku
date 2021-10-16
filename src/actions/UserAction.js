export const GET_USER = 'GET_USERS';

export const getUser = () => {
  return dispatch => {
    dispatch({
      type: GET_USER,
      payload: {
        firstName: 'Bopak',
        lastName: 'Castello',
        age: '200',
        photo: false,
      },
    });
  };
};
