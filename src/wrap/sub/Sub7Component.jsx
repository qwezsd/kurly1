import React from 'react';
import './sass/sub7.scss'

export default function Sub7Component () {

    const [state, setState] = React.useState({
        phone : true,
        eMail: false
    })

    const onClickphone = () => {
        setState({
            phone: true,
            eMail : false
        })
    }
    const onClickEmail = () => {
        setState({
            phone: false,
            eMail : true
        })
    }
    return (
        <div id='sub7'>
            <div className="container">
                <div className="title">
                    <h2>아이디 찾기</h2>
                </div>
                <div className="content">
                    <div className="name-title">
                        <h3 onClick={onClickphone} className={state.phone ? 'on' : 'off'}>휴대폰 인증</h3>
                        <h3 onClick={onClickEmail} className={state.eMail ? 'on' : 'off'}>이메일 인증</h3>
                    </div>
                    {
                    state.phone  &&
                        <div className="phone">
                        <ul>
                            <li>
                                <div className="gap">
                                    <label htmlFor="">이름</label>
                                    <input type="text" placeholder='이름을 입력해주세요'/>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <label htmlFor="">휴대폰 번호</label>
                                    <input type="text" placeholder='휴대폰 번호를 입력해주세요'/>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <button>인증번호 받기</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    }
                   {
                   state.eMail && 
                    <div className="eMail">
                        <ul>
                            <li>
                                <div className="gap">
                                    <label htmlFor="">이름</label>
                                    <input type="text" placeholder='이름을 입력해주세요'/>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <label htmlFor="">이메일</label>
                                    <input type="text" placeholder='이메일을 입력해주세요'/>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <button>확인</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};