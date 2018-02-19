import React from 'react';
import { Col } from 'reactstrap';
import plus from 'assets/plus.png';
import styles from './styles.css';

const PlusButton = ({ onClick }) => (
    <Col xs='6' className={styles.component}>
        <div className='card' onClick={onClick}>
            <div className='plus-button'>
                <img alt='' src={plus} />
            </div>
        </div>
    </Col>
);

export default PlusButton;
