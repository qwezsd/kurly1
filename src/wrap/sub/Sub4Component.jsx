
import axios from 'axios';
import React from 'react';
import './sass/sub4.scss'


export default function Sub4Component (){
    const [state, setState] = React.useState({
        특가혜택:[]
    })
    axios({
        url : './data/sub/sub4.json',
        method : 'GET'
    })
    .then((res)=>{
        setState({
            ...state,
            특가혜택 : res.data.특가혜택
        })
    })
    return (
        <div id='sub4'>
            <div className="container">
                <div className="content">
                        {state.특가혜택.map((item, idx)=>{
                            return(
                                <div className="img-box" key={item.번호}>

                                <img src={`./img/sub4/${item.이미지}`} alt="" />
                    </div>

                            )
                        })
                        }
                </div>
            </div>
        </div>
    );
};