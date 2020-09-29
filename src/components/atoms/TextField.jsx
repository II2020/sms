import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'rsuite';
const TextField = ({ name, label, accepter, ...props }) => {
    return (
        <FormGroup style={{ width: '100%' }}>
            <ControlLabel>{label} </ControlLabel>
            <FormControl name={name} accepter={accepter} {...props} />
        </FormGroup>
    );
};
export default TextField;
