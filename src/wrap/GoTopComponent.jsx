import React from 'react';
import './sass/goTop.scss'

export default function GoTopComponent () {

    const goTop = React.useRef();
    const [state, setState] = React.useState({
        isFixed : false
    })

    React.useEffect(()=>{
        window.addEventListener('scroll', function(){

            let isFixed = false;
            if(window.scrollY>=1000){
                isFixed = true
            }
            else {
                isFixed = false
            }
            setState({
                ...state,
                isFixed:isFixed
            })
        })
    })

    return (
        <div ref={goTop} className={state.isFixed ? 'on' : ''} id='goTop'>
            <div className="container">
                <div className="content">
                    <a href="#wrap"><img src="./img/goTop/up_arrow.png" alt="" /></a>
                </div>
            </div>
        </div>
    );
};