import React from 'react';
import './sass/quickmenu.scss'
import { WrapContext } from './wrapContext/WrapContext';

export default function QuickMenuComponent () {

    const { viewProduct } = React.useContext( WrapContext );
    const [cnt, setcnt] = React.useState(0)
    const imgBoxUl = React.useRef();
    const quickMenu = React.useRef();
    const [state, setState] = React.useState({
        isfixed : false
    })


    React.useEffect(()=>{

        let quickMenuTop = quickMenu.current.offsetTop

        window.addEventListener('scroll', function(){
            let isfixed = false;
            if(window.scrollY >= 460){//460
                isfixed = true;
            }
            else {
                isfixed = false
            }
            setState({
                ...StaticRange,
                isfixed : isfixed
            })
        })
    })


    const onClickUpDown = (e, direction)=>{
        e.preventDefault();
        if(direction==='up'){
            if(cnt>0){
                setcnt(cnt-1)
            }
            else {
                return;
            }
        }
        else if (direction ==='down'){
            if(cnt > viewProduct.length-4){
                return;
            }
            else {
                setcnt(cnt+1);
            }
        }
    }
    const quikBoxSlide = ()=>{
        try {
        imgBoxUl.current.style.transition = "all 0.3s";
        imgBoxUl.current.style.transform = `translateY(${-84*cnt}px)`;   
        }
        catch(e){
            
        }
    }

    React.useEffect(()=>{
        quikBoxSlide()
    }, [cnt])
    return (
        <div ref={quickMenu} id='quickMenu' className={state.isfixed ? 'on' : ''}>
            <div className="container">
                <div className="content">
                    <div className="row1">
                        <a href="!#"><img src="./img/quickMenu/deliveryInfo.jpg" alt="" /></a>
                    </div>
                    <div className="row2">
                        <a href="!#"><h4>등급별 혜택</h4></a>
                        <a href="!#"><h4>레시피</h4></a>
                    </div>
                    {viewProduct.length>0 &&
                    <div className="row3">
                        <div className="up">
                            <a href="!#" onClick={(e)=>{onClickUpDown(e,'up')}}>
                            <img src="./img/quickMenu/up_arrow.svg" alt="" />
                            </a>
                        </div>
                        <h4>최근 본 상품</h4>
                        <div className="img-box">
                            <ul ref={imgBoxUl}>
                                { viewProduct.map((item)=>{
                                    return(
                                    <li key={item.번호}>
                                        <a href="!#">
                                            <img src={item.이미지} alt="" />
                                        </a>
                                    </li>
                                    )
                                })
                                }
                            </ul>
                        </div>
                        <div className="down">
                            <a href="!#" onClick={(e)=>{onClickUpDown(e,'down')}}>
                                <img src="./img/quickMenu/up_arrow.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};