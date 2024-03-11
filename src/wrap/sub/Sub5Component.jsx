
import React from 'react';
import './sass/sub5.scss'
import axios from 'axios';

import {useNavigate, useLocation} from 'react-router-dom';
import { WrapContext } from '../wrapContext/WrapContext';


export default function Sub5Component ({회원가입}){

    const { confirmModalOpen, addressSearchOpen, 주소1, 주소2} = React.useContext(WrapContext)

    const {location}  = useLocation();
    const navigate  = useNavigate(); 


    const [state, setState] = React.useState(회원가입) 
    const {
        is인증번호확인, is인증번호받기, is주소검색, 추가입력사항, is추가입력사항, is인증번호성공,is아이디중복확인, is이메일중복확인, is휴대폰번호인증확인,
        info_id, info_pw1, info_pw2, info_name, info_email, info_ph1, info_birth, 체크필수항목카운트,
        아이디, 비밀번호1, 비밀번호2, 이름, 이메일, 휴대폰1, 휴대폰2, 성별, 생년, 생월, 생일, 참여이벤트명, 추천인아이디, 이용약관동의, 전체동의, 
        인증번호발송, 
    } = state

    // 아이디
    const onChangeId = (e)=>{
        // 6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합
        const RegExp=/(([a-zA-Z]+)([0-9]*)){6,16}/g
        let info_id = '';
        if(RegExp.test(e.target.value)===false){
            info_id = '6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합'
        }
        else {
            info_id = ''
        }
        setState({
            ...state,
            아이디: e.target.value,
            info_id : info_id
        })
    }
    const onClickIdBtn = (e) => {
        e.preventDefault();

        const regExp = /(?=.*[A-Za-z])+(?=.*[0-9])*[A-Za-z0-9]{6,16}/g;
        if( regExp.test(아이디)===false ){
            confirmModalOpen('6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합');
        }
        else {
            // 2. 중복검사 Rest API  AXIOS => 서버에 전송
            const formData = new FormData(); 
            formData.append('id', 아이디);
            
            axios({
                url:'https://qwefg.com/kurly/select_id_check.php',
                method:'POST',
                data: formData  // axios 폼데이터 형식으로 전송
            })
            .then((res)=>{

                // console.log( res.data );  // 응답 내용은 String Number(문자열 )
                
                    if(Number(res.data)===0){                   
                        confirmModalOpen('사용 할 수 있는 아이디 입니다');
                        setState({
                            ...state,
                            is아이디중복확인: true
                        });
                    }  
                    else{
                        confirmModalOpen('사용 불가능한 아이디 입니다');
                        setState({
                            ...state,
                            is아이디중복확인: false
                        });
                    }
              

            })
            .catch((err)=>{
                console.log( err );
            });

        }
    }
    
    //비밀번호
    const onChangePw1 =(e)=>{
    //최소 10자 이상 입력 
    const RegExp1 = /(.){10,}/g
    //동일한 숫자 3개 이상 연속 사용 불가
    const RegExp2 = /(\d)\1\1/g
    const regExp3 = /(\d)\1\1/g;
    //영문/숫자/특수문자만 허용하며, 2개 이상 조합
    // 영문+숫자, 영문+특수문자, 숫자+특수문자
    const RegExp3 = /(([0-9]+[a-zA-z]+)+)|(([a-zA-Z]+[0-9]+)+)|(([a-zA-Z]+[~`₩!@#$%^&*()_+\-={}[\]\\\|;':"<>,.?\/]+)+)|(([~`₩!@#$%^&*()_+\-={}[\]\\|;':"<>,.?\/]+[a-zA-Z]+)+)|(([0-9]+[~`₩!@#$%^&*()_+\-={}[\]\\|;':"<>,.?\/]+)+)|(([~`₩!@#$%^&*()_+\-={}[\]\\|;':"<>,.?\/]+[0-9]+)+)/g
    //공백제외
    const RegExp4 = /(\s)/g

    let info_pw1 = '';
    if(RegExp1.test(e.target.value)===false){
        info_pw1 = '최소 10자 이상 입력'
    }
    else if(RegExp2.test(e.target.value)===true){
        info_pw1 = '동일한 숫자 3개 이상 연속 사용 불가'
    }
    else if(RegExp3.test(e.target.value)===false){
        info_pw1 = '영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합'
    }
    else if(RegExp4.test(e.target.value)===true){
        info_pw1 = '영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합'
    }
        setState({
            ...state,
            비밀번호1:e.target.value,
            info_pw1 : info_pw1
        })
    }
    const onChangePw2 =(e)=>{
        // 동일한 비밀번호를 입력
        let info_pw2 = '';
        if(e.target.value===''){
            info_pw2 = '비밀번호를 한번 더 입력해 주세요.'
        }
        else if(e.target.value!==비밀번호1){
            info_pw2 = '동일한 비밀번호를 입력'
        }
        else if (e.target.value===비밀번호1){
            info_pw2 = ''
        }
        setState({
            ...state,
            비밀번호2:e.target.value,
            info_pw2 : info_pw2
        })
    }
    const onChangeName =(e)=>{
        // 이름을 입력해 주세요.
        // 특수문자 입력 X
        // 다른 건 다 됨
        const RegExp1 = /[~`₩!@#$%^&*()_+\-={}[\]\\|;':"<>,.?\/]/g
        let info_name = '';
        let 이름 = e.target.value; // 이게 없으면 특수문자가 들어가기 때문에 적어줌

        // 특수문자이면 삭제 입력 금지
        // 특수문자를 공백으로 치환(replace)
        // 문자열.replace(regExp, '')

        이름 = e.target.value.replace(RegExp1, '');
        if(e.target.value===""){
            info_name = "이름을 입력해 주세요."
        }
        else {
            info_name = ""
        }
        setState({
            ...state,
            이름 : 이름,
            info_name : info_name
        })
    }
    const onChangeEmail =(e)=>{
        // 이메일 형식으로 입력해 주세요.
        const regExp = /^([\.]?[A-Za-z0-9`~!@#$%^&*_+\"'/?{}]+)([.]?)([\.]?[A-Za-z0-9`~!@#$%^&*_+\"'/?{}]*)*@[A-Za-z0-9]+[A-Za-z0-9`~!@#$%^&*_+\"'/?{}]*\.[A-Za-z]{2,3}/g; 
        let info_email = '';
        if(regExp.test(e.target.value)===false){
            info_email = '이메일 형식으로 입력해 주세요.'
        }
        else if(e.target.value === '') {
            info_email = '이메일을 입력해주세요.'
        }
        setState({
            ...state,
            이메일 : e.target.value,
            info_email : info_email
        })
    }

    const onCLickEmailBtn=(e)=>{
        e.preventDefault();
        const regExp = /^[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]+([.]?[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]+)*@[A-Za-z0-9]+[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?.]*\.[A-Za-z]{2,3}$/g;
        
        
        
        if( 이메일==="" ){
            confirmModalOpen('이메일 입력해 주세요.');
        }
        else if( regExp.test(이메일)===false ){
            confirmModalOpen('이메일 형식으로 입력해 주세요.');
        }
        else {
            // 2. 중복검사 Rest API  AXIOS => 서버에 전송

            const formData = new FormData();
            formData.append('email', 이메일);

            axios({
                url:'https://qwefg.com/kurly/select_email_check.php',
                method:'POST',
                data: formData
            })
            .then((res)=>{

                if( res.status === 200 ){
                    if(Number(res.data)===0){                   
                        confirmModalOpen('사용 할 수 있는 이메일 입니다');
                        setState({
                            ...state,
                            is이메일중복확인: true
                        });
                    }  
                    else{
                        confirmModalOpen('사용 불가능한 이메일 입니다');
                        setState({
                            ...state,
                            is이메일중복확인: false
                        });
                    }
                }

            })
            .catch((err)=>{
                console.log( err );
            });

        }
    }
    const onChangePh1 =(e)=>{
        // 특수문자, 영어 입력 X
        // 공백 X
        // 휴대폰 번호를 입력해주세요 = ''

        const RegExp1 =/\D/g
        let info_ph1 =''
        let 휴대폰1 = e.target.value
        let is인증번호받기 = false

        휴대폰1 = e.target.value.replace(RegExp1, '');
        if(e.target.value===''){
            info_ph1 = '휴대폰 번호를 입력해 주세요.'
        }
        else {
            info_ph1 = ''
        }
        if(휴대폰1.length>0){
            is인증번호받기 = true
        }
        else {
            is인증번호받기 = false
        }
        setState({
            ...state,
            휴대폰1 : 휴대폰1, // 필터링 됐기 때문에 해줘야 함
            info_ph1 : info_ph1,
            is인증번호받기 : is인증번호받기
        })
    }

    const onClickph1 =(e)=>{
        e.preventDefault();
        if(is인증번호성공===true){

        }
        else {
            setState({
                ...state,
                휴대폰1 : '',
                is인증번호성공 : false,
            })
        }
        let is인증번호받기 = false;
        let is인증번호확인 = false
        let 인증번호발송 = '';

        const RegExp2 = /01[\d]{1}[\d]{3,4}[\d]{4}/g
        if(RegExp2.test(휴대폰1)===true){
            인증번호발송 = Math.floor((Math.random() * 900000)+100000)
            is인증번호받기 = false;
            is인증번호확인 = true;
            confirmModalOpen(`인증번호가 발송되었습니다. ${인증번호발송}`)
        }
        else {
            confirmModalOpen('잘못된 휴대폰 번호 입니다. 확인 후 다시 시도 해 주세요.')
            is인증번호받기 = true;
            is인증번호확인 = false;
        }
        setState({
            ...state,
            is인증번호받기 : is인증번호받기,
            is인증번호확인 : is인증번호확인,
            인증번호발송:인증번호발송
            
        })
    }

    const onClickPh2 = (e)=>{
        e.preventDefault();
        let is인증번호받기 = false;
        let is인증번호확인 = false;
        let is인증번호성공 = false;
        let is휴대폰번호인증확인 = false;

        if(휴대폰2===인증번호발송){
            is인증번호받기 = true;
            is인증번호확인 = false;
            is인증번호성공 = true;
            is휴대폰번호인증확인 = true;
            confirmModalOpen('인증에 성공하였습니다.')
        }
        else {
            is인증번호받기 = false;
            is인증번호확인 = true;
            is인증번호성공 = false
            is휴대폰번호인증확인 = false
            confirmModalOpen('잘못된 인증번호 입니다.')
        }
        setState({
            ...state,
            is인증번호받기 : is인증번호받기,
            is인증번호확인 : is인증번호확인,
            is인증번호성공 : is인증번호성공,
            is휴대폰번호인증확인 : is휴대폰번호인증확인
        })
    }
    //인증번호입력상자 온체인지 이벤트
    const onChangePh2 =(e)=>{
        if(e.target.value.length>=0){
        }
        else {
        }
        setState({
            ...state,
            휴대폰2 : Number(e.target.value)
        })
    }
    const onClickAddress=(e)=>{
        e.preventDefault();
        addressSearchOpen();
        setState({
            ...state,
            is주소검색 : true
        })
    }
    //주소주소즈소즈소즈솢스조슺ㅅ
   
    React.useEffect((e)=>{
        if(주소1!=='' && 주소2!==''){            
            setState({
                ...state,
                is주소검색: true,
            });
        }

    },[주소1, 주소2]);

    const onChangeAddr2 =(e)=>{
    //     if(주소2==='' || 주소2!==''){
    //     setState({
    //         ...state,
    //         주소2 : e.target.value
    //     })
    // }
    }

    
    // 성별 버튼
    const onChangeGender =(e)=>{
        console.log(e.target.value)
        setState({
            ...state,
            성별 : e.target.value
        })
    }
    const onChangeYear =(e)=>{
        setState({
            ...state,
            생년 : e.target.value
        })
    }
    const onChangeMonth =(e)=>{
        setState({
            ...state,
            생월 : e.target.value
        })
    }
    const onChangeDate =(e)=>{
        setState({
            ...state,
            생일 : e.target.value
        })
    }
    // 생년월일 정규표현식
    // 생년
    // 태어난 년도 4자리를 정확하게 입력해주세요.
    // 현재년도 - 100 <= 입력년도 ==> 생년월일을 다시 확인해주세요.
    // 현재년도 < 입력년도 ===> 생년월일이 미래로 입력 되었습니다.

    // 생월
    // 12 < 입력 월 ===> 태어난 월을 정확하게 입력해주세요.

    // 생일
    // 31 < 입력 일 ===> 태어난 일을 정확하게 입력해주세요.

    React.useEffect(()=>{
        if (생년==='' && 생월==='' && 생일===''){
            setState({
                ...state,
                info_birth : ''
            })
        }
        else {
            if(생년 < 1000 ){
                setState({
                    ...state,
                    info_birth : '태어난 년도 4자리를 정확하게 입력해주세요.'
                })
            }
            else if(생년 < ((new Date().getFullYear())-100)){
                setState({
                    ...state,
                    info_birth : '생년월일을 다시 확인해주세요.'
                })
            }
            else if (생년 > (new Date().getFullYear())){
                setState({
                    ...state,
                    info_birth : '생년월일이 미래로 입력 되었습니다.'
                })
            }
            else { //생년 클리어 !! (아님 미자 안 되는 거 date 때 해야 함)
                setState({
                    ...state,
                    info_birth : '', // 이거 안 해주면 끝까지 나타남... 까다롭네;
                })
                if(생월 === '' || 생월 <1 || 생월 >12){
                    setState({
                        ...state,
                        info_birth : '태어난 월을 정확하게 입력해주세요.'
                    })
                }
                else {
                    if(생일 === '' || 생일 <1 || 생일 >31){
                        setState({
                            ...state,
                            info_birth : '태어난 일을 정확하게 입력해주세요.'
                        })
                    }
                    else if(생년 > ((new Date().getFullYear())-14)){
                        setState({
                            ...state,
                            info_birth : '만 14세 미만은 가입이 불가합니다.'
                        })
                    }
                    else {
                        setState({
                            ...state,
                            info_birth : '',
                        })
                    }
                }
            }
        }

    }, [생년, 생월, 생일])
    
    const onchangeAdd = (e)=>{
        setState({
            ...state,
            is추가입력사항 : true,
            추가입력사항 : e.target.value
        })
    }
    
    const onChangeRecommandId = (e)=>{
        setState({
            ...state,
            추천인아이디: e.target.value
        })
    }
    const onChangeEventId = (e)=>{
        setState({
            ...state,
            참여이벤트명 : e.target.value
        })
    }
    
    const onClickChoochunId=(e)=>{
        e.preventDefault();
        

        // 2. 중복검사 Rest API  AXIOS => 서버에 전송
        const formData = new FormData();
        formData.append('id', 추천인아이디);

        axios({
            url:'https://qwefg.com/kurly/select_choochun_check.php',
            method:'POST',
            data: formData
        })
        .then((res)=>{

            if( res.status === 200 ){
                if(Number(res.data)===1){                   
                    confirmModalOpen('존재하는 아이디 입니다 친구초대 이벤트에 참여 가능해요.');
                }  
                else{
                    confirmModalOpen('존재하지 않는 아이디 입니다.');
                }
            }

        })
        .catch((err)=>{
            console.log( err );
        });


    }

    // 이용약관동의 : 체크 이벤트
    // 전체동의
    // 1.전체동의를 체크하면 e.target.checked === true
    // 이용약관동의 배열에 전체 동의 항목을 모두 삽입
    // 그러면 각 체크박스 항목을 체크 이벤트가 발생하게 된다
    // (모두 체크 됨, 7개 ㅊㅊ)
    
    //2. 전체동듸 체크를 해지하면?
    // 이용약관동의 배열을 모두 비운다. === > 빈배열 됨
    // 그러면 각 체크박스 항목을 체크==false 이벤트가 발생되게 한다.
    // (모두 체크 해제 됨 7개 ㅗㅗ)


    const onChangeAllAgree =(e)=>{
        if(e.target.checked===true){
            setState({
                ...state,
                이용약관동의 : 전체동의
            })
        }
        else {
            setState({
                ...state,
                이용약관동의 : []
            })
        }
    }
    //개별체크 이벤트
    //체크가 선택되면 이용약관동의 배열에 체크항목을 추가
    // 구현 방법은? 누적추가

    //체크 해제되면 배열에 체크항목 삭제
    // 구현 방법은? 배열에 저장된 항목 중 체크 해제한 항목을 제외하고 재구성

    //필터 메서드를 활용해서 체크 해제된 항목만 제외하고 배열을 재구성
    //화살표함수 한 줄 코딩(중괄호 제외) 즉시 처리 반환
    const onChangeAgree=(e)=>{
        let imsi = [];
        if(e.target.checked===true){
            imsi = [...이용약관동의, e.target.value];
        }
        else {
            imsi = 이용약관동의.filter((item)=>item !== e.target.value)
        }
        setState({
            ...state,
            이용약관동의 : imsi
        })
    }
    React.useEffect(()=>{

        const arr = 이용약관동의.map((item)=>item.includes('필수') ? 1 : 0);
        //예] arr[0,1,1,0,0,0,1];
        
        let sum = 0;
        arr.map((item)=>{
            sum += item; // 누적연산 0+1+1+0+0+0+1 => 3
        });
        
        setState({
            ...state,
            체크필수항목카운트: sum
        })

    },[이용약관동의]);

    // 폼 전송
    const onSubmitSignup=(e)=>{
        e.preventDefault();
        // 유효성 검사
        // 폼 입력상자 모든 빈값 체크
        if( 아이디 ===  ""){
            confirmModalOpen('아이디를 입력하세요');
        }
        else if( is아이디중복확인 ===  false){
            confirmModalOpen('아이디 중복확인을 하세요');
        }        
        else if( 비밀번호1 ===  ""){
            confirmModalOpen('비밀번호를 입력하세요');
        }        
        else if( 비밀번호2 ===  ""){
            confirmModalOpen('비밀번호를 한번더 입력하세요');
        }
        else if( 이름 ===  ""){
            confirmModalOpen('이름을 입력하세요');
        }
        else if( 이메일 ===  ""){
            confirmModalOpen('이메일 입력하세요');
        }
        else if( is이메일중복확인 ===  false){
            confirmModalOpen('이메일 중복확인을 하세요');
        } 
        else if( 휴대폰1 ===  ""){
            confirmModalOpen('휴대폰 입력하세요');
        }
        else if( is휴대폰번호인증확인 ===  false){
            confirmModalOpen('휴대폰번호를 인증하세요');
        }
        else if( 주소1 ===  ""){
            confirmModalOpen('주소를 입력하세요');
        }
        else if( 주소2 ===  ""){
            confirmModalOpen('나머지 주소를 입력하세요');
        }
        else if(  체크필수항목카운트 !== 3 ){
            confirmModalOpen('이용약관동의 필수 항목 3개 이상을 선택하세요');
        }
        else {
            //  전송 준비
            // 휴대폰 형식
            //const regExp = /^(\d{3})(\d{3,4})(\d{4})$/g;
            // 휴대폰  010-7942-5305  010-348-6441
            
            //const regExp2 = /^(\d{6})(\d{7})$/g;
            // 주민번호  701021-1661033 주민번호.replace(regExp, '$1-$2')
            
            //const regExp3 = /^(\d{3})(\d{2})(\d{5})$/g;
            // 사업자번호 834-30-01199 사업자번호.replace(regExp, '$1-$2-$3')

            // 휴대폰 형식
            const regExp = /^(\d{3})(\d{3,4})(\d{4})$/g;



            // 서버에 전송될 폼데이터 준비
            const formData = new FormData(); // 폼데이터 객체 생성
            formData.append("id", 아이디);
            formData.append("pw", 비밀번호1);
            formData.append("name", 이름);
            formData.append("email", 이메일);
            formData.append("hp", 휴대폰1.replace(regExp, '$1-$2-$3')); 
            formData.append("addr", `${주소1} ${주소2}`);
            formData.append("gender", 성별);
            formData.append("birth", `${생년}-${생월}-${생일}`);
            formData.append("chooga_input", `${추가입력사항} ${참여이벤트명} ${추천인아이디}`);
            formData.append("service", 이용약관동의);

            axios({
                url:'https://qwefg.com/kurly/signup.php', // 서버사이드 스크립트 언어 파일  signup.php
                method:'POST',
                data: formData
            })
            .then((res)=>{
                if(res.status===200){  
                    console.log(res.data)
                    if(res.data===1){
                        confirmModalOpen('회원가입을 진심으로 감사드립니다.');
                        setTimeout(() => {
                            //window.location.pathname = '/index'; 
                            // 라우터 네비게이트 사용
                            navigate('/index');  // 홈으로 이동

                        }, 2000);
                    }   
                    else{
                        confirmModalOpen('회원가입 폼데이터를 확인하고 다시 시도해주세요');
                    }              
                }
                
            })
            .catch((err)=>{
                console.log( err );
            });



        }




    }
    
    return (
        <div id='sub5'>
            <div className="container">
                <div className="title">
                    <h3>회원가입</h3>
                    <div className="small-title">
                        <i>*</i><span>필수입력사항</span>
                    </div>
                </div>
                <div className="content">
                    <form onSubmit={onSubmitSignup}>
                        <div className="personal">
                            <ul>
                                <li>
                                    <div className="gap">
                                        <label htmlFor="userId">아이디<i>*</i></label>
                                        <input type="text"name='user_id' id='userId' placeholder='아이디를 입력해주세요'
                                        value={아이디}
                                        onChange={onChangeId}
                                        maxLength={17}/>
                                        <button onClick={onClickIdBtn}>중복확인</button>
                                        <p className='info'>{info_id}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <label htmlFor="pw">비밀번호<i>*</i></label>
                                        <input type="password" name='user_id' id='userId' placeholder='비밀번호를 입력해주세요'
                                        value={비밀번호1}
                                        onChange={onChangePw1}
                                        maxLength={16}/>
                                        <p className='info'>{info_pw1}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <label htmlFor="pw">비밀번호확인<i>*</i></label>
                                        <input type="password" name='user_id' id='userId' placeholder='비밀번호를 한번 더 입력해주세요'
                                        value={비밀번호2}
                                        onChange={onChangePw2}
                                        maxLength={16}/>
                                        <p className='info'>{info_pw2}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <label htmlFor="name">이름<i>*</i></label>
                                        <input type="text" name='user_id' id='userId' placeholder='이름을 입력해주세요'
                                        value={이름}
                                        onChange={onChangeName}
                                        maxLength={20}/>
                                        <p className='info'>{info_name}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <label htmlFor="email">이메일<i>*</i></label>
                                        <input type="text" name='user_id' id='userId' placeholder='예: marketkurly@kurly.com'
                                        value={이메일}
                                        onChange={onChangeEmail}
                                        maxLength={200}/>
                                        <button onClick={onCLickEmailBtn}>중복확인</button>
                                        <p className='info'>{info_email}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <label htmlFor="ph">휴대폰<i>*</i></label>
                                        <input type="text" name='user_id' id='userId' placeholder='숫자만 입력해주세요.'
                                        value={휴대폰1}
                                        onChange={onChangePh1}
                                        maxLength={11}/>
                                        
                                        <button 
                                        onClick={onClickph1} className={state.is인증번호받기 ? '' : 'off'}>{is인증번호성공 ? '다른번호 인증' : '인증번호 받기'}</button>
                                    
                                    {/* {is인증번호성공 &&
                                        <button 
                                        onClick={onClickph11} className={state.is인증번호받기 ? '' : 'off'}>다른번호 인증</button>
                                    } */}
                                        <p className='info'>{info_ph1}</p>
                                    </div>
                                </li>
                                {is인증번호확인 &&<>
                                <li>
                                    <div className="gap long">
                                        <input type="text" name='user_id' id='userId' value={휴대폰2}
                                        onChange={onChangePh2}/>
                                        <button onClick={onClickPh2} className={state.is인증번호확인 ? '' : 'off'}>인증번호 확인</button>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap long">
                                    <span>인증번호가 오지 않는다면, 통신사 스팸 차단 서비스 혹은 휴대폰 번호 차단 여부를 확인해주세요. <br />
                                        (컬리 1644-1107)</span>
                                    </div>
                                </li>
                                </>}
                                <li>
                                    <div className="gap">
                                        <label htmlFor="addr">주소<i>*</i></label>
                                        {is주소검색 && 
                                        
                                            <input type="text" name="addr1" id="addr1" value={주소1}  placeholder='주소를 입력해주세요' />
                                            }
                                            {is주소검색 ||
                                            <button onClick={onClickAddress} className={`address ${state.is주소검색 ? 'on' : ''}`}><img src="./img/header/zoom_purple.svg"alt="" />
                                            {is주소검색 ? '재검색' : '주소검색'}</button>
                                            }
                                    </div>
                                </li>
                                {is주소검색 && 
                                <li>
                                    <div className="gap">       
                                            <input type="text" name="addr2" id="addr2" placeholder='나머지 주소를 입력해주세요' value={주소2}
                                            onChange={onChangeAddr2}/>
                                    </div>
                                </li>
                                }
                                <li>
                                    <div className="gap">

                                {is주소검색 &&<>
                                        <h4>샛별배송</h4>
                                        <br />
                                        </>
                                }
                                        <span>배송지에 따라 상품 정보가 달라질 수 있습니다</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <label htmlFor="gender">성별</label>
                                        <div className="gender-box">
                                            <label htmlFor="male">
                                            <input type="radio" name='gender' id='male' value='male'
                                            onChange={onChangeGender}
                                            checked={state.성별.includes('male')}/>남자
                                            </label>
                                            <label htmlFor="female">
                                            <input type="radio" name='gender' id='female' value='female' 
                                            onChange={onChangeGender}
                                            checked={state.성별.includes('female')}
                                            />여자
                                            </label>
                                            <label htmlFor="none">
                                            <input type="radio" name='gender' id='none' value='none' 
                                            onChange={onChangeGender}
                                            checked={state.성별.includes('none')}/>선택안함
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <label htmlFor="birth">생년월일</label>
                                        <div className="birth-box">
                                            <input type="text" name='year' id='year' value={생년} 
                                            maxLength={4}
                                            onChange={onChangeYear}
                                            placeholder='YYYY' />
                                            <span>/</span>
                                            <input type="text" name='month' id='month' value={생월}  
                                            onChange={onChangeMonth}
                                            maxLength={2}
                                            placeholder='MM' />
                                            <span>/</span>
                                            <input type="text" name='date' id='date' value={생일} 
                                            onChange={onChangeDate}
                                            maxLength={2}
                                            placeholder='DD' />
                                        </div>
                                            <p className='info'>{info_birth}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <label htmlFor="add">추가입력사항</label>
                                        <div className="add-box">
                                            <label htmlFor="add1">
                                                <input type="radio" name='add1' id='add1' value='친구초대 추천인 아이디'
                                                onChange={onchangeAdd}
                                                checked={state.추가입력사항.includes('친구초대 추천인 아이디')}/>친구초대 추천인 아이디
                                            </label>
                                            <label htmlFor="add2">
                                                <input type="radio" name='add2' id='add2' value='참여 이벤트명' 
                                                onChange={onchangeAdd}
                                                checked={state.추가입력사항.includes('참여 이벤트명')}/>참여 이벤트명
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                {is추가입력사항 &&(<>
                                <li>
                                    <div className="gap long">
                                        
                                        {
                                        추가입력사항 === '친구초대 추천인 아이디' && <>
                                        <input className='long' type="text" name='choochun1_id' id='choochun1' 
                                        value={추천인아이디}
                                        onChange={onChangeRecommandId}
                                        placeholder='추천인 아이디를 입력해주세요.' />
                                        <button onClick={onClickChoochunId}>아이디 확인</button>
                                        </>
                                        }

                                        {
                                        추가입력사항 === '참여 이벤트명' &&
                                        <input className='long' type="text" name='chamEvent_Id' id='chamEventId' 
                                        value={참여이벤트명}
                                        onChange={onChangeEventId}
                                        placeholder='참여 이벤트명을 입력해주세요.' />
                                        }
                                    </div>
                                </li>
                                
                                <li className='span'>
                                    <div className="gap long">
                                    {
                                        추가입력사항 === '친구초대 추천인 아이디' &&
                                    <span>가입 후 7일 내 첫 주문 배송완료 시, 친구초대 이벤트 적립금이 지급됩니다.</span>}
                                    {
                                        추가입력사항 === '참여 이벤트명' &&
                                    <span>추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다. <br />가입 이후는 수정이 불가능 합니다. <br />대소문자 및 띄어쓰기에 유의해주세요.</span>}
                                    </div>
                                </li>
                                </>)}
                            </ul>
                        </div>
                        <div className="agree">
                            <div className="gap agree">
                                <label htmlFor="">이용약관동의<i>*</i></label>
                                <div className="agree-box">
                                    <ul>
                                        <li>
                                            <div className="service">
                                                <label className='everyAgree' htmlFor="">
                                                    <input type="checkbox"
                                                    name='service'
                                                    id='check1'
                                                    value='전체 동의합니다'
                                                    onChange={onChangeAllAgree} 
                                                    checked={이용약관동의.length===7}/>전체 동의 합니다.
                                                </label>
                                            </div>

                                            <h5>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</h5>
                                        </li>
                                        <li>
                                            <div className="service">
                                                <label htmlFor="">
                                                <input type="checkbox" name='service' id='check2'
                                                value='이용약관동의(필수)'
                                                onChange={onChangeAgree}
                                                checked={이용약관동의.includes('이용약관동의(필수)')} />이용약관동의<em>(필수)</em>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="service">
                                                <label htmlFor="">
                                                <input type="checkbox" name='service' id='check3'
                                                onChange={onChangeAgree}
                                                value='개인정보 수집∙이용 동의(필수)'
                                                checked={이용약관동의.includes('개인정보 수집∙이용 동의(필수)')}/>개인정보 수집∙이용 동의<em>(필수)</em>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="service">
                                                <label htmlFor="">
                                                <input type="checkbox" name='service' id='check4'
                                                onChange={onChangeAgree}
                                                value='개인정보 수집∙이용 동의(선택)'
                                                checked={이용약관동의.includes('개인정보 수집∙이용 동의(선택)')}/>개인정보 수집∙이용 동의<em>(선택)</em>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="service">
                                                <label htmlFor="">
                                                <input type="checkbox" name='service' id='check5'
                                                onChange={onChangeAgree}
                                                value='무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)'
                                                checked={이용약관동의.includes('무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)')}/>무료배송, 할인쿠폰 등 혜택/정보 수신 동의<em>(선택)</em>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="service notice">
                                                <label className='sns'  htmlFor="">
                                                <input type="checkbox" name='service' id='check6'
                                                onChange={onChangeAgree}
                                                checked={이용약관동의.includes('SMS')}
                                                value='SMS' />SMS
                                                </label>

                                                <label  className='sns' htmlFor="">
                                                <input type="checkbox" name='service' id='check7'
                                                    onChange={onChangeAgree}checked={이용약관동의.includes('이메일')}
                                                value='이메일' />이메일
                                                </label>
                                            </div>
                                        </li>
                                        <li className='li-sns'>
                                            <div className="service">
                                                <label htmlFor="">
                                                    <div className="icon-sns">
                                                        <img src="./img/sub5/ico_sub_dot.svg" alt="" />
                                                        <h6>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</h6>
                                                    </div>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="service">
                                                <label htmlFor="">
                                                <input type="checkbox" name='service' id='check8'
                                                onChange={onChangeAgree}
                                                checked={이용약관동의.includes('본인은 만 14세 이상입니다(필수)')}
                                                value='본인은 만 14세 이상입니다(필수)' />본인은 만 14세 이상입니다.<em>(필수)</em>
                                                </label>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="signUp">
                            <button>가입하기</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

Sub5Component.defaultProps = {
    회원가입 : {
        is인증번호받기 : false,
        is인증번호확인 : false,
        is주소검색 : false,
        is추가입력사항 : '',
        추가입력사항 : '',
        is인증번호성공: false,
        is아이디중복확인 : false,
        is이메일중복확인 : false,
        is휴대폰번호인증확인 : false,


        인증번호발송 : '',

        info_id: '',
        info_pw1 : '',
        info_pw2 : '',
        info_email : '',
        info_name : '',
        info_ph1 : '',
        info_birth : '',

        아이디:'',
        비밀번호1:'',
        비밀번호2: '',
        이름 : '',
        성별 : 'none', 
        이메일 : '',
        휴대폰1 : '',
        휴대폰2 : '',
        생년 : '',
        생월 : '',
        생일 : '',
        추천인아이디: '',
        참여이벤트명: '',

        전체동의 : [
            
            '이용약관동의(필수)',
            '개인정보 수집∙이용 동의(필수)',
            '개인정보 수집∙이용 동의(선택)',
            '무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)',
            'SMS',
            '이메일',
            '본인은 만 14세 이상입니다(필수)'
            ],
        이용약관동의 : [],
        체크필수항목카운트 : 0
    }
}