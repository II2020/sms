import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'rsuite';
const TextField = ({ name, label, accepter, className, onChange, ...props }) => {
    return (
        <FormGroup style={{ width: '100%' }}>
            <ControlLabel style={{ color: 'black' }}>{label} </ControlLabel>
            <FormControl className={className} name={name} accepter={accepter} {...props} onChange={onChange} />
        </FormGroup>
    );
};
export default TextField;
