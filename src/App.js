import classes from './App.module.css';
import React from 'react';

import LoginField from './components/LoginField/LoginField.js'
import UserList from './components/UserList/UserList.js'
// import Modal from './components/Modal/Modal.js'

import reducer from './reducer';

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'


function App() {
  //состояние входа, логина (псевдонима) и списка загруженных пользователей
  const [state, dispatch] = React.useReducer(reducer, {
   joined: false,
   username: null,
   users: [],
  });

  //состояние загрузки пользователей
  const [loading, setLoading] = React.useState(false);

//функция выполняется при успешном заходе в комнату
  const onLogin = async (obj) => {
    dispatch({
          type: 'JOINED',
          payload: obj,
    });
    console.log('some1 has joined');
  }

  return (
    <Router>
      <div className={classes.wrapper}>
            {!state.joined
            ?(
                  <Redirect to={'/'}/>
             )
            :(
                  <Redirect to={'/userList'}/>
            )}
      </div>
      <Route exact path={'/userList'}>
        <UserList {...state} loading={loading}/>
      </Route>
      <Route exact path={'/'}>
        <LoginField onLogin={onLogin} setLoading={setLoading}/>
      </Route>
    </Router>
  );
}

export default App;
