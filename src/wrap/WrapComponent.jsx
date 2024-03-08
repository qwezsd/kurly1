import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import TopModalComponent from './TopModalComponent'
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import GoTopComponent from './GoTopComponent'
import QuickMenuComponent from './QuickMenuComponent'
import FooterComponent from './FooterComponent';
import ConfirmModal from './ConfirmModal';
import AddressComponent from './AddressComponent';

//서브
import Sub1Component from './sub/Sub1Component';
import Sub2Component from './sub/Sub2Component';
import Sub3Component from './sub/Sub3Component';
import Sub4Component from './sub/Sub4Component';
import Sub5Component from './sub/Sub5Component';

// 컨텍스트 가져오기
import { WrapContext } from './wrapContext/WrapContext';


export default function WrapComponent () {
    const [state, setState] = React.useState({
        message : '',
        isconfirmModal : false,
        isAddressSearch : false,
    });
    const {message} = state
    const [address, setAddress] = React.useState({ //이거 안 하면 주소 안 먹음
        주소1 : '',
        주소2: ''
    })
    const {주소1, 주소2} = address
    //열기
    const confirmModalOpen  =(message)=>{
        setState({
            ...state,
            message: message,
            isconfirmModal : true
        })
    }
    //닫기
    const confirmModalClose  =()=>{
        setState({
            ...state,
            isconfirmModal : false
        })
    }
    // 주소 검색 닫기
    const addressSearchClose=()=>{
        setState({
            ...state,
            isAddressSearch : false
        })
    }
    // 주소 검색 열기
    const addressSearchOpen=()=>{
        setState({
            ...state,
            isAddressSearch : true
        })
    }
    // 주소를 저장해주는 함수
    const addressSave = (주소1, 주소2) =>{
        setAddress({
            ...address,
            주소1:주소1,
            주소2:주소2
        })
    }
    // 새로고침 혹은 로딩시
    // 저장소에서 가져오기
    // 그리고 상태관리자에 저장하기(저장하고 계쏙 유지, 새로고침하면 새롭게 데이터가 들어옴
    React.useEffect(()=>{
        const result = JSON.parse(localStorage.getItem('POSTCODE_ADDRESS'))
        console.log(result)
    }, [address.주소1, address.주소2])
    
    // 저장된 데이터가 있는 경우에만 저장해야하고, 리포구조로 바뀌어야 해서 내용이 살짝 바뀌어야 함

    // 최근 본상품 
    const [viewProduct, setViewProduct] = React.useState([]);


    const [product, setProduct] = React.useState([]);
    const [flag, setFlag] = React.useState(false);

    // 1. 지금 본 상품 클릭한 데이터 가져오기
    const currentViewProduct=(item, imgPath)=>{       
        const obj = {  //키(Key): 값(Value)
            번호: item.번호,
            상품명: item.상품명,
            이미지: `${imgPath}${item.이미지}`,
            정가: item.정가,
            할인율: `${Math.round(item.할인율 * 100)}%`,
            판매가: Math.round(item.정가 * (1-item.할인율)),
            후기: item.후기
        }
        setProduct(obj);
    }

    // 2.로컬스토레이지에 저장하기
    // 언제? 상태변수 객체(product)에 저장완료되면
    // 저장소에 저장된 데이터가 있는 경우
    // ==> 저장소에 저장된 데이터를 가져온다. => 스택구조 형식으로 현재 데이터를 위에 넣고 저장한다(스택구조) 스택=>후입선출, 쿠 => 선입선출

    //저장소에 저장된 데이터가 없는 경우 => 현재 클릭한 데이터만 저장한다.

    React.useEffect(()=>{
        // 1. 임시 배열 생성한다.
         let imsi = [];              
        // 2. {} 객체 데이터가 있다면
        if(Object.keys(product).length > 0){
            imsi = [product];
        }  
        // 3. 저장소 데이터가 없다면 => 임시배열에 객체를 넣어서 저장소 저장한다.
        if(localStorage.getItem('KURLY_VIEW_PRODUCT')===null){
            if(imsi.length>0){
                localStorage.setItem('KURLY_VIEW_PRODUCT', JSON.stringify(imsi)); // [{..}]
            }
        }
                // 4. 저장소 데이터가 있다면 => 데이터 가져온다.
                //    =>  가져온 배열 데이터에 현재 클릭한 겍체{} 를 스택구조로 저장한다.
        else {
            let result = JSON.parse(localStorage.getItem('KURLY_VIEW_PRODUCT')); // 배열데이터가져오기
            //  중복검사
            //  저장소에 저장된 데이터가 현재 보고있는 상품과 중복되면 저장취소
            let filterResult = result.map((item)=>item.번호===product.번호); // 배열에 참 거짓
            //filterResult = [true, false, false]
            console.log( filterResult );            
            if(filterResult.includes(true)){ // 중복된 데이터가 있으면 true 있다
                return;
            }
            else{ // 중복안됨
                if(Object.keys(product).length>0){
                    result=[product, ...result];  // [{...},{..}] 스택
                    // 최종 로컬스토레이지에 저장하기
                    localStorage.setItem('KURLY_VIEW_PRODUCT', JSON.stringify(result));
                }
            }
        }
        // 깃발 흔든다xb
        setFlag( !flag );
    },[product]);

    // 3. 로컬스토레이지에 데이터가 저장 되면
    // 로컬스토레이지 데이터 가져오기 해서
    // 최상위 컴포넌트의 상태변수 ViewProduct => 퀵메뉴에 바인딩

    React.useEffect(()=>{
        if(localStorage.getItem('KURLY_VIEW_PRODUCT')=== null){
            return;
        }
        const result = JSON.parse(localStorage.getItem('KURLY_VIEW_PRODUCT'));
        setViewProduct(result);

    }, [flag])
    return (
    <div id='wrap'>

        <WrapContext.Provider value={{
            //헤더
            addressSearchOpen,
            주소1,
            주소2,
            currentViewProduct,
            confirmModalOpen,
            confirmModalClose,
            message,
            addressSearchClose,
            addressSave,
            viewProduct,

        }}>
        <TopModalComponent />

            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path='/' element={<HeaderComponent />}>
                        <Route index element={<MainComponent />} />
                        <Route path='/index' element={<MainComponent />} />
                        <Route path='/sub1' element={<Sub1Component />} />
                        <Route path='/sub2' element={<Sub2Component />} />
                        <Route path='/sub3' element={<Sub3Component />} />
                        <Route path='/sub4' element={<Sub4Component />} />
                        <Route path='/sub5' element={<Sub5Component />} />
                    </Route>
                </Routes>
            </BrowserRouter>


            {state.isconfirmModal &&
                <ConfirmModal />
            }
            {state.isAddressSearch &&
                <AddressComponent/>
            }
            <GoTopComponent />
            <QuickMenuComponent />
            <FooterComponent />

        </WrapContext.Provider>
        </div>
    );
};
