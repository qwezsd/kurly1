import React from 'react';
import './sass/section4.scss'
import axios from 'axios';

import { WrapContext } from '../wrapContext/WrapContext';

export default function Section4ComPonent () {


    const { currentViewProduct } = React.useContext( WrapContext );

    // const [cnt, setCnt] = React.useState(0)
    const slide = React.useRef();
    const slideBox = React.useRef();
    const [n, setN] = React.useState(0);
    const [state, setState] = React.useState({
        cnt : 0,
        슬라이드 : []
    })
    const [state2, setState2] = React.useState({

        H:0,
        M:0,
        S:0
    })
    const {cnt, 슬라이드} = state

    //메인 슬라이드
    const mainSlide = () => {
        slide.current.style.transform = `translateX(${-1068 * cnt}px)`
        slide.current.style.transition = `all 0.3s ease-in-out`
    }
    React.useEffect(()=>{
        mainSlide();
    }, [state.cnt])


    axios({
        url: './data/section/section4.json',
        method : 'GET'
    })
    .then((res)=>{
        setState({
            ...state,
            슬라이드: res.data.슬라이드
        })
    })
    .catch((err)=>{
    })


    React.useEffect(()=>{
        let startTime = new Date("2023-11-07 11:00:00")//타임 세일 시작일시
        let nowTime = new Date(); //현재 일시
            startTime = (startTime.setHours(startTime.getHours() + 24)) // 시간 세터함수 + 24
        let endTime = startTime - nowTime;

        let H = Math.floor(endTime/(60*60*1000)%24)// 나머지 시간
        let M = Math.floor(endTime/(60*1000)%60)// 나머지 분
        let S = Math.floor(endTime/(1000)%60)// 나머지 초
        
    function timeSaleFn(){
        nowTime = new Date();
        endTime = startTime - nowTime;
        let H = Math.floor(endTime/(60*60*1000)%24)// 나머지 시간
        let M = Math.floor(endTime/(60*1000)%60)// 나머지 분
        let S = Math.floor(endTime/(1000)%60)// 나머지 초


        if(nowTime >= startTime) { //현재 시간이 시작 시간보다 크거나 같다면 타임세일종료
            //startTime은 + 24 해서 11월 8일로 되버림 그래서 현재 시간이 시작시간보다 더 크면 타임세일 종료인 거임 알겠어?!!?!?
            setState2({
                ...state,
                H:0,
                M:0,
                S:0
            })
        }
        else {
            setState2({
                ...state,
                H:H,
                M:M,
                S:S
            })
        }
    }
        setInterval(timeSaleFn, 1000)
    }, [state2.H, state2.M, state2.S])
    const [product, setProduct] = React.useState([]);
    const [flag, setFlag] = React.useState(false);
    // 1. 최근 본 상품 클릭 이벤트
    // 누르면 개발바모드 컴포넌트에서 후입선출, 

    // 1. 최근 본 상품 클릭 이벤트
    const onClickViewProduct=(e, item, imgPath)=>{
        e.preventDefault();
        currentViewProduct(item, imgPath);
    }
    return (
        <div id='section4'>
            <div className="slide-container">
                <div className="slide-view">
                    <div className="slide-wrap">
                        <div className="slide-title">
                            
                        </div>
                        <div className="slide-content">
                            <div ref={slideBox} className="slide-box">
                                <ul ref={slide}>
                                    <li className="slide" >
                                        <div className="gap">
                                            <div className="text1">
                                                <h2>🥇뷰컬페 1주년 일일특가</h2>
                                            </div>
                                            <div className="text2">
                                                <h4>24시간 한정 일일특가</h4>
                                                </div>
                                                <div className="text3">
                                                     <img src="./img/section3/clock.svg" alt="" />
                                                    <h2>{state2.H <10 ? `0${state2.H}` : state2.H}</h2>
                                                    <i>:</i>
                                                    <h2>{state2.M <10 ? `0${state2.M}` : state2.M}</h2>
                                                    <i>:</i>
                                                    <h2>{state2.S <10 ? `0${state2.S}` : state2.S}</h2>
                                                </div>
                                                <div className="text4">
                                                    <h5>망설이면 늦어요!</h5>
                                                </div>
                                            </div>
                                        </li>


                                    { state.슬라이드.map ((item, idx)=>{
                                        return(

                                            <li onClick={(e)=>onClickViewProduct(e, item, './img/section4/')} className="slide" key={item.번호}>
                                                <div className="gap">
                                                    <div className="img-box">
                                                        <img src={`./img/section4/${item.이미지}`} alt="" />
                                                        <div className="discount-box">
                                                            <h4>{item.쿠폰}</h4>
                                                        </div>
                                                    </div>
                                                    <div className="btn-box">
                                                        <button>
                                                            <img src="./img/section2/cart_mark.svg" alt="" />
                                                            <h4>담기</h4>
                                                        </button>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="p2">
                                                            {item.상세보기}
                                                        </div>
                                                        <div className="p1"><h3>{item.상품명}</h3></div>
                                                        <div className="p3">
                                                            <strong>{item.할인율 * 100}%</strong>
                                                            <em>{Math.round(item.정가 *(1-item.할인율)).toLocaleString('ko-KO')}</em>
                                                            <span>{(item.정가.toLocaleString('ko-KO'))}원</span>
                                                        </div>
                                                        <div className="p4">
                                                            <img src="./img/section2/mention.svg" alt="" />
                                                            <span>{item.후기.toLocaleString('ko-KO')}+</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                         )
                                    })
                                    } 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};