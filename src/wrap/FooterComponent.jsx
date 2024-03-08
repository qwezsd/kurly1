import React from 'react';
import './sass/footer.scss'

export default function FooterComponent () {
    return (
        <div id='footer'>
            <div className="container">
                <div className="content">
                    <div className="row1">
                        <div className="left">
                            <div className="p1">
                                <h3>고객행복센터</h3>
                            </div>
                            <div className="p2"><h4><strong>1644-1107</strong>월~토요일 오전 7시 - 오후 6시</h4></div>
                            <div className="p3">
                                <div className="p3-box">
                                    <button>카카오톡 문의</button>
                                    <h5>
                                        월~토요일 | 오전 7시 - 오후 6시
                                        <br />
                                        오전 7시 - 오후 6시
                                        </h5>
                                </div>
                                <div className="p3-box">
                                    <button>1:1 문의</button>
                                    <h5>
                                        365일
                                        <br />
                                        고객센터 운영시간에 순차적으로 답변드리겠습니다.
                                        </h5>
                                </div>
                                <div className="p3-box">
                                    <button>대량주문 문의</button>
                                    <h5>
                                        월~금요일 | 오전 9시 - 오후 6시
                                        <br />
                                        점심시간 | 낮 12시 - 오후 1시
                                        </h5>
                                </div>
                            </div>
                            <div className="p4">
                                <h6>비회원 문의 : <a href="mailto:help@kurlycorp.com">help@kurlycorp.com</a></h6>
                            </div>
                        </div>
                        <div className="right">
                            <div className="top">
                                <ul>
                                    <li><span>컬리소개</span></li>
                                    <li><span>컬리소개영상</span></li>
                                    <li><span>투자정보</span></li>
                                    <li><span>인재채용</span></li>
                                    <li><span>이용약관</span></li>
                                    <li><em>개인정보처리방침</em></li>
                                    <li><span>이용안내</span></li>
                                </ul>
                            </div>
                            <div className="center">
                                <h5>
                                법인명 (상호) : 주식회사 컬리 |  사업자등록번호 : 261-81-23567 <a href="!#">사업자정보 확인</a><br />통신판매업 : 제 2018-서울강남-01646 호<br />주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) |  대표이사 : 김슬아 <br />
                                채용문의 : <a href="mailto:recruit@kurlycorp.com">recruit@kurlycorp.com</a><br />팩스: 070 - 7500 - 6098
                                </h5>
                            </div>
                            <div className="bottom">
                                <img src="./img/footer/ico_instagram.webp" alt="" />
                                <img src="./img/footer/ico_fb.webp" alt="" />
                                <img src="./img/footer/ico_blog.webp" alt="" />
                                <img src="./img/footer/ico_naverpost.webp" alt="" />
                                <img src="./img/footer/ico_youtube.webp" alt="" />
                            </div>
                           
                        </div>
                    </div>
                    <div className="row2">
                        <div className="payment">
                            <img src="./img/footer/logo_isms.svg" alt="" />
                            <h6>[인증범위] 컬리 쇼핑몰 서비스 개발·운영<br />
                            (심사받지 않은 물리적 인프라 제외) <br />
                            [유효기간] 2022.01.19 ~ 2025.01.18
                            </h6>
                        </div>
                        <div className="payment">
                            <img src="./img/footer/logo_privacy.svg" alt="" />
                            <h6>개인정보보호 우수 웹사이트 ·<br />
                            개인정보처리시스템 인증 (ePRIVACY PLUS)
                            </h6>
                        </div>
                        <div className="payment">
                            <img  className='toss' src="./img/footer/logo_tosspayments.svg" alt="" />
                            <h6>
                                토스페이먼츠 구매안전(에스크로)<br />
                                서비스를 이용하실 수 있습니다.
                            </h6>
                        </div>
                        <div className="payment">
                            <img src="./img/footer/logo_wooriBank.svg" alt="" />
                            <h6>
                            고객님이 현금으로 결제한 금액에 대해 우리은행과<br />채무지급보증 계약을 체결하여 안전거래를 보장하고<br />
                            있습니다.
                            </h6>
                        </div>
                    </div>
                    <div className="row3">
                        <div className="copyRight">
                            <h5>
                            컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
                            <br />
                            마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
                            <br />
                            </h5>
                            <em>

                            © KURLY CORP. ALL RIGHTS RESERVED
                            </em>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};