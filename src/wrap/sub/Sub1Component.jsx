import React from 'react';
import './sass/sub1.scss'
import axios from 'axios';
import Sub1ChildComponent from './Sub1ChildComponent';
import { WrapContext } from '../wrapContext/WrapContext';

export default function Sub1Component (){

    const {currentViewProduct} = React.useContenxt(WrapContext)

const [state, setState] = React.useState({
    category: true,
    brand : false,
    price : false,
    type : false,
    benefit : false,
    excliude : false,

    issub1 : true,
    issub2 : true,
    issub3 : true,
    issub4 : true,
    issub5 : true,
    issub6 : true,

    comment : false,
    슬라이드:[]
})
const [state2, setState2] = React.useState({

    manyProduct : false,
    EveryAbc : true,
    every:true,
    ㄱ:false,
    ㄴ:false,
    ㄷ:false,
    ㄹ:false,
    ㅁ:false,
    ㅂ:false,
    ㅅ:false,
    ㅇ:false,
    ㅈ:false,
    ㅊ:false,
    ㅋ:false,
    ㅌ:false,
    ㅍ:false,
    ㅎ:false,
    az:false,
    etc:false,
})

const onClickManyProduct = (e) =>{
    e.preventDefault();
    setState2({
        ...state2,
        manyProduct: true,
        EveryAbc : false,
    })
}
const onClickAbc = (e) =>{
    e.preventDefault();
    setState2({
        ...state,
        EveryAbc : true,
        manyProduct: false,
        every : true
    })
}
const onClickEveryThing = (e)=>{
    e.preventDefault();
    setState2({
        ...state,
        EveryAbc : true,
        every:true
    })
}
const onClickA = (e)=>{
    e.preventDefault();
    setState2({
        ...state,
        ㄱ: true,
        EveryAbc : true
    })
}
const onClickB = (e)=>{
    e.preventDefault();
    setState2({
        ...state,
        ㄴ: true,
        EveryAbc : true
    })
}
const onClickC = (e)=>{
    e.preventDefault();
    setState2({
        ...state,
        ㄷ: true,
        EveryAbc : true
    })
}
const onClickD = (e)=>{
    e.preventDefault();
    setState2({
        ...state,
        ㄹ: true,
        EveryAbc : true
    })
}
const onClickE = (e)=>{
    e.preventDefault();
    setState2({
        ...state,
        ㅁ: true,
        EveryAbc : true
    })
}
const onClickF = (e)=>{
    e.preventDefault();
    setState2({
        ...state,
        ㅂ: true,
        EveryAbc : true
    })
}
const onClickG = (e)=>{
    e.preventDefault();
    setState2({
        ...state,
        ㅅ: true,
        EveryAbc : true
    })
}
const onClickH = (e)=>{
    e.preventDefault();
    setState2({
        ...state,
        ㅇ: true,
        EveryAbc : true
    })
}
const onClickI = (e)=>{
    e.preventDefault();
    setState2({
        ...state,
        ㅈ: true,
        EveryAbc : true
    })
}
const onClickJ = (e)=>{
    e.preventDefault();
    setState2({
        ...state,
        ㅊ: true,
        EveryAbc : true
    })
}
const onClickK = (e)=>{
    e.preventDefault();
    setState2({
        ...state,
        ㅍ: true,
        EveryAbc : true
    })
}
const onClickL = (e)=>{
    e.preventDefault();
    setState2({
        ...state,
        ㅎ: true,
        EveryAbc : true
    })
}
const onClickM = (e)=>{
    e.preventDefault();
    setState2({
        ...state,
        az: true,
        EveryAbc : true
    })
}
const onClickN = (e)=>{
    e.preventDefault();
    setState2({
        ...state,
        etc: true,
        EveryAbc : true
    })
}

const onClickcategory =(e)=>{
    e.preventDefault();
    setState({
        ...state,
        category : !state.category,
        issub1:!state.issub1
    })
}
const onClickBrand =(e)=>{
    e.preventDefault();
    setState({  
        ...state,
        brand : !state.brand,
        EveryAbc : !state.EveryAbc,
        manyProduct : !state.manyProduct,
        issub2:!state.issub2
    })
}
const onClickPrice =(e)=>{
    e.preventDefault();
    setState({
        ...state,
        price : !state.price,
        issub3:!state.issub3
    })
}
const onClickType =(e)=>{
    e.preventDefault();
    setState({
        ...state,
        type : !state.type,
        issub5:!state.issub5
    })
}
const onClickBenefit =(e)=>{
    e.preventDefault();
    setState({
        ...state,
        benefit : !state.benefit,
        issub4:!state.issub4
    })
}
const onClickExclude =(e)=>{
    e.preventDefault();
    setState({
        ...state,
        excliude : !state.excliude,
        issub6:!state.issub6
    })
}

const onMouseEnterComment = ()=>{
    setState({
        comment:true
    })
}
const onMouseLeaveComment = ()=>{
    setState({
        comment:false
    })
}

axios({
    url : './data/sub/sub1.json',
    method : 'GET'
})
.then((res)=>{
    setState({
        ...state,
        슬라이드 : res.data.슬라이드
    })
})
.catch((err)=>{
})


    return (
        <div id='sub1'>
            <div className="container">
                <div className="main-img">
                    <a href="!#"><img src="./img/sub1/K55OxyfwVlSr1BigzjhQSKAIzi0WNulp0EnVvnMQ.jpg" alt="" /></a>
                </div>
                <div className="title">
                    <h2>신상품</h2>
                </div>
                <div className="content">
                    <div className="left">
                        <div className="col-gap">
                            <div className="top">
                                <strong>필터</strong>
                                <a href="!#">
                                    <img src="./img/sub1/reset.svg" alt="" />
                                    <em>초기화</em>
                                </a>
                            </div>
                            <div className="category">
                                    <nav>
                                        <div onClick={onClickcategory} className="title-box">
                                            <a href="!#">카테고리</a>
                                            <img className={state.category ? 'on' : ''} src="./img/sub1/next_arrow.svg" alt="" />
                                        </div>
                                        <div className={`sub sub1${state.issub1 ? ' on' : ' off'}`}>
                                            <ul>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" id='sub-1' name='sub-1' value='국·반찬·메인요리' />국·반찬·메인요리
                                                        <em>27</em>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" id='sub-2' name='sub-2' value='간식·과자·떡' />간식·과자·떡
                                                        <em>25</em>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" id='sub-3' name='sub-3' value='과일·견과·쌀' />과일·견과·쌀
                                                        <em>21</em>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" id='sub-4' name='sub-4' value='헤어·바디·구강' />헤어·바디·구강
                                                        <em>20</em>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" id='sub-5' name='sub-5' value='베이커리·치즈·델리' />베이커리·치즈·델리
                                                        <em>19</em>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" id='sub-6' name='sub-6' value='1주년 기념 뷰티컬리페스타' />1주년 기념 뷰티컬리페스타
                                                        <em>19</em>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" id='sub-7' name='sub-7' value='수산·해산·건어물' />수산·해산·건어물
                                                        <em>18</em>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" id='sub-8' name='sub-8' value='샐러드·간편식' />샐러드·간편식
                                                        <em>17</em>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" id='sub-9' name='sub-9' value='생수·음료·우유·커피' />생수·음료·우유·커피
                                                        <em>16</em>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" id='sub-10' name='sub-10' value='생활용품·리빙·캠핑' />생활용품·리빙·캠핑
                                                        <em>12</em>
                                                    </label>
                                                </li>
                                                <li>
                                                    <div className="more-box">
                                                        <h4>카테고리 더보기</h4>
                                                        <img src="./img/sub1/next_arrow.svg" alt="" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                    <nav>
                                        <div onClick={onClickBrand} className="title-box">
                                            <a href="!#">브랜드</a>
                                            <img className={state.brand ? 'on' : ''}  src="./img/sub1/next_arrow.svg" alt="" />
                                        </div>
                                            {state.brand || <>
                                        <div className="detail-box">
                                            <span className={state2.EveryAbc ? 'on' : ''} onClick={onClickAbc}>가나다순</span>
                                            <i>|</i>
                                            <span className={state2.manyProduct ? 'on' : ''} onClick={onClickManyProduct}>상품 많은 순</span>
                                        </div>
                                        </>}
                                        <div className={`sub sub2${state.issub2 ? ' on' : ' off'}`}>
                                        {state.brand || <>
                                        {state2.EveryAbc &&
                                        <div className="detail-check">
                                                    <li>
                                                        <button className={`big-btn ${state2.every ? ' on' : ''}`} onClick={onClickEveryThing}>전체</button>
                                                    </li>
                                                    <li>
                                                        <button  onClick={onClickA} className={state2.ㄱ ? 'on' : ''}>ㄱ</button>
                                                    </li>
                                                    <li>
                                                         <button  onClick={onClickB} className={state2.ㄴ ? 'on' : ''}>ㄴ</button>
                                                    </li>
                                                    <li>
                                                         <button  onClick={onClickC} className={state2.ㄷ ? 'on' : ''}>ㄷ</button>
                                                    </li>
                                                    <li>
                                                         <button  onClick={onClickD} className={state2.ㄹ ? 'on' : ''}>ㄹ</button>
                                                    </li>
                                                    <li>
                                                         <button  onClick={onClickE} className={state2.ㅁ ? 'on' : ''}>ㅁ</button>
                                                    </li>
                                                    <li>
                                                         <button  onClick={onClickF} className={state2.ㅂ ? 'on' : ''}>ㅂ</button>
                                                    </li>
                                                    <li>
                                                         <button  onClick={onClickG} className={state2.ㅅ ? 'on' : ''}>ㅅ</button>
                                                    </li>
                                                    <li>
                                                         <button  onClick={onClickH} className={state2.ㅇ ? 'on' : ''}>ㅇ</button>
                                                    </li>
                                                    <li>
                                                         <button  onClick={onClickI} className={state2.ㅈ ? 'on' : ''}>ㅈ</button>
                                                    </li>
                                                    <li>
                                                         <button  onClick={onClickJ} className={state2.ㅊ ? 'on' : ''}>ㅊ</button>
                                                    </li>
                                                    <li>
                                                         <button  onClick={onClickK} className={state2.ㅍ ? 'on' : ''}>ㅍ</button>
                                                    </li>
                                                    <li>
                                                         <button  onClick={onClickL} className={state2.ㅎ ? 'on' : ''}>ㅎ</button>
                                                    </li>
                                                    <li>
                                                        <button  onClick={onClickM} className={`big-btn ${state2.az ? ' on' : ''}`}>A-Z</button>
                                                    </li>
                                                    <li>
                                                        <button  onClick={onClickN} className={`big-btn ${state2.etc ? ' on' : ''}`}>ETC</button>
                                                    </li>
                                        </div>
                                        }
                                                {state2.ㄱ &&
                                                    <ul>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='su2-1' name='sub2-1' value='고디바' />고디바
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-2' name='sub2-2' value='궁' />궁
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-3' name='sub2-3' value='귤로장생' />귤로장생
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-4' name='sub2-4' value='까사까누띠' />까사까누띠
                                                                <em>3</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <div className="more-box">
                                                                <h4>브랜드 더보기</h4>
                                                                <img src="./img/sub1/next_arrow.svg" alt="" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                            }
                                                {state2.ㄴ &&
                                                    <ul>
                                                    <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-5' name='sub2-5' value='남양' />남양
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-6' name='sub2-6' value='노르딕슬립' />노르딕슬립
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                    
                                                        <li>
                                                            <div className="more-box">
                                                                <h4>브랜드 더보기</h4>
                                                                <img src="./img/sub1/next_arrow.svg" alt="" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                            }
                                                {state2.ㄷ &&
                                                
                                                    <ul> <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-7' name='sub2-7' value='다우니' />다우니
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-8' name='sub2-8' value='달바' />달바
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-9' name='sub2-9' value='담꽃' />담꽃
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='대흥' />대흥
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='더바디샵' />더바디샵
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='드롭드롭드롭' />드롭드롭드롭
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='뚝심' />뚝심
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <div className="more-box">
                                                                <h4>브랜드 더보기</h4>
                                                                <img src="./img/sub1/next_arrow.svg" alt="" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                
                                            }
                                                {state2.ㄹ &&
                                                
                                                    <ul> <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-7' name='sub2-7' value='라 메르' />라 메르
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-8' name='sub2-8' value='라메르풀라르' />라메르풀라르
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-9' name='sub2-9' value='라베키아' />라베키아
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='래핑찰리' />래핑찰리
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='루치펠로' />루치펠로
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='르네휘테르' />르네휘테르
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='리본제이' />리본제이
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='리틀넥' />리틀넥
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <div className="more-box">
                                                                <h4>브랜드 더보기</h4>
                                                                <img src="./img/sub1/next_arrow.svg" alt="" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                
                                            }
                                                {state2.ㅁ &&
                                                
                                                    <ul> <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-7' name='sub2-7' value='마이베프' />마이베프
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-8' name='sub2-8' value='만선' />만선
                                                                <em>2</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-9' name='sub2-9' value='매일' />매일
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='몰튼 브라운' />몰튼 브라운
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='밀리옹' />밀리옹
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <div className="more-box">
                                                                <h4>브랜드 더보기</h4>
                                                                <img src="./img/sub1/next_arrow.svg" alt="" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                
                                            }
                                                {state2.ㅂ &&
                                                
                                                    <ul> <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-7' name='sub2-7' value='바벤슈타이거' />바벤슈타이거
                                                                <em>3</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-8' name='sub2-8' value='방방곡곡' />방방곡곡
                                                                <em>2</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-9' name='sub2-9' value='브로이어' />브로이어
                                                                <em>4</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='블랑101' />블랑101
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <div className="more-box">
                                                                <h4>브랜드 더보기</h4>
                                                                <img src="./img/sub1/next_arrow.svg" alt="" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                
                                            }
                                                {state2.ㅅ &&
                                                
                                                    <ul> <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-7' name='sub2-7' value='사미헌' />사미헌
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-8' name='sub2-8' value='사층빵집' />사층빵집
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-9' name='sub2-9' value='삼삼물산' />삼삼물산
                                                                <em>2</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='생지굿즈' />생지굿즈
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='생활공작소' />생활공작소
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='샤이닝홈' />샤이닝홈
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='서울리빙' />서울리빙
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='서울만두' />서울만두
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='세븐펫' />세븐펫
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='소중한식사' />소중한식사
                                                                <em>2</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <div className="more-box">
                                                                <h4>브랜드 더보기</h4>
                                                                <img src="./img/sub1/next_arrow.svg" alt="" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                
                                            }
                                                {state2.ㅇ &&
                                                
                                                    <ul> <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-7' name='sub2-7' value='아리아띠' />아리아띠
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-8' name='sub2-8' value='아에르' />아에르
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-9' name='sub2-9' value='아우어베이커리' />아우어베이커리
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='에스티 로더' />에스티 로더
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='에어버기' />에어버기
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='온하루' />온하루
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='올반' />올반
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='울스터위버스' />울스터위버스
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <div className="more-box">
                                                                <h4>브랜드 더보기</h4>
                                                                <img src="./img/sub1/next_arrow.svg" alt="" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                
                                            }
                                                {state2.ㅈ &&
                                                
                                                    <ul> <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-7' name='sub2-7' value='장인의집' />장인의집
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-8' name='sub2-8' value='제니튼' />제니튼
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-9' name='sub2-9' value='제스프리' />제스프리
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='조 말론 런던' />조 말론 런던
                                                                <em>2</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='즈윌링' />즈윌링
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='질스튜어트뷰티' />질스튜어트뷰티
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <div className="more-box">
                                                                <h4>브랜드 더보기</h4>
                                                                <img src="./img/sub1/next_arrow.svg" alt="" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                
                                            }
                                                {state2.ㅊ &&
                                                
                                                    <ul> <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-7' name='sub2-7' value='창억' />창억
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-8' name='sub2-8' value='채선당' />채선당
                                                                <em>2</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <div className="more-box">
                                                                <h4>브랜드 더보기</h4>
                                                                <img src="./img/sub1/next_arrow.svg" alt="" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                
                                            }
                                                {state2.ㅍ &&
                                                
                                                    <ul> <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-7' name='sub2-7' value='퍼핑' />퍼핑
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-8' name='sub2-8' value='페레로' />페레로
                                                                <em>3</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-9' name='sub2-9' value='펫크루' />펫크루
                                                                <em>2</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='폰스테르' />폰스테르
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <div className="more-box">
                                                                <h4>브랜드 더보기</h4>
                                                                <img src="./img/sub1/next_arrow.svg" alt="" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                
                                            }
                                                {state2.ㅎ &&
                                                
                                                    <ul> <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-7' name='sub2-7' value='하림' />하림
                                                                <em>3</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-8' name='sub2-8' value='하림펫푸드' />하림펫푸드
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-9' name='sub2-9' value='홈에드' />홈에드
                                                                <em>2</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <div className="more-box">
                                                                <h4>브랜드 더보기</h4>
                                                                <img src="./img/sub1/next_arrow.svg" alt="" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                
                                            }
                                                {state2.az &&
                                                
                                                    <ul> <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-7' name='sub2-7' value='VIDAL' />VIDAL
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <div className="more-box">
                                                                <h4>브랜드 더보기</h4>
                                                                <img src="./img/sub1/next_arrow.svg" alt="" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                
                                            }
                                                {state2.etc &&
                                                
                                                    <ul>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-7' name='sub2-7' value='3M' />3M
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-8' name='sub2-8' value='라페어' />라페어
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-9' name='sub2-9' value='마른파이브' />마른파이브
                                                                <em>4</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='모나코올리브' />모나코올리브
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='세컨스킨' />세컨스킨
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <div className="more-box">
                                                                <h4>브랜드 더보기</h4>
                                                                <img src="./img/sub1/next_arrow.svg" alt="" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                
                                            }
                                                {state2.every &&
                                                    <ul>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='su2-1' name='sub2-1' value='고디바' />고디바
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-2' name='sub2-2' value='궁' />궁
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-3' name='sub2-3' value='귤로장생' />귤로장생
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-4' name='sub2-4' value='까사까누띠' />까사까누띠
                                                                <em>3</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-5' name='sub2-5' value='남양' />남양
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-6' name='sub2-6' value='노르딕슬립' />노르딕슬립
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-7' name='sub2-7' value='다우니' />다우니
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-8' name='sub2-8' value='달바' />달바
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-9' name='sub2-9' value='담꽃' />담꽃
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='대흥' />대흥
                                                                <em>1</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                    <div className="more-box">
                                                        <h4>브랜드 더보기</h4>
                                                        <img src="./img/sub1/next_arrow.svg" alt="" />
                                                    </div>
                                                </li>
                                                    </ul>
                                            
                                            }
                                        {state2.manyProduct &&
                                                
                                                    <ul>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='su2-1' name='sub2-1' value='브로이어' />브로이어
                                                                <em>4</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-2' name='sub2-2' value='까사까누띠' />까사까누띠
                                                                <em>23</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-3' name='sub2-3' value='바겐슈타이거' />바겐슈타이거
                                                                <em>3</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-4' name='sub2-4' value='페레로' />페레로
                                                                <em>3</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-5' name='sub2-5' value='하림' />하림
                                                                <em>3</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-6' name='sub2-6' value='만선' />만선
                                                                <em>2</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-7' name='sub2-7' value='방방곡곡' />방방곡곡
                                                                <em>2</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-8' name='sub2-8' value='삼삼물산' />삼삼물산
                                                                <em>2</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-9' name='sub2-9' value='소중한식사' />소중한식사
                                                                <em>2</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input type="checkbox" id='sub2-10' name='sub2-10' value='스케이터' />스케이터
                                                                <em>2</em>
                                                            </label>
                                                        </li>
                                                        <li>
                                                    <div className="more-box">
                                                        <h4>브랜드 더보기</h4>
                                                        <img src="./img/sub1/next_arrow.svg" alt="" />
                                                    </div>
                                                </li>
                                                    </ul>
                                            }
                                        </>}
                                        </div>
                                            
                                                
                                    </nav>
                                    <nav>
                                        <div onClick={onClickPrice} className="title-box">
                                            <a href="!#">가격</a>
                                            <img className={state.price ? 'on' : ''}  src="./img/sub1/next_arrow.svg" alt="" />
                                        </div>
                                        <div className={`sub sub3${state.issub3 ? ' on' : ' off'}`}>
                                            <ul>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" id='sub3-1' name='sub3-1' value='8,400원 미만' />8,400원 미만
                                                        <em>62</em>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" id='sub3-2' name='sub3-2' value='8,400원 ~ 12,670원' />8,400원 ~ 12,670원
                                                        <em>62</em>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" id='sub-3' name='sub-3' value='12,670원 ~ 24,800원' />12,670원 ~ 24,800원
                                                        <em>63</em>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" id='sub3-4' name='sub3-4' value='24,800원 이상' />24,800원 이상
                                                        <em>63</em>
                                                    </label>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </nav>
                                    <nav>
                                        <div onClick={onClickBenefit} className="title-box">
                                        <a href="!#">혜택</a>
                                            <img className={state.benefit ? 'on' : ''}  src="./img/sub1/next_arrow.svg" alt="" />
                                        </div>
                                        
                                        <div className={`sub sub4${state.issub4 ? ' on' : ' off'}`}>
                                            <ul>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" id='sub4-1' name='sub4-1' value='할인상품' />할인상품
                                                        <em>157</em>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" id='sub4-2' name='sub4-2' value='한정수량' />한정수량
                                                        <em>4</em>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                    <nav>
                                        <div onClick={onClickType} className="title-box">
                                            <a href="!#">유형</a>
                                            <img className={state.type ? 'on' : ''}  src="./img/sub1/next_arrow.svg" alt="" />
                                        </div>
                                        
                                        <div className={`sub sub5${state.issub5 ? ' on' : ' off'}`}>
                                            <ul>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" id='sub5-1' name='sub5-1' value='Kurly Only' />Kurly Only
                                                        <em>55</em>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" id='sub5-2' name='sub5-2' value='희소가치 프로젝트' />희소가치 프로젝트
                                                        <em>3</em>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                    <nav>
                                        <div onClick={onClickExclude} className="title-box">
                                            <a href="!#">특정상품 제외</a>
                                            <img className={state.excliude ? 'on' : ''}  src="./img/sub1/next_arrow.svg" alt="" />

                                        </div>
                                        <div className={`sub sub6${state.issub6 ? ' on' : ' off'}`}>
                                            <ul>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" id='sub6-1' name='sub6-1' value='반려동물 상품' />반려동물 상품
                                                        <em>10</em>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="top">
                            <div className="top-left">
                                <h4>총 237건</h4>
                            </div>
                            <div className="top-right">
                                <span className='strong'>추천순</span>
                                <img onMouseEnter={onMouseEnterComment} onMouseLeave={onMouseLeaveComment} src="./img/sub1/comment.svg" alt="" />
                                {state.comment &&
                                <h4>소비자 인기도(판매량, 판매금액, 조회수 등), 상품 출시일, 수요 적합성, 상품 운영상 필요 등을 종합적으로 고려한 순서입니다.</h4>
                            }
                                <em>I</em>
                                <span>신상품순</span>
                                <em>I</em>
                                <span>판매량순</span>
                                <em>I</em>
                                <span>혜택순</span>
                                <em>I</em>
                                <span>낮은 가격순</span>
                                <em>I</em>
                                <span>높은 가격순</span>
                            </div>
                        </div>
                        <Sub1ChildComponent currentViewProduct={currentViewProduct} 슬라이드={state.슬라이드} />
                    </div>
                </div>
            </div>
        </div>
    );
};