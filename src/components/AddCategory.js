import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputValue = ( e ) => {
    setInputValue( e.target.value );
  }

  const handleSubmit = ( e ) => {
    e.preventDefault();
    if ( inputValue.trim() ) {
      setCategories( cats => [ inputValue, ...cats] );
      setInputValue('')  ;
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        value={ inputValue }
        placeholder="Escriba una categoria y enter..."
        onChange={ handleInputValue }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}
