import React from 'react';
// import  rand  from './../function/randint.js'
import PropTypes from 'prop-types';
import classes from './LoginField.module.css'
import Modal from '../Modal/Modal.js'
import { client } from '../../utils/client.js'
import { saveAuthToken } from '../../utils/getAuthToken.js'


function LoginField({onLogin, setLoading}){

  //состояния имени пользователя, пароля и загрузки
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  //состояние для модального окна и контента в нем
  const [isModal, setModal] = React.useState(false);
  const [content, setContent] = React.useState(null);

  //функция для закрытия модального окна
  const onClose = () => setModal(false);

  //валидация данных
  const joinRoom = async () => {
    if(!!username.trim() === false) {
        setContent('Введите имя')
        setModal(true);
        return;
    }else if(!!password.trim() === false) {
        setContent('Введите пароль')
        setModal(true);
        return;
    }else if(username !== 'test_super' | password !== 'Nf<U4f<rDbtDxAPn') {
      setContent('Вы ввели неверный логин или пароль')
      setModal(true);
      return;
    }

    //сохраняем данные в localStorage
    saveAuthToken(
      {
        "username": `${username}`,
        "password": `${password}`
      }
    );

    setLoading(true);

    //отправляем запрос на получение списка пользователей
    const users = await client.get('http://emphasoft-test-assignment.herokuapp.com/api/v1/users/')

    const obj = {
      username,
      users
    }
    onLogin(obj);
    setLoading(false);
  }

  //при нажатии на Enter выполняется попытка входа в комнату
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Enter':
        joinRoom();
        break;
      default: break;
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  })

  return (
      <div className={classes.loginBlock}>
        <Modal
            visible={isModal}
            content={content}
            footer={<button onClick={onClose}>Закрыть</button>}
            onClose={onClose}
        />
        <input
          type="text"
          placeholder="Введите логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={joinRoom}>
           Войти
        </button>
      </div>
  );
}

LoginField.propTypes = {
  onLogin: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
}

export default LoginField;
