import React from 'react';

export default function Section1ChildComponent ({슬라이드}) {

    const slideWrap = React.useRef();
    const [cnt, setCnt] = React.useState(0);
    const [n, setN] = React.useState(0);
    const [play, setPlay] = React.useState(true);
    const [toggle, setToggle] = React.useState(0);


    // 슬라이드 너비 정해주기
    React.useEffect(()=>{
        slideWrap.current.style.width = `${100 * 슬라이드.length}%`
        setN((슬라이드.length-2))
    }, [슬라이드])
    //메인 슬라이드
    const mainSlide = () => {
        slideWrap.current.style.transform = `translate(${-1800 * cnt}px)`
        slideWrap.current.style.transition = `all 0.5s ease-in-out`
        console.log(cnt)
        returnSlide();
    }
    //메인 슬라이드 실행
    React.useEffect(()=>{
        if(toggle===0){
            mainSlide();
        }
        else {
            setToggle(0)
            setTimeout(function(){
                mainSlide();
            }, 100)
        }
    }, [cnt])

    // 리턴 함수

    const returnSlide=()=>{
        if(cnt>n){
            setCnt(1)
            setToggle(1)
            slideWrap.current.style.transform = `translate(${-1800 * 0}px)`
            slideWrap.current.style.transition = `none`
        }
        if (cnt<0){
            setCnt(n-1)
            setToggle(1)
            slideWrap.current.style.transform = `translate(${-1800 * n}px)`
            slideWrap.current.style.transition = `none`
        }
    }

    const onMouseEnterSlide = () => {
        setPlay(false)
    }
    const onMouseLeaveSlide = () => {
        setPlay(true)
    }
    
    //타이머 함수
    React.useEffect(()=>{
        let Timer = 0;
        if(play===true){
            Timer = setInterval(()=>{
                setCnt(cnt=>cnt+1)
            }, 3000)
            return()=>clearInterval(Timer)
        }

    }, [play])

    const onClickPrevtBtn = (e) => {
        e.preventDefault();
        setCnt(cnt-1)
    }
    const onClickNextBtn = (e) => {
        e.preventDefault();
        setCnt(cnt+1)

    }
    return (
        <div className="slide-container">
            <div className="slide-content">
                <div className="slide">
                    <ul onMouseEnter={onMouseEnterSlide} onMouseLeave={onMouseLeaveSlide} ref={slideWrap}>
                        {
                            슬라이드.map ((item, idx)=>{
                                return(
                                    <li key={item.번호}>
                                        <img src={`./img/section1/${item.이미지}`} alt="" />
                                    </li>
                                    )
                                })
                            }
                    </ul>
                </div>
            </div>
            <div className="btn-box">
                <img onClick={onClickPrevtBtn} src="./img/section1/next_arrow.svg" alt="" />
                <img onClick={onClickNextBtn} src="./img/section1/next_arrow.svg" alt="" />
            </div>
            <div className="page-num"><h4>{cnt+1>n ? 1 : cnt+1}<span>/</span>{슬라이드.length-2}</h4></div>
        </div>
    );
};

