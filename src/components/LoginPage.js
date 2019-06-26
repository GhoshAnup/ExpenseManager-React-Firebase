import React from 'react';
import {connect} from 'react-redux';
import { startLogin } from '../actions/auth';
//import { firebase, googleAuthProvider } from '../firebase/firebase';

export const LoginPage = ({startLogin}) => (   
    <div>
      <button onClick={startLogin}>Login</button>
    </div>
  );
  const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
  });  
  export default connect(undefined, mapDispatchToProps)(LoginPage);

// export const LoginPage = () => (
//     <div>
//       <button onClick={startLogin}>Login</button>
//     </div>
//   );

//   const startLogin = () => {
//     firebase.auth().signInWithPopup(googleAuthProvider);
// }
// export default LoginPage;
