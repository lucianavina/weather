import React from 'react';
import PropTypes from 'prop-types'

const Error = ({messaje}) => {
    return ( 
      <p className='red darken-4 error'>{messaje}</p>
     );
}

Error.propTypes = {
  messaje: PropTypes.string.isRequired
}
 
export default Error;