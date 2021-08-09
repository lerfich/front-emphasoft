import PropTypes from 'prop-types';
import React from 'react';

function Search({onSearch}) {

  //состояния для хранения отображения активных пользователей, суперюзеров и всех участников
  const [partName, setPart] = React.useState('')

  //при нажатии на Enter выполняется попытка входа в комнату
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Enter':
        onSearch(partName);
        break;
      default: break;
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  })

  return (
    <div className="input-group rounded">
      <input className="form-control rounded" aria-label="Search"
      aria-describedby="search-addon"
      type="text"
      placeholder="Искать пользователя"
      value={partName}
      onChange={(e) => setPart(e.target.value)}/>
      <span className="input-group-text border-0" id="search-addon">
      <button className="bi bi-search" onClick={() => onSearch(partName)}>  </button>
      </span>
    </div>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default Search;
