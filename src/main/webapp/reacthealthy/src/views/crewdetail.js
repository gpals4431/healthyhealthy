import React from "react";

const CrewDetail = () => {
    return (
        <>
            <section class="product-details spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="product__details__pic">
                                <div class="product__details__pic__item">
                                    <img class="product__details__pic__item--large" src="img/product/details/product-details-1.jpg" alt="" />
                                </div>
                                <div class="product__details__pic__slider owl-carousel">
                                    <img data-imgbigurl="img/product/details/product-details-2.jpg" src="img/product/details/thumb-1.jpg" alt="" />
                                    <img data-imgbigurl="img/product/details/product-details-3.jpg" src="img/product/details/thumb-2.jpg" alt="" />
                                    <img data-imgbigurl="img/product/details/product-details-5.jpg" src="img/product/details/thumb-3.jpg" alt="" />
                                    <img data-imgbigurl="img/product/details/product-details-4.jpg" src="img/product/details/thumb-4.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="product__details__text">
                                <h3>제목</h3>
                                <div class="product__details__rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half-o"></i>
                                    <span>(18 reviews)</span>
                                </div>
                                <p>소개글</p>
                                <a href="#" class="primary-btn">참여하기</a>
                                <a href="#" class="heart-icon"><span class="icon_heart_alt"></span></a>
                                <ul>
                                    <li><b>모집기간</b> <span>23.01.02~03.03</span></li>
                                    <li><b>모집인원</b> <span>3/5</span></li>
                                    <li><b>위치</b> <span>보라매 공원</span></li>
                                    <li><b>친구랑 함께하기</b>
                                        <div class="share">
                                            <a href="#"><i class="fa fa-facebook"></i></a>
                                            <a href="#"><i class="fa fa-twitter"></i></a>
                                            <a href="#"><i class="fa fa-instagram"></i></a>
                                            <a href="#"><i class="fa fa-pinterest"></i></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

const CrewInfo = () => {
    return (
        <div class="col-lg-12">
            <div class="product__details__tab">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab"
                            aria-selected="false">Information</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab"
                            aria-selected="false">Reviews <span>(1)</span></a>
                    </li>
                </ul>

                <div class="tab-pane" id="tabs-2" role="tabpanel">
                    <div class="product__details__tab__desc">
                        <h6>Products Infomation</h6>
                        <p>소개글.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const CrewReview = () => {
    return (
        <div class="tab-pane" id="tabs-3" role="tabpanel">
            <div class="product__details__tab__desc">
                <h3>리뷰글 </h3>
                <div class="blog__details__content">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="blog__details__author">
                                <div class="blog__details__author__text">
                                    <hr />
                                    <h6>작성자 id
                                        <span>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half-o"></i>
                                        </span>
                                    </h6>
                                    <br />
                                    <ul>
                                        <li><span>Categories:</span> 러닝</li>
                                    </ul>
                                    <br />
                                    <p>너무 좋았습니다. 다음에 또 하고싶네요</p>
                                </div>

                                {/* <div class="btn" style="text-align: right; width: 100%;"> */}
                                <div>
                                    <button class="site-btn">수정</button>
                                    <button class="site-btn">삭제</button>
                                    <button class="site-btn">답글달기</button>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="btn" style="text-align: right; width: 100%;"> */}
                <div>
                    <button type="submit" class="site-btn">리뷰쓰기</button>
                </div>
                {/* <!-- Contact Form Begin --> */}
                <div class="contact-form spad">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="contact__form__title">
                                    <h4>리뷰작성</h4>
                                </div>
                            </div>
                        </div>
                        <form action="#">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 text-center">
                                    {/* <textarea style="width: 80%;" placeholder="Your message"></textarea> */}
                                    <textarea></textarea>
                                    <br />
                                    {/* <button style="text-align: center;" */}
                                        <button type="submit" class="site-btn">댓글달기</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

const CrewBoard = () => {
    return (
        <>
            <CrewDetail />
            <CrewInfo />
            <CrewReview />
        </>
    );
}
export default CrewBoard;