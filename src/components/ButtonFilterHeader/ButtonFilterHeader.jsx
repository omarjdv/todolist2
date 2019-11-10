import React from 'react';

const ButtonFilterHeader = ({ onChangeFilter, filterby }) => {
  return(
    <div className="btn-group" role="group" aria-label="Basic example">
    <button
      className={`btn mb-3 btn-sm ${filterby === 'COMPLETED' ? 'btn-success' : 'btn-light'} ` }
      type="submit"
      id="button-addon2"
      onClick={() => { onChangeFilter('COMPLETED') }}
    >Completed
    </button>
    <button
      className={`btn mb-3 btn-sm ${filterby === 'NOT COMPLETED' ? 'btn-success' : 'btn-light '}` }
      type="submit"
      id="button-addon2"
      onClick={() => { onChangeFilter('NOT COMPLETED') }}
    >Not Completed
    </button>
    <button
      className={`btn mb-3 btn-sm ${filterby === 'ALL' ? 'btn-success' : 'btn-light'}` }
      type="submit"
      id="button-addon2"
      onClick={() => { onChangeFilter('ALL') }}
    >All task to do
    </button>
    </div>
  );

}

export default ButtonFilterHeader;
