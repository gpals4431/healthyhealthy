import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/css/bootstrap.min.css';
//import '../styles/css/elegant-icons.css';
import '../styles/css/font-awesome.min.css';
//import '../styles/css/jquery-ui.min.css';
//import '../styles/css/nice-select.css';
// import '../styles/css/owl.carousel.min.css';
//import '../styles/css/slicknav.min.css';
import '../styles/css/style.css';

const Info = () => {
    return (
        // <!-- 내정보 Section Begin -->
        <div className='info'>
            <section className="info">
                <div className="container">
                    <div class="row-2">
                        <div class="col-lg-12">
                            <div class="hero__search">
                                <div class="hero__item set-bg" data-setbg="img/hero/banner.jpg">
                                    <div class="hero__text">
                                        <span>FRUIT FRESH</span>
                                        <h2>Vegetable <br />100% Organic</h2>
                                        <p>Free Pickup and Delivery Available</p>
                                        <a href="#" class="primary-btn">SHOP NOW</a>
                                    </div>
                                </div>
                                <br />
                                <br />
                                {/* <div class="hero__search__form" style="width: 100%;">
                                    <form action="#">
                                        <div class="hero__search__categories">
                                            내정보
                                        </div>
                                        <input type="text" placeholder="What do yo u need?">
                                            <button type="submit" class="site-btn">SEARCH</button>
                                        </input>
                                    </form>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const Exercise = () => {
    return (
        // <!-- 운동 Section Begin -->
        <section class="excise">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title">
                            <h2>추천 운동 영상</h2>
                        </div>
                        <div class="categories__slider owl-carousel">
                            <div class="col-lg-3">
                                <div class="categories__item set-bg" data-setbg="img/categories/cat-1.jpg">
                                    <h5><a href="#">Fresh Fruit</a></h5>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="categories__item set-bg" data-setbg="img/categories/cat-2.jpg">
                                    <h5><a href="#">Dried Fruit</a></h5>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="categories__item set-bg" data-setbg="img/categories/cat-3.jpg">
                                    <h5><a href="#">Vegetables</a></h5>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="categories__item set-bg" data-setbg="img/categories/cat-4.jpg">
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="categories__item set-bg" data-setbg="img/categories/cat-5.jpg">
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Nutrition = () => {
    return(
        <section class="nutrition">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title from-blog__title">
                        <h2>추천 레시피</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="blog__item">
                        <div class="blog__item__pic">
                            {/* <img src="img/blog/blog-1.jpg" alt=""> */}
                        </div>
                        <div class="blog__item__text">
                            <ul>
                                <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                                <li><i class="fa fa-comment-o"></i> 5</li>
                            </ul>
                            <h5><a href="#">Cooking tips make cooking simple</a></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="blog__item">
                        <div class="blog__item__pic">
                            {/* <img src="img/blog/blog-2.jpg" alt=""> */}
                        </div>
                        <div class="blog__item__text">
                            <ul>
                                <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                                <li><i class="fa fa-comment-o"></i> 5</li>
                            </ul>
                            <h5><a href="#">6 ways to prepare breakfast for 30</a></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="blog__item">
                        <div class="blog__item__pic">
                            {/* <img src="img/blog/blog-3.jpg" alt=""> */}
                        </div>
                        <div class="blog__item__text">
                            <ul>
                                <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                                <li><i class="fa fa-comment-o"></i> 5</li>
                            </ul>
                            <h5><a href="#">Visit the clean farm in the US</a></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

const Crew = () => {
    return(
        <section class="crew">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>크루 모집</h2>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="latest-product__text">
                        <h4>인기 크루</h4>
                        <div class="latest-product__slider owl-carousel">
                            <div class="latest-prdouct__slider__item">
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        {/* <img src="img/latest-product/lp-1.jpg" alt=""> */}
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        {/* <img src="img/latest-product/lp-2.jpg" alt=""> */}
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        {/* <img src="img/latest-product/lp-3.jpg" alt=""> */}
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                            <div class="latest-prdouct__slider__item">
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        {/* <img src="img/latest-product/lp-1.jpg" alt=""> */}
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        {/* <img src="img/latest-product/lp-2.jpg" alt=""> */}
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        {/* <img src="img/latest-product/lp-3.jpg" alt=""> */}
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="latest-product__text">
                        <h4>최신 크루</h4>
                        <div class="latest-product__slider owl-carousel">
                            <div class="latest-prdouct__slider__item">
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        {/* <img src="img/latest-product/lp-1.jpg" alt=""> */}
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        {/* <img src="img/latest-product/lp-2.jpg" alt=""> */}
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        {/* <img src="img/latest-product/lp-3.jpg" alt=""> */}
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                            <div class="latest-prdouct__slider__item">
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        {/* <img src="img/latest-product/lp-1.jpg" alt=""> */}
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        {/* <img src="img/latest-product/lp-2.jpg" alt=""> */}
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        {/* <img src="img/latest-product/lp-3.jpg" alt=""> */}
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="latest-product__text">
                        <h4>랜덤 크루</h4>
                        <div class="latest-product__slider owl-carousel">
                            <div class="latest-prdouct__slider__item">
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        {/* <img src="img/latest-product/lp-1.jpg" alt=""> */}
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        {/* <img src="img/latest-product/lp-2.jpg" alt=""> */}
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        {/* <img src="img/latest-product/lp-3.jpg" alt=""> */}
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                            <div class="latest-prdouct__slider__item">
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        {/* <img src="img/latest-product/lp-1.jpg" alt=""> */}
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        {/* <img src="img/latest-product/lp-2.jpg" alt=""> */}
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" class="latest-product__item">
                                    <div class="latest-product__item__pic">
                                        {/* <img src="img/latest-product/lp-3.jpg" alt=""> */}
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

const Main = () => {
    return (
        <div>
            <Info />
            <Exercise />
            <Nutrition/>
            <Crew/>
        </div>
    )
}

export default Main;