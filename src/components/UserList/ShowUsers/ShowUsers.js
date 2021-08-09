import classes from './ShowUsers.module.css'
import PropTypes from 'prop-types';

function ShowUsers({users}) {
  return (
    <ul className={classes.activeUserList}>
      {users.map(({id, username}, index) =>
         (<li key={id} className={classes.isOther}> {username + ' id-' + id} </li>)
    )}
    </ul>
  );
}

ShowUsers.propTypes = {
    users: PropTypes.array.isRequired,
}

export default ShowUsers;
