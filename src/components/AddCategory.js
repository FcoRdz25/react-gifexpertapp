


import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        // console.log( e.target.value );
        setInputValue( e.target.value );
    } 

    const handleSumit = ( e ) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            // setCategories( [ inputValue ]);
            setCategories( categorias => [inputValue, ...categorias ]);
            setInputValue('');
        }
        // console.log('Submit hecho');
    }


    return (
        <>
            <form onSubmit={ handleSumit }>
                <input 
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputChange  }
                />
            </form>
        </>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
} 