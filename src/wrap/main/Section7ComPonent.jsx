import React from 'react';
import './sass/section7.scss'
import axios from 'axios';
import Section7ChildComponent from './Section7ChildComponent';
import { WrapContext } from '../wrapContext/WrapContext';

export default function Section7ComPonent () {

    const { currentViewProduct } = React.useContext( WrapContext );

    const [state, setState] = React.useState({
        샐러드 : [],
        과일 : [],
        베이비 : [],
        베이커리 : [],
        계란 : [],
        전자기기 : [],
        헤어 : [],
        건강 : [],
        주방기구 : [],
        리빙 : [],
        메인 : [],
        면 : [],
        반려동물 : [],
        해산물 : [],
        스킨케어 : [],
        간식 : [],
        전통주 : [],
        채소 : [],
        물 : [],
        와인 : []
    })

  
React.useEffect(()=>{
    axios
    .all([
        axios.get('./data/section/section7_salad.json'),
        axios.get('./data/section/section7_fruit.json'),
        axios.get('./data/section/section7_baby.json'),
        axios.get('./data/section/section7_backery.json'),
        axios.get('./data/section/section7_egg.json'),
        axios.get('./data/section/section7_electro.json'),
        axios.get('./data/section/section7_hair.json'),
        axios.get('./data/section/section7_health.json'),
        axios.get('./data/section/section7_kitchen.json'),
        axios.get('./data/section/section7_living.json'),
        axios.get('./data/section/section7_main.json'),
        axios.get('./data/section/section7_noddle.json'),
        axios.get('./data/section/section7_pet.json'),
        axios.get('./data/section/section7_seafood.json'),
        axios.get('./data/section/section7_skincare.json'),
        axios.get('./data/section/section7_snack.json'),
        axios.get('./data/section/section7_tradi.json'),
        axios.get('./data/section/section7_vegi.json'),
        axios.get('./data/section/section7_water.json'),
        axios.get('./data/section/section7_wine.json')
    ])
    .then(
        axios.spread((res1,res2,res3,res4,res5,res6,res7,res8,res9,res10,res11,res12,res13,res14,res15,res16,res17,res18,res19,res20) => {
            setState({
                샐러드 : res1.data.샐러드,
                과일 : res2.data.과일,
                베이비 : res3.data.베이비,
                베이커리 : res4.data.베이커리,
                계란 : res5.data.계란,
                전자기기 : res6.data.전자기기,
                헤어 : res7.data.헤어,
                건강 : res8.data.건강,
                주방기구 : res9.data.주방기구,
                리빙 : res10.data.리빙,
                메인 : res11.data.메인,
                면 : res12.data.면,
                반려동물 : res13.data.반려동물,
                해산물 : res14.data.해산물,
                스킨케어 : res15.data.스킨케어,
                간식 : res16.data.간식,
                전통주 : res17.data.전통주,
                채소 : res18.data.채소,
                물 : res19.data.물,
                와인 : res20.data.와인
            })
      })
    )
    .catch((err) => {
    }
)
})

    
    return (
        <div id='section7'>
            <div className="slide-container">
                <div className="slide-view">
                   <Section7ChildComponent 샐러드={state.샐러드} 과일={state.과일} 계란={state.계란}  베이커리={state.베이커리} 베이비={state.베이비} 전자기기={state.전자기기}  헤어={state.헤어} 건강={state.건강} 주방기구={state.주방기구} 리빙={state.리빙} 메인={state.메인} 면={state.면} 반려동물={state.반려동물} 해산물={state.해산물} 스킨케어={state.스킨케어} 간식={state.간식} 전통주={state.전통주} 채소={state.채소} 물={state.물} 와인={state.와인}/>
                </div>
            </div>
        </div>
    );
};