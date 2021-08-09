import PropTypes from 'prop-types';

function IdSortSwitch({onSort}) {
  return (
    <div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="xd" id="inlineRadio1" onClick={() => {onSort('asc')}}/>
        <label className="form-check-label" htmlFor="inlineRadio1" >by asc id</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="xd" id="inlineRadio2" onClick={() => {onSort('desc')}}/>
        <label className="form-check-label" htmlFor="inlineRadio2">by desc id</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="xd" id="inlineRadio3" onClick={() => {onSort('byName')}}/>
        <label className="form-check-label" htmlFor="inlineRadio3">by name</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="xd" id="inlineRadio4" onClick={() => {onSort(null)}} defaultChecked/>
        <label className="form-check-label" htmlFor="inlineRadio4">default</label>
      </div>
    </div>
  );
}

IdSortSwitch.propTypes = {
    onSort: PropTypes.func.isRequired,
}

export default IdSortSwitch;
