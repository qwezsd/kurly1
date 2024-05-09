import React from 'react';
import './sass/sub6.scss'
import {Link} from 'react-router-dom'

export default function Sub6Component () {
    return (
        <div id="sub6">
            <div className="container">
                <div className="title">
                    <h2>로그인</h2>
                </div>
                <div className="content">
                    <div className="log-in">
                        <input placeholder='아이디를 입력해주세요' type="text" />
                        <input placeholder='비밀번호를 입력해주세요' type="text" />
                    </div>
                    <div className="find">
                        <Link to="/sub7"><h4>아이디 찾기</h4></Link>
                        <i>|</i>
                        <Link to="/sub8"><h4>비밀번호 찾기</h4></Link>
                    </div>
                    <div className="btn">
                        <button className='logIn'>로그인</button>
                        <button className='signUp'>회원가입</button>
                    </div>
                </div>
            </div>
        </div>
    );
};