import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../actions/users';

import { authProvider } from '../firebase/firebase.js';

const Container = ({ children }) => {
      const dispatch = useDispatch()
      useEffect(() => {
        authProvider.onAuthStateChanged(function(user) {
          if (user) {        
            dispatch(login(user.uid))
          } else {
            dispatch(logout())
          }
        });
      })
      return children;
}

export default Container;