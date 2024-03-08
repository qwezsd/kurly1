import React from 'react';
import './sass/topModal.scss'

export default function TopModalComponent () {

    const [state, setState] = React.useState(false);

    const onClickMoDal = (e) => {
        e.preventDefault();
        setState(true)
    }

    return (
        <div id='topModal' className={state ? 'off' : ''}>
                <div className="container">
                    <div className="content">
                        <a href="https://www.kurly.com/m2/event/kurlyEventV2.php?lego=event/2023/0911/join/coupon"><h4>지금 가입하고,<strong>1만원 할인 쿠폰</strong>받아가세요!</h4></a>
                        <a href="!#"><img onClick={onClickMoDal} src="./img/intro/icon_X_button.svg" alt="" /></a>
                </div>
            </div>
        </div>
    );
};