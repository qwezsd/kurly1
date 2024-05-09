import React from 'react';
import './sass/header.scss'
import {Link, Outlet, useLocation} from 'react-router-dom'
import WrapComponent from './WrapComponent';
import { WrapContext } from './wrapContext/WrapContext';

export default function HeaderComponent () {

    const {addressSearchOpen, 주소1, 주소2} = React.useContext(WrapContext)
    const {pathname} = useLocation();
    const [state, setState] = React.useState({
        notice : false,
        map : false
    })
    const refRow3 = React.useRef()

    const onMouseEnterClient = () => {
        setState({
            ...state,
            notice : true
        })
    }

    const onMouseLeaveClient = () => {
        setState({
            ...state,
            notice : false
        })
    }

    const onMouseEnterMap = () => {
        setState({
            ...state,
            map: true
        })
    }

    const onMouseLeaveMap = () => {
        setState({
            ...state,
            map: false
        })
    }
    
    const onClickAddressSearch=(e)=>{
        e.preventDefault();
        addressSearchOpen();
    }

    //스크롤 탑값이 헤더 row3 탑값에 도달하면 고정 row3 탑값 === 140

    React.useEffect(()=>{

        // console.log(window.scrollY)
        let row3OffSetTop = refRow3.current.offsetTop

        window.addEventListener('scroll', function(){
            let isfixed = false;
            if(window.scrollY > row3OffSetTop){
                isfixed  = true
            }
            else {
                isfixed = false;
            }
            setState({
                ...state,
                isfixed : isfixed
            })
        })
    })
    return (
        <>
        <div id='header'>
            <div className="wrap">
                <div className="container">
                    <div className="content">
                        <div className="row1">
                            <Link to="/sub5"><h4 className='signUp'>회원가입</h4></Link>
                            <i>|</i>
                            <Link to="/sub6"><h4>로그인</h4></Link>
                            <i>|</i>
                            <h4 className='clientNotice' onMouseEnter={onMouseEnterClient} onMouseLeave={onMouseLeaveClient}>고객센터<img src="./img/header/ico_down_16x10.jpg" alt="" />
                            {
                                state.notice && 
                            
                            <div className="notice-box" onMouseEnter={onMouseEnterClient}  onMouseLeave={onMouseLeaveClient}>
                                <li><a href="#">공지사항</a></li>
                                <li><a href="#">자주하는 질문</a></li>
                                <li><a href="#">1:1 문의</a></li>
                                <li><a href="#">대량주문 문의</a></li>
                            </div>
                            
                            }
                            </h4>
                            
                        </div>
                        <div className="row2">
                            <div className="left">
                                <Link to="/index"><img src="./img/header/main_title.svg" alt="" /></Link>
                                <h3>마켓컬리</h3>
                                <i>|</i>
                                <h3 className='beauty'>뷰티컬리</h3>
                                <img className='n_mark' src="./img/header/n_mark.svg" alt="" />
                            </div>
                            <div className={`center ${state.isfixed ? 'on' : ''}`}>
                                <input type="text" placeholder='검색어를 입력해주세요'/>
                                <img src="./img/header/zoom_purple.svg" alt="" />
                            </div>
                            <div className={`right ${state.isfixed ? 'on' : ''}`}>
                                <div className="icon-box">
                                    <li className='mapIcon' onMouseEnter={onMouseEnterMap} onMouseLeave={onMouseLeaveMap}><img src="./img/header/map_mark.svg" alt="" />

                                    {state.map &&
                                    <div className="map-box" onMouseLeave={onMouseLeaveMap}>
                                        {
                                        주소1!=='' && <>
                                        <div className="add-box">
                                            <span>
                                                {주소1}
                                            </span>
                                            <span>
                                                {주소2}
                                            </span>
                                                <br />
                                            
                                        </div></>
                                        }
                                        <h3><strong>배송지를 등록</strong>하고<br />구매 가능한 상품을 확인하세요!</h3>
                                        <div className="btn-box">
                                            <button>로그인</button>
                                            <button onClick={onClickAddressSearch}><img src="./img/header/icon_small_zoom.jpg" alt="" /> 주소 검색</button>
                                        </div>
                                    </div>
                                    }

                                    </li>
                                    <li><img className='center_icon' src="./img/header/heart_mark.svg" alt="" /></li>
                                    <li><img src="./img/header/cart_mark.svg" alt="" /></li>
                                </div>
                            </div>
                        </div>
                        <div className={`row3 ${state.isfixed ? 'on' : ''}`}ref={refRow3}>
                            <div className='row3-box' >
                                <div className={`left ${state.isfixed ? 'on' : ''}`}>
                                    <img src="./img/header/list_mark.svg" alt="" />
                                    <h3>카테고리</h3>
                                </div>
                                <div className={`center ${state.isfixed ? 'on' : ''}`}>
                                    <div className="center-box">
                                        <Link to="/sub1" className={pathname==='/sub1' ? 'on' : ''}><h3>신상품</h3></Link>
                                        <Link to="/sub2" className={pathname==='/sub2' ? 'on' : ''}><h3>베스트</h3></Link>
                                        <Link to="/sub3" className={pathname==='/sub3' ? 'on' : ''}><h3>알뜰쇼핑</h3></Link>
                                        <Link to="/sub4" className={pathname==='/sub4' ? 'on' : ''}><h3>특가/혜택</h3></Link>
                                    </div>
                                </div>
                                <div className={`right ${state.isfixed ? 'on' : ''}`}>
                                    <div className="right-box">
                                        <strong>샛별・택배</strong>
                                        <h4>배송안내</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Outlet />
        </>
    );
};