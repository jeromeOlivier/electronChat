import * as api from '../api/auth';

export const registerUser = (formData) => (dispatch) =>
  api
    .register(formData)
    .then((_) => dispatch({ type: 'AUTH_REGISTER_SUCCESS' }));
    
    export const listenToAuthChanges = () => (dispatch) => {
      dispatch({ type: 'AUTH_ON_INIT' });
      api.onAuthStateChange((authUser) => {
        if (authUser) {
          const user = {
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            avatar: authUser.avatar,
          };
          dispatch({ type: 'AUTH_ON_SUCCESS', user: user });
        } else {
          dispatch({ type: 'AUTH_ON_ERROR' });
        }
      });
    };
