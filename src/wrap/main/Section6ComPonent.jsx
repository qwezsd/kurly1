import React from 'react';
import './sass/section6.scss'
import axios from 'axios';

import { WrapContext } from '../wrapContext/WrapContext';

export default function Section6ComPonent () {

    const { currentViewProduct } = React.useContext( WrapContext );


    const slide = React.useRef();
    const slideBox = React.useRef();
    const [n, setN] = React.useState(0);
    const [state, setState] = React.useState({
        cnt : 0,
        슬라이드 : []
    })
    const {cnt, 슬라이드} = state

    const onClickPrevArrow = (e) => {
        e.preventDefault();
        setState({
            ...state,
            cnt : state.cnt-1
        })
    }
    const onClickNextArrow = (e) => {
        e.preventDefault();
        setState({
            ...state,
            cnt : state.cnt+1
        })
    }
    //메인 슬라이드
    const mainSlide = () => {
        slide.current.style.transform = `translateX(${-1068 * cnt}px)`
        slide.current.style.transition = `all 0.6s ease-in-out`
    }
    React.useEffect(()=>{
        mainSlide();
    }, [state.cnt])


    axios({
        url: './data/section/section6.json',
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

    const [product, setProduct] = React.useState([]);
    const [flag, setFlag] = React.useState(false);
    
    
    const onClickViewProduct=(e, item, imgPath)=>{
        e.preventDefault();
        currentViewProduct(item, imgPath);
    }
    return (
        <div id='section6'>
            <div className="slide-container">
                <div className="slide-view">
                    <div className="slide-wrap">
                        <div className="slide-title">
                            <div className="main-title">
                                <span>이 상품 어때요?</span>
                                <img src="./img/section2/icon_next_arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="slide-content">
                            <div ref={slideBox} className="slide-box">
                                <ul ref={slide}>
                                    { state.슬라이드.map ((item, idx)=>{
                                        return(

                                            <li onClick={(e)=>onClickViewProduct(e, item, './img/section6/')} className="slide" key={item.번호}>
                                            <div className="gap">
                                                <div className="img-box">
                                                    <img src={`./img/section6/${item.이미지}`} alt="" />
                                                   
                                                </div>
                                                <div className="btn-box">
                                                    <button>
                                                        <img src="./img/section2/cart_mark.svg" alt="" />
                                                        <h4>담기</h4>
                                                    </button>
                                                </div>
                                                <div className="txt-box">
                                                    <div className="p1"><h3>{item.상품명}</h3></div>
                                                    <div className="p2"><h5>{item.정가.toLocaleString('ko-KO')}원</h5></div>
                                                    <div className="p3">
                                                        <strong>{Math.round(item.할인율 * 100)}%</strong>
                                                        <em>{Math.round((item.정가 * (1-item.할인율))).toLocaleString('ko-KO')}원</em>
                                                    </div>
                                                    <div className="p4">
                                                        <img src="./img/section2/mention.svg" alt="" />
                                                        <span>{item.후기}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        )

                                    })
                                    }
                                </ul>
                            </div>
                            { cnt>0 &&
                            <button onClick={onClickPrevArrow}  className='prev' ><img src="./img/section2/pre_arrow.svg" alt="" /></button>
                        }
                        {cnt<3 &&
                            <button onClick={onClickNextArrow} className='next'><img src="./img/section2/pre_arrow.svg" alt="" /></button>
                        } 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};