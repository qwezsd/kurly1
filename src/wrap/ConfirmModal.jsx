import React from 'react';
import './sass/confirm.scss'
import { WrapContext } from './wrapContext/WrapContext';

const ConfirmModal = () => {

    const {confirmModalClose, message} = React.useContext(WrapContext);

    const onClickModakClose =(e)=>{
        e.preventDefault(); 
        confirmModalClose();
    }
    
    return (
        <div id='confirmModal'>
            <div className="container">
                <div className="content">
                    <ul>
                        <li>
                            <h4>{message}</h4>
                        </li>
                        <li>
                            <button onClick={onClickModakClose}>
                                확인
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;