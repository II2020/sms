import React, { useState } from 'react';
import { Modal, Icon } from 'rsuite';
import CustomButton from '../../components/atoms/CustomButton';

const AllPromotionUI = () => {
    const [show, setShow] = useState('false');
    const close = () => {
        setShow(false);
    };
    return (
        <div className="modal-container">
            <Modal backdrop="static" show={show} onHide={close} size="xs">
                <Modal.Body>
                    <Icon
                        icon="remind"
                        style={{
                            color: '#ffb300',
                            fontSize: 24,
                        }}
                    />
                    {'  '}
                    Are you sure you want to promote all students?
                </Modal.Body>
                <Modal.Footer>
                    <CustomButton onClick={close} text="OK" />
                    <CustomButton
                        onClick={close}
                        text="Cancel"
                        style={{ backgroundColor: 'white', color: 'black', border: '1px solid black' }}
                    />
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default AllPromotionUI;
