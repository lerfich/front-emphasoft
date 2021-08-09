import React from 'react';
import PropTypes from 'prop-types';
import classes from './UserList.module.css'
import Loader from '../Loader/Loader.js'
import ShowUsers from './ShowUsers/ShowUsers.js'
import SwitchSorter from './SwitchSorter/SwitchSorter.js'
import Filters from './Filters/Filters.js'
import Search from './Search/Search.js'


function UserList({ users, username, loading}) {

  //состояние для вида сортировки пользователей
  const [sortBy, setSortType] = React.useState(null);

  //состояние для отображения отфильтрованных пользователей
  const [filteredUsers, setFilter] = React.useState(users);

  const [partName, setPart] = React.useState('');

  //функция для актуализации отсортированных пользователей
  const onSort = (whichSort) => {
    setSortType(whichSort);
  }

  //функция для актуализации отфильтрованных пользователей
  const onFilter = (filteredArray) => {
    setFilter(filteredArray)
  }

  const onSearch = (partName) => {
    setPart(partName)
  }

  //сортировка пользователей по одному из трех параметров
  const sortUsers = (filtered) => {
    switch (sortBy) {
      case 'asc':{
        const sortedUsers = filtered.slice();
        return sortedUsers.sort((a, b) => a.id > b.id ? 1 : -1);
      }
      case 'desc':{
        const sortedUsers = filtered.slice();
        return sortedUsers.sort((a, b) => a.id > b.id ? -1 : 1);
      }

      case 'byName':{
        const sortedUsers = filtered.slice();
        return sortedUsers.sort((a, b) => a.username > b.username ? 1 : -1);
      }

      default:
        return filtered;
    }
  }

  return (
      <div className={classes.box}>

        <div className={classes.userList}>
          Вы зашли в хаб:)
          <hr/>
          <Filters onFilter={onFilter} users={users} partName={partName}/>
          <SwitchSorter onSort={onSort}/>
          <Search onSearch={onSearch}/>
          <b>Онлайн ({filteredUsers.length}):</b>
          <ShowUsers users={sortUsers(filteredUsers)}/>
          <Loader loading={loading}/>
        </div>
        <div> Hello, {username} </div>
      </div>
  );
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
    username: PropTypes.string,
    loading: PropTypes.bool.isRequired,
}

export default UserList;
