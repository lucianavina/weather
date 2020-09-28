import React, { useState } from 'react';
import Error from '../Error/index'

import PropTypes from 'prop-types'

const Form = ({search, saveSearch, saveCall}) => {



    const [error, saveError] = useState (false)
    
    // get city and country

    const {city, country} = search
    
    //function to put the elemnts on the state

    const handleChange = e => {
        // update state

        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }    

    //Submitting form

    const handeSubmit = e => {
        e.preventDefault()

        //check

        if (city.trim() === '' || country.trim() === '') {
            saveError(true)
            return
        }

        saveError(false)

        //send it to the main component


        saveCall(true)


    }


    return ( 
        <form
            onSubmit={handeSubmit}
        >
            {error ? <Error messaje='Ambos campos son obligatorios'/>:null}
            
            <div className='input-field col s12'>
                <input 
                    type='text'
                    name='city'
                    id='city'
                    value={city}
                    onChange={handleChange}

                />
                <label htmlFor='city'>Ciudad: </label>
            </div>
            <div className='input-field col s12'>
                <select
                    name='country'
                    id='country'
                    value={country}
                    onChange={handleChange}
                >
                    <option value=''>-- Seleccione un País --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor='country'>País: </label>
            </div>

            <div className='input-fielf col s12'>
                <input
                    type='submit'
                    value='Buscar Clima'
                    className='waves-effect waves-ligth btn-large btn-block yellow accent-4'></input>
            </div>
        </form>
        );
}

Form.propTypes = {
    search: PropTypes.object.isRequired,
    saveSearch: PropTypes.func.isRequired,
    saveCall: PropTypes.func.isRequired
}
 
export default Form;