import React from 'react';
import { WrapContext } from '../wrapContext/WrapContext';

export default function Sub3ChildComponent ({알뜰쇼핑}) {

    const [product, setProduct] = React.useState([]);
    const [flag, setFlag] = React.useState(false);
    
    const {currentViewProduct} = React.useContext(WrapContext)
        // 1. 최근 본 상품 클릭 이벤트
        const onClickViewProduct=(e, item, imgPath)=>{
            e.preventDefault();
            currentViewProduct(item, imgPath)
        }
    return (
    <div className="slide-view">
        <ul className="slide-wrap">
            {알뜰쇼핑.map((item,idx)=>{
            return(
                <li onClick={(e)=>onClickViewProduct(e, item, './img/sub3/')} className="slide" key={item.번호}>
                    <div className="gap">
                        <div className="img-box">
                            <img src={`./img/sub3/${item.이미지}`} alt="" />
                        </div>
                        <div className="btn-box">
                            <button>
                                <img src="./img/section2/cart_mark.svg" alt="" />
                                <h4>담기</h4>
                            </button>
                        </div>
                        <div className="txt-box">
                            <div className="p2">
                                {item.배송종류}
                            </div>
                            <div className="p1"><h3>{item.상품명}</h3></div>
                            <div className="p5">{item.상세정보}</div>
                            <div className="p6">
                            <span><h5>{(item.정가.toLocaleString('ko-KO'))}원</h5></span>
                            </div>
                            <div className="p3">
                                <strong>{item.할인율 * 100}%</strong>
                                <em>{Math.round(item.정가 *(1-item.할인율)).toLocaleString('ko-KO')}원</em>
                            </div>
                            <div className="p4">
                            </div>
                        </div>
                    </div>
                </li>


            )
        })
                }

    </ul>
</div>
    );
};
