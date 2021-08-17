import classes from './App.module.css';
import React from 'react';
import LoginField from './components/LoginField/LoginField.js'
import UserList from './components/UserList/UserList.js'

import { useEffect, useRef } from 'react';

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

  function onTelegramAuth(user) {
    alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://telegram.org/js/telegram-widget.js?15";
    script.setAttribute('data-telegram-login', "Lin444Bot");
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-request-access', 'write');
    // script.setAttribute('data-userpic', true);
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    script.async = true;
    document.getElementById('root').appendChild(script)
    // this.instance.appendChild(script);

  });

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
