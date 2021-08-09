import PropTypes from 'prop-types';
import React from 'react';
import Switcher from '../Switcher/Switcher.js'

function Filters({onFilter, users, partName}) {

  //состояния для хранения отображения активных пользователей, суперюзеров и всех участников
  const [showActive, setActive] = React.useState(false)
  const [showSuperuser, setSuperuser] = React.useState(false);
  const [showAll, setAll] = React.useState(false);

  //обработчики нажатий на кнопки фильтров
  const addFilter = (filter) => {
    switch (filter) {
      case 'is_active':{
        setActive(!showActive);
        return
      }

      case 'is_superuser':{
        setSuperuser(!showSuperuser);
        return
      }

      case 'is_all':{
        setAll(!showAll);
        return
      }

      default:
        return
    }
  }

  //поиск пользователей по части имени
  const findUser = (partName, usersToFilter) => {
    if (!partName.trim()) return usersToFilter
    else {
        const result = usersToFilter.filter((user) => user.username.toLowerCase().includes(partName.toLowerCase()))
        return result
    }
  }

  //Проверка одного из состояний фильтров и отправка соответстующих пользователей для отображения
  React.useEffect(() => {
    if(showAll) {
      onFilter(findUser(partName, users));
    } else {
      if(showActive & showSuperuser){
        const filteredUsers = users.filter((user) => {
          return (user.is_active === true) & (user.is_superuser === true);
        });
        onFilter(findUser(partName, filteredUsers));
      }else if(showActive & !showSuperuser){
        const filteredUsers = users.filter((user) => {
          return (user.is_active === true) & (user.is_superuser === false);
        });
        onFilter(findUser(partName, filteredUsers));
      }else if(!showActive & showSuperuser){
        const filteredUsers = users.filter((user) => {
          return (user.is_active === false) & (user.is_superuser === true);
        });
        onFilter(findUser(partName, filteredUsers));
      }else if(!showActive & !showSuperuser){
        const filteredUsers = users.filter((user) => {
          return (user.is_active === false) & (user.is_superuser === false);
        });
        onFilter(findUser(partName, filteredUsers));
      }
    }
  }, [showActive, showSuperuser, showAll, partName]);

  return (
    <div>
        <Switcher id={'customAll'} checked={showAll} addFilter={addFilter} text={'show all'} toShow={'is_all'} disabled={false}/>
        <Switcher id={'customActive'} checked={showActive} addFilter={addFilter} text={'filter active'} toShow={'is_active'} disabled={showAll}/>
        <Switcher id={'customSuper'} checked={showSuperuser} addFilter={addFilter} text={'filter superuser'} toShow={'is_superuser'} disabled={showAll}/>
    </div>
  );
}

Filters.propTypes = {
    onFilter: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    partName: PropTypes.string.isRequired
}

export default Filters;
