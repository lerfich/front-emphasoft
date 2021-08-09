import PropTypes from 'prop-types';

function Switcher({id, checked, addFilter, toShow, text, disabled}) {
  return (
    <div className='custom-control custom-switch'>
      <input
        type='checkbox'
        className='custom-control-input'
        id={id}
        checked={checked}
        onChange={() => addFilter(toShow)}
        disabled={disabled}
      />
      <label className='custom-control-label' htmlFor={id}>
        {text}
      </label>
    </div>
  );
}

Switcher.propTypes = {
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    addFilter: PropTypes.func.isRequired,
    toShow: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
}

export default Switcher;
