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
import Sub6Component from './sub/Sub6Component';
import Sub7Component from './sub/Sub7Component';
import Sub8Component from './sub/Sub8Component';


import { WrapContext } from './wrapContext/WrapContext';


export default function WrapComponent () {
    const [state, setState] = React.useState({
        message : '',
        isconfirmModal : false,
        isAddressSearch : false,
    });
    const {message} = state
    const [address, setAddress] = React.useState({ 
        주소1 : '',
        주소2: ''
    })
    const {주소1, 주소2} = address

    const confirmModalOpen  =(message)=>{
        setState({
            ...state,
            message: message,
            isconfirmModal : true
        })
    }

    const confirmModalClose  =()=>{
        setState({
            ...state,
            isconfirmModal : false
        })
    }

    const addressSearchClose=()=>{
        setState({
            ...state,
            isAddressSearch : false
        })
    }

    const addressSearchOpen=()=>{
        setState({
            ...state,
            isAddressSearch : true
        })
    }

    const addressSave = (주소1, 주소2) =>{
        setAddress({
            ...address,
            주소1:주소1,
            주소2:주소2
        })
    }
    React.useEffect(()=>{
        const result = JSON.parse(localStorage.getItem('POSTCODE_ADDRESS'))
        console.log(result)
    }, [address.주소1, address.주소2])
  
    const [viewProduct, setViewProduct] = React.useState([]);


    const [product, setProduct] = React.useState([]);
    const [flag, setFlag] = React.useState(false);


    const currentViewProduct=(item, imgPath)=>{       
        const obj = { 
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

    React.useEffect(()=>{
         let imsi = [];              
        if(Object.keys(product).length > 0){
            imsi = [product];
        }  
        if(localStorage.getItem('KURLY_VIEW_PRODUCT')===null){
            if(imsi.length>0){
                localStorage.setItem('KURLY_VIEW_PRODUCT', JSON.stringify(imsi));
            }
        }
        else {
            let result = JSON.parse(localStorage.getItem('KURLY_VIEW_PRODUCT'));
            let filterResult = result.map((item)=>item.번호===product.번호); 
            console.log( filterResult );            
            if(filterResult.includes(true)){
                return;
            }
            else{ // 중복안됨
                if(Object.keys(product).length>0){
                    result=[product, ...result];
                    localStorage.setItem('KURLY_VIEW_PRODUCT', JSON.stringify(result));
                }
            }
        }

        setFlag( !flag );
    },[product]);



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
                        <Route path='/sub6' element={<Sub6Component />} />
                        <Route path='/sub7' element={<Sub7Component />} />
                        <Route path='/sub8' element={<Sub8Component />} />
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
