import React from 'react';
import './sass/address.scss'
import Postcode from 'react-daum-postcode';
import { WrapContext } from './wrapContext/WrapContext';

export default function AddressComponent () {

    const { addressSearchClose, addressSearchOpen, addressSave} = React.useContext(WrapContext)
    const [state, setState] = React.useState({
        addBox : false,
        주소1 : '',
        주소2 : '',
        우편번호 : '',
    });

    const onClickAddBox =(e)=>{
        e.preventDefault();
        setState({
            ...state,
            addBox : !state.addBox
        })
    }

    const postCodeStyle={
        zIndex:'3',
        winth:'100%',
        height:'100%',
        background : '#fff',
        position:'absolute',
        top:0,
        left:0
    }
    
    const onCompletePostCode = (data)=>{
        console.log(data)
        console.log(data.zonecode)
        console.log(data.address)
        console.log(data.buildingName)
        
        let 주소1 = '';
        if (data.userSelectedType === 'R'){ //도로명 주소를 클릭
            주소1 =`${data.address} (${data.buildingName})`
        }
        else { // 지번주소를 클릭
            주소1 = `${data.jibunAddress}`
        }
        setState({
            ...state,
            주소1: 주소1
        })
    }
    // 주소 저장
    const onClickSave =(e)=>{
        e.preventDefault();
        addressSave(state.주소1, state.주소2)
        console.log(state.주소1) // 얘네는 콘솔에 뜸
        console.log(state.주소2)
        const obj = {
            주소1 : state.주소1,
            주소2 : state.주소2,
        }
        localStorage.setItem('POSTCODE_ADDRESS', JSON.stringify(obj))
        addressSearchClose();
    }
    const onchangeAdd1 =() =>{
        setState({
            ...state,
        })
    }
    const onChangeAdd2 = (e)=>{
        setState({
            ...state,
            주소2 : e.target.value
        })
    }

    const onClickAddressClose =(e)=>{
        e.preventDefault();
        addressSearchClose();
    }
    const onClickReSearch =(e)=>{
        e.preventDefault();
        addressSearchOpen();
    }   
    return (
        <div id='address'>
            <div className="container">
                <button onClick={onClickAddressClose}>X</button>
                <div className="title">
                    <h2><strong>샛별배송</strong>지역입니다.</h2>
                    <h3>매일 새벽, 문 앞까지 신선함을 전해드려요.</h3>
                </div>
                <div className="content">
                    <div className="input-box">
                        <input type="text"
                        name='add1'
                        id='add1'
                        placeholder='카카오 검색주소 API'
                        onChange={onchangeAdd1}
                        value={state.주소1}
                        disabled={false}/>
                        <button onClick={onClickReSearch}><img src="./img/header/zoom_purple.svg" alt="" />재검색</button>
                    </div>
                    <input type="text"
                    name='add1'
                    id='add1'
                    placeholder='나머지 주소를 입력해 주세요'
                    onChange={onChangeAdd2}
                    value={state.주소2}/>
                    <h4>저장된 배송지는 최대 7일 간 임시 저장 후 자동 삭제됩니다. 
                    <br />
                    로그인 할 경우, 회원님의 배송지 목록에 추가됩니다.
                    </h4>
                    <button onClick={onClickSave}>저장</button>
                    <div onClick={onClickAddBox} className="add-box">
                        <h4><img src="./img/addr/notice_14_14_f03f40.svg" alt="" />샛별배송 지역 중 배송불가 장소 안내</h4>
                        <span>관공서 / 학교 / 병원 / 시장 / 공단지역 / 산간지역 / 백화점 등<em>{state.addBox ? '간략히 보기' : '자세히 보기'}<img className={state.addBox ? 'on' : 'off'} src="./img/addr/ico_arrow_down.svg" alt="" /></em></span>
                    </div>
                    {state.addBox &&
                    <div className="no-deli">
                        <ul>
                            <li>가락동농수산물도매시장</li>
                            <li>가락동농수산물시장</li>
                            <li>가천대학교</li>
                            <li>고려대학교안암캠퍼스</li>
                            <li>고매동 일부(일부지역만 배송가능)</li>
                            <li>국립중앙박물관</li>
                            <li>국민대학교</li>
                            <li>덕성여자대학교</li>
                            <li>덕양구 신원동 일부(일부지역만 배송가능)</li>
                            <li>도내동 일부(원흥지구만 배송가능)</li>
                            <li>동덕여자대학교</li>
                            <li>반월특수지구</li>
                            <li>서경대학교</li>
                            <li>서울사이버대학교</li>
                            <li>서울시립대학교</li>
                            <li>서울여자대학교</li>
                            <li>성균관대학교</li>
                            <li>성신여자대학교</li>
                            <li>세종대학교</li>
                            <li>연세대학교</li>
                            <li>이화여자대학교</li>
                            <li>한국외국어대학교</li>
                            <li>홍익대학교</li>
                        </ul>
                    </div>
                    }
                </div>
                <Postcode
                style={postCodeStyle}
                onComplete={onCompletePostCode}/>
            </div>
        </div>
    );
};