import React from 'react';

import { WrapContext } from '../wrapContext/WrapContext';

export default function Section7ChildComponent ({ 샐러드, 과일, 계란, 베이커리, 베이비, 전자기기, 헤어, 건강, 주방기구, 리빙, 메인, 면, 반려동물, 해산물, 스킨케어, 간식, 전통주, 채소, 물, 와인}) {

    const {currentViewProduct} = React.useContext(WrapContext);

    const slide = React.useRef();
    const slideBox = React.useRef();
    const [n, setN] = React.useState(0);
    const [state, setState] = React.useState({
        cnt : 0,
        salad : true,
        info : '샐러드·간편식 전체보기',
    })
    const {cnt} = state





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
        slide.current.style.transform = `translateX(${-534 * cnt}px)`
        slide.current.style.transition = `all 0.5s ease-in-out`
    }
    React.useEffect(()=>{
        mainSlide();
    }, [state.cnt])


    const onClickSalad = (e)=> {
        e.preventDefault();
        setState({
            salad : true,
            info : `샐러드·간편식 전체보기`,
            cnt:cnt
        })
    }
    const onClickFruit =(e)=>{
        e.preventDefault();
        setState({
            fruit : true,
            info : `과일·견과·쌀 전체보기`,
            cnt:cnt

        })
    }
    const onClickMain =(e)=>{
        e.preventDefault();
        setState({
            main : true,
            info : `국·반찬·메인요리 전체보기`,
            cnt:cnt

        })
    }
    const onClickHair =(e)=>{
        e.preventDefault();
        setState({
            hair : true,
            info : `헤어·바디·구강 전체보기`,

            cnt:cnt
        })
    }
    const onClickEgg =(e)=>{
        e.preventDefault();
        setState({
            egg : true,
            info : `정육·계란 전체보기`,
            cnt:cnt

        })
    }
    const onClickwater =(e)=>{
        e.preventDefault();
        setState({
            water : true,
            info : `생수·음료·우유·커피 전체보기`,
            cnt:cnt

        })
    }
    const onClickBackery =(e)=>{
        e.preventDefault();
        setState({
            backery : true,
            info : `베이커리·치즈·델리 전체보기`,
            cnt:cnt

        })
    }
    const onClickSkinCare =(e)=>{
        e.preventDefault();
        setState({
            skinCare : true,
            info : `스킨케어·메이크업 전체보기`,
            cnt:cnt

        })
    }
    const onClickVegi =(e)=>{
        e.preventDefault();
        setState({
            vegi : true,
            info : `채소 전체보기`,
            cnt:cnt

        })
    }
    const onClickSeaFood =(e)=>{
        e.preventDefault();
        setState({
            seaFood : true,
            info : `수산·해산·건어물 전체보기`,
            cnt:cnt

        })
    }
    const onClickLiving =(e)=>{
        e.preventDefault();
        setState({
            living : true,
            info : `생활용품·리빙·캠핑 전체보기`,
            cnt:cnt

        })
    }
    const onClickNoodle =(e)=>{
        e.preventDefault();
        setState({
            noodle : true,
            info : `면·양념·오일 전체보기`,
            cnt:cnt

        })
    }
    const onClickKichen =(e)=>{
        e.preventDefault();
        setState({
            kitchen : true,
            info : `주방용품 전체보기`,

            cnt:cnt
        })
    }
    const onClickSnack =(e)=>{
        e.preventDefault();
        setState({
            snack : true,
            info : `간식·과자·떡 전체보기`,
            cnt:cnt

        })
    }
    const onClickTrandi =(e)=>{
        e.preventDefault();
        setState({
            trandi : true,
            info : `전통주 전체보기`,
            cnt:cnt

        })
    }
    const onClickElectro =(e)=>{
        e.preventDefault();
        setState({

            electro : true,
            info : `가전제품 전체보기`,

            cnt:cnt
        })
    }
    const onClickHealth =(e)=>{
        e.preventDefault();
        setState({
            health : true,
            info : `건강식품 전체보기`,
            cnt:cnt

        })
    }
    const onClickBaby =(e)=>{
        e.preventDefault();
        setState({
            baby : true,
            info : `베이비·키즈·완구 전체보기`,
            cnt:cnt

        })
    }
    const onClickWine =(e)=>{
        e.preventDefault();
        setState({
            wine : true,
            info : `와인·위스키 전체보기`,
            cnt:cnt

        })
    }
    const onClickPet =(e)=>{
        e.preventDefault();
        setState({
            pet : true,
            info : `반려동물 전체보기`,
            cnt:cnt

        })
    }
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
    
    <div className="slide-wrap">
    <div className="slide-title">
        <div className="main-title">
            <span>MD의 추천</span>
        </div>
        <div className="sub-title">
            <ul>
                <li><button onClick={onClickSalad} className={state.salad ? 'on' : ''} checked={true} >샐러드·간편식</button></li>
                <li><button onClick={onClickFruit} className={state.fruit ? 'on' : ''}>과일·견과·쌀</button></li>
                <li><button onClick={onClickMain} className={state.main ? 'on' : ''}>국·반찬·메인요리</button></li>
                <li><button onClick={onClickHair} className={state.hair ? 'on' : ''}>헤어·바디·구강</button></li>
                <li><button onClick={onClickEgg} className={state.egg ? 'on' : ''}>정육·계란</button></li>
                <li><button onClick={onClickwater} className={state.water ? 'on' : ''}>생수·음료·우유·커피</button></li>
                <li><button onClick={onClickBackery} className={state.backery ? 'on' : ''}>베이커리·치즈·델리</button></li>
                <li><button onClick={onClickSkinCare} className={state.skinCare ? 'on' : ''}>스킨케어·메이크업</button></li>
                <li><button onClick={onClickVegi} className={state.vegi ? 'on' : ''}>채소</button></li>
                <li><button onClick={onClickSeaFood} className={state.seaFood ? 'on' : ''}>수산·해산·건어물</button></li>
                <li><button onClick={onClickLiving} className={state.living ? 'on' : ''}>생활용품·리빙·캠핑</button></li>
                <li><button onClick={onClickNoodle} className={state.noodle ? 'on' : ''}>면·양념·오일</button></li>
                <li><button onClick={onClickKichen} className={state.kitchen ? 'on' : ''}>주방용품</button></li>
                <li><button onClick={onClickSnack} className={state.snack ? 'on' : ''}>간식·과자·떡</button></li>
                <li><button onClick={onClickTrandi} className={state.trandi ? 'on' : ''}>전통주</button></li>
                <li><button onClick={onClickElectro} className={state.electro ? 'on' : ''}>가전제품</button></li>
                <li><button onClick={onClickHealth} className={state.health ? 'on' : ''}>건강식품</button></li>
                <li><button onClick={onClickBaby} className={state.baby ? 'on' : ''}>베이비·키즈·완구</button></li>
                <li><button onClick={onClickWine} className={state.wine ? 'on' : ''}>와인·위스키</button></li>
                <li><button onClick={onClickPet} className={state.pet ? 'on' : ''}>반려동물</button></li>
            </ul>
        </div>
    </div>
    <div className="slide-content">
        <div ref={slideBox} className="slide-box">
            <ul ref={slide}>
                {state.salad &&
                 샐러드.map ((item, idx)=>{
                    return(
                        <li onClick={(e)=>onClickViewProduct(e, item, './img/section7/salad/')} className="slide" key={item.번호}>
                        <div className="gap">
                            <div className="img-box">
                                <img src={`./img/section7/salad/${item.이미지}`} alt="" />
                                <div className="discount-box">
                                    <h4>15%쿠폰+증정</h4>
                                </div>
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
                                    <em>{Math.round((item.정가 * 1-item.할인율)).toLocaleString('ko-KO')}원</em>
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
                {state.fruit &&
                 과일.map ((item, idx)=>{
                    return(

                        <li onClick={(e)=>onClickViewProduct(e, item, './img/section7/fruit/')} className="slide" key={item.번호}>
                        <div className="gap">
                            <div className="img-box">
                                <img src={`./img/section7/fruit/${item.이미지}`} alt="" />
                                <div className="discount-box">
                                    <h4>15%쿠폰+증정</h4>
                                </div>
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
                                    <em>{Math.round((item.정가 * 1-item.할인율)).toLocaleString('ko-KO')}원</em>
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
                {state.egg &&
                 계란.map ((item, idx)=>{
                    return(

                        <li onClick={(e)=>onClickViewProduct(e, item, './img/section7/egg/')} className="slide" key={item.번호}>
                        <div className="gap">
                            <div className="img-box">
                                <img src={`./img/section7/egg/${item.이미지}`} alt="" />
                                <div className="discount-box">
                                    <h4>15%쿠폰+증정</h4>
                                </div>
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
                                    <em>{Math.round((item.정가 * 1-item.할인율)).toLocaleString('ko-KO')}원</em>
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
                {state.backery &&
                 베이커리.map ((item, idx)=>{
                    return(

                        <li onClick={(e)=>onClickViewProduct(e, item, './img/section7/backery/')} className="slide" key={item.번호}>
                        <div className="gap">
                            <div className="img-box">
                                <img src={`./img/section7/backery/${item.이미지}`} alt="" />
                                <div className="discount-box">
                                    <h4>15%쿠폰+증정</h4>
                                </div>
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
                                    <em>{Math.round((item.정가 * 1-item.할인율)).toLocaleString('ko-KO')}원</em>
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
                {state.baby &&
                 베이비.map ((item, idx)=>{
                    return(

                        <li onClick={(e)=>onClickViewProduct(e, item, './img/section7/baby/')} className="slide" key={item.번호}>
                        <div className="gap">
                            <div className="img-box">
                                <img src={`./img/section7/baby/${item.이미지}`} alt="" />
                                <div className="discount-box">
                                    <h4>15%쿠폰+증정</h4>
                                </div>
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
                                    <em>{Math.round((item.정가 * 1-item.할인율)).toLocaleString('ko-KO')}원</em>
                                </div>
                                <div className="p4">
                                    <img src={`./img/section2/${item.후기이미지}`} alt="" />
                                    <span>{item.후기}</span>
                                </div>
                            </div>
                        </div>
                    </li>

                    )

                })
                }
                {state.electro &&
                 전자기기.map ((item, idx)=>{
                    return(

                        <li onClick={(e)=>onClickViewProduct(e, item, './img/section7/electro/')} className="slide" key={item.번호}>
                        <div className="gap">
                            <div className="img-box">
                                <img src={`./img/section7/electro/${item.이미지}`} alt="" />
                                <div className="discount-box">
                                    <h4>15%쿠폰+증정</h4>
                                </div>
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
                                    <em>{Math.round((item.정가 * 1-item.할인율)).toLocaleString('ko-KO')}원</em>
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
                {state.hair &&
                 헤어.map ((item, idx)=>{
                    return(

                        <li onClick={(e)=>onClickViewProduct(e, item, './img/section7/hair/')} className="slide" key={item.번호}>
                        <div className="gap">
                            <div className="img-box">
                                <img src={`./img/section7/hair/${item.이미지}`} alt="" />
                                <div className="discount-box">
                                    <h4>15%쿠폰+증정</h4>
                                </div>
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
                                    <em>{Math.round((item.정가 * 1-item.할인율)).toLocaleString('ko-KO')}원</em>
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
                {state.health &&
                 건강.map ((item, idx)=>{
                    return(

                        <li onClick={(e)=>onClickViewProduct(e, item, './img/section7/health/')} className="slide" key={item.번호}>
                        <div className="gap">
                            <div className="img-box">
                                <img src={`./img/section7/health/${item.이미지}`} alt="" />
                                <div className="discount-box">
                                    <h4>15%쿠폰+증정</h4>
                                </div>
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
                                    <em>{Math.round((item.정가 * 1-item.할인율)).toLocaleString('ko-KO')}원</em>
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
                {state.kitchen &&
                 주방기구.map ((item, idx)=>{
                    return(

                        <li onClick={(e)=>onClickViewProduct(e, item, './img/section7/kitchen/')} className="slide" key={item.번호}>
                        <div className="gap">
                            <div className="img-box">
                                <img src={`./img/section7/kitchen/${item.이미지}`} alt="" />
                                <div className="discount-box">
                                    <h4>15%쿠폰+증정</h4>
                                </div>
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
                                    <em>{Math.round((item.정가 * 1-item.할인율)).toLocaleString('ko-KO')}원</em>
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
                {state.living &&
                 리빙.map ((item, idx)=>{
                    return(

                        <li onClick={(e)=>onClickViewProduct(e, item, './img/section7/living/')} className="slide" key={item.번호}>
                        <div className="gap">
                            <div className="img-box">
                                <img src={`./img/section7/living/${item.이미지}`} alt="" />
                                <div className="discount-box">
                                    <h4>15%쿠폰+증정</h4>
                                </div>
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
                                    <em>{Math.round((item.정가 * 1-item.할인율)).toLocaleString('ko-KO')}원</em>
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
                {state.main &&
                 메인.map ((item, idx)=>{
                    return(

                        <li onClick={(e)=>onClickViewProduct(e, item, './img/section7/main/')} className="slide" key={item.번호}>
                        <div className="gap">
                            <div className="img-box">
                                <img src={`./img/section7/main/${item.이미지}`} alt="" />
                                <div className="discount-box">
                                    <h4>15%쿠폰+증정</h4>
                                </div>
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
                                    <em>{Math.round((item.정가 * 1-item.할인율)).toLocaleString('ko-KO')}원</em>
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
                {state.noodle &&
                 면.map ((item, idx)=>{
                    return(

                        <li onClick={(e)=>onClickViewProduct(e, item, './img/section7/noodle/')} className="slide" key={item.번호}>
                        <div className="gap">
                            <div className="img-box">
                                <img src={`./img/section7/noodle/${item.이미지}`} alt="" />
                                <div className="discount-box">
                                    <h4>15%쿠폰+증정</h4>
                                </div>
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
                                    <em>{Math.round((item.정가 * 1-item.할인율)).toLocaleString('ko-KO')}원</em>
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
                {state.pet &&
                 반려동물.map ((item, idx)=>{
                    return(

                        <li onClick={(e)=>onClickViewProduct(e, item, './img/section7/pet/')} className="slide" key={item.번호}>
                        <div className="gap">
                            <div className="img-box">
                                <img src={`./img/section7/pet/${item.이미지}`} alt="" />
                                <div className="discount-box">
                                    <h4>15%쿠폰+증정</h4>
                                </div>
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
                                    <em>{Math.round((item.정가 * 1-item.할인율)).toLocaleString('ko-KO')}원</em>
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
                {state.skinCare &&
                 스킨케어.map ((item, idx)=>{
                    return(

                        <li onClick={(e)=>onClickViewProduct(e, item, './img/section7/skinCare/')} className="slide" key={item.번호}>
                        <div className="gap">
                            <div className="img-box">
                                <img src={`./img/section7/skincare/${item.이미지}`} alt="" />
                                <div className="discount-box">
                                    <h4>15%쿠폰+증정</h4>
                                </div>
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
                                    <em>{Math.round((item.정가 * 1-item.할인율)).toLocaleString('ko-KO')}원</em>
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
                {state.snack &&
                 간식.map ((item, idx)=>{
                    return(

                        <li onClick={(e)=>onClickViewProduct(e, item, './img/section7/snack/')} className="slide" key={item.번호}>
                        <div className="gap">
                            <div className="img-box">
                                <img src={`./img/section7/snack/${item.이미지}`} alt="" />
                                <div className="discount-box">
                                    <h4>15%쿠폰+증정</h4>
                                </div>
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
                                    <em>{Math.round((item.정가 * 1-item.할인율)).toLocaleString('ko-KO')}원</em>
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
                {state.trandi &&
                 전통주.map ((item, idx)=>{
                    return(

                        <li onClick={(e)=>onClickViewProduct(e, item, './img/section7/trandi/')} className="slide" key={item.번호}>
                        <div className="gap">
                            <div className="img-box">
                                <img src={`./img/section7/tradi/${item.이미지}`} alt="" />
                                <div className="discount-box">
                                    <h4>15%쿠폰+증정</h4>
                                </div>
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
                                    <em>{Math.round((item.정가 * 1-item.할인율)).toLocaleString('ko-KO')}원</em>
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
                {state.vegi &&
                 채소.map ((item, idx)=>{
                    return(

                        <li onClick={(e)=>onClickViewProduct(e, item, './img/section7/vegi/')} className="slide" key={item.번호}>
                        <div className="gap">
                            <div className="img-box">
                                <img src={`./img/section7/vegi/${item.이미지}`} alt="" />
                                <div className="discount-box">
                                    <h4>15%쿠폰+증정</h4>
                                </div>
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
                                    <em>{Math.round((item.정가 * 1-item.할인율)).toLocaleString('ko-KO')}원</em>
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
                {state.water &&
                 물.map ((item, idx)=>{
                    return(

                        <li onClick={(e)=>onClickViewProduct(e, item, './img/section7/water/')} className="slide" key={item.번호}>
                        <div className="gap">
                            <div className="img-box">
                                <img src={`./img/section7/water/${item.이미지}`} alt="" />
                                <div className="discount-box">
                                    <h4>15%쿠폰+증정</h4>
                                </div>
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
                                    <em>{Math.round((item.정가 * 1-item.할인율)).toLocaleString('ko-KO')}원</em>
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
                {state.wine &&
                 와인.map ((item, idx)=>{
                    return(

                        <li onClick={(e)=>onClickViewProduct(e, item, './img/section7/wine/')} className="slide" key={item.번호}>
                        <div className="gap">
                            <div className="img-box">
                                <img src={`./img/section7/wine/${item.이미지}`} alt="" />
                                <div className="discount-box">
                                    <h4>15%쿠폰+증정</h4>
                                </div>
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
                                    <em>{Math.round((item.정가 * 1-item.할인율)).toLocaleString('ko-KO')}원</em>
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
                {state.seaFood &&
                 해산물.map ((item, idx)=>{
                    return(

                        <li onClick={(e)=>onClickViewProduct(e, item, './img/section7/seaFood/')} className="slide" key={item.번호}>
                        <div className="gap">
                            <div className="img-box">
                                <img src={`./img/section7/seafood/${item.이미지}`} alt="" />
                                <div className="discount-box">
                                    <h4>15%쿠폰+증정</h4>
                                </div>
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
                                    <em>{Math.round((item.정가 * 1-item.할인율)).toLocaleString('ko-KO')}원</em>
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
            <div className="category-box">
                
                <button>{state.info}</button>
            </div>
        </div>

        { cnt>0 &&
            <button onClick={onClickPrevArrow}  className='prev' ><img src="./img/section2/pre_arrow.svg" alt="" /></button>
        }
        {cnt<1 &&
            <button onClick={onClickNextArrow} className='next'><img src="./img/section2/pre_arrow.svg" alt="" /></button>
        } 
    </div>
    </div>
    );
};

