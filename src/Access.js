import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Access({name}) {
    return <button>{name}</button>
};

Access.propTypes = {
    name: PropTypes.string.isRequired
};

export default Access;