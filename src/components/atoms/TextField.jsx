import React from 'react';
import { FormGroup, ControlLabel, FormControl, Row, Col } from 'rsuite';
const TextField = ({ name, label, accepter, className, onChange, ...props }) => {
    return (
        <FormGroup style={{ width: '100%' }}>
            <Row>
                <Col md={12}>
                    <ControlLabel
                        style={{ color: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}
                    >
                        {label}{' '}
                    </ControlLabel>
                </Col>
                <Col md={12}>
                    <FormControl className={className} name={name} accepter={accepter} {...props} onChange={onChange} />
                </Col>
            </Row>
        </FormGroup>
    );
};
export default TextField;
