import React from 'react';

const Header = ({ onAdd } ) => {

  const item = React.createRef();

  const click = (e) => {
    e.preventDefault();
    onAdd(item.current.value);
    item.current.value = null;
  }

  return (
    <form onSubmit={click}>
      <div className="input-group mb-3">
        <input
          required
          ref={item}
          type="text"
          className="form-control"
          placeholder="Write something"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-secondary"
            type="submit"
            id="button-addon2"
          >Add one
          </button>
        </div>
      </div>
    </form>
  );
}

export default Header;
