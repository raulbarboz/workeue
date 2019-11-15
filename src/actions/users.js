import database, { authProvider } from '../firebase/firebase.js';

// CREATE USER
export const createUser = (user) => ({
    type: 'ADD_USER',
    user
})

export const startCreateUser = (userData = {}) => {
  return (dispatch) => {
    const {
      name = '',
      lastName = '',
      email = '',
      password = '',
      subdomain=''
    } = userData;

    //store Data
    const userInput = { name, lastName, email, subdomain }

    //create new User
    return authProvider
    .createUserWithEmailAndPassword(email, password)
    .then(({user}) => {

        //Saving User Info In Database
        return database.ref(`users`)
        .child(user.uid)
        .set({...userInput})
        .then(() => {

          //Updatind User Info Of Redux User Store 
          return dispatch(createUser({
            id: user.uid,
            ...userInput
          }))
        })

    })

    //If something goes wrong
    .catch(function(error) { 

    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;


    if (errorCode == 'auth/weak-password') {
        return {error:'The password is too weak.'};
    } else {
        return {error: errorMessage};
    }
       return {error: error};
    });

  }
}


export const login = (uid) => ({
  type: 'LOGIN',
  uid
})

export const logout = () => ({
  type: 'LOGOUT'
})

export const startLogin = (email, password) => {
    return (dispatch) => {
        return authProvider.signInWithEmailAndPassword(email, password)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            
            return { errorCode , errorMessage}
        }).then((user)=>{
            const uid = user.user.uid
            const { errorCode } = user;
            if(errorCode){
                return errorCode;
            }
            if(!errorCode){
                dispatch(login(uid))
                localStorage.setItem('uid', uid)
            }
        })
    }
}

export const startLogout = () => {
  return () => {
      return firebase.auth().signOut();
  }
}