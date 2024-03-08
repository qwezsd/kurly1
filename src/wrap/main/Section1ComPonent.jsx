import React from 'react';
import './sass/section1.scss'
import axios from 'axios';
import Section1ChildComponent from './Section1ChildComponent';



export default function Section1ComPonent () {

    const [state, setState] = React.useState({
        슬라이드 : []
    })

    axios({
        url : './data/section/section1.json',
        method: 'GET'
    })
    .then((res)=>{
        setState({
            슬라이드 : res.data.슬라이드
        })
    })
    .catch((err)=>{
        console.log('실패')
    })

    return (
        <div id='section1'>
            <div className="slide-wrap">
                <Section1ChildComponent 슬라이드={state.슬라이드}/>
                    
            </div>
        </div>
    );
};