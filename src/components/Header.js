import React from 'react'
import{ BrowserRouter as Router,Route,Switch,
    Link } from 'react-router-dom'

export default function Header(props) {

    return (

        <header className="header-section">
        <div className="header-top">
            <div className="container">
                <div className="ht-left">
                    <div className="mail-service">
                        <i className=" fa fa-envelope"></i>
                        hello.centricdata.net
                    </div>
                    <div className="phone-service">
                        <i className=" fa fa-phone"></i>
                        +263 0779 238 324
                    </div>
                </div>
                <div className="ht-right">
                    <a href className="login-panel"><i className="fa fa-user"></i>Login</a>
                    <div className="lan-selector">
                        <select className="language_drop" name="countries" id="countries" style={{width:300}}>
                            <option value='yt' data-image="img/flag-1.jpg" data-imagecss="flag yt"
                                data-title="English">English</option>
                            
                        </select>
                    </div>
                    <div className="top-social">
                        <a href><i className="ti-facebook"></i></a>
                        <a href><i className="ti-twitter-alt"></i></a>
                        <a href><i className="ti-linkedin"></i></a>
                        <a href><i className="ti-pinterest"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="inner-header">
                <div className="row">
                    <div className="col-lg-2 col-md-2">
                        <div className="logo">
                            <a href="./index.html">
                                <img src="imagess/centricdata.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7">
                        <div className="advanced-search">
                            <button type="button" className="category-btn">All Categories</button>
                            <div className="input-group">
                                <input type="text" placeholder="What do you need?"/>
                                <button type="button"><i className="ti-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 text-right col-md-3">
                        <ul className="nav-right">
                           
                            <li className="cart-icon"><a href>
                                    <i className="icon_bag_alt"></i>
                                <span className="cart-products"></span>
                                </a>
                                <div className="cart-hover">
                                    <div className="select-items">
                                        <table>
                                            <tbody className="tbody" > 
                                             
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="select-total">
                                        <span>total:</span>
                                        <h5 className="Total">$0.00</h5>
                                    </div>
                                    <div className="select-button">
                                        <a href="shopping-cart.html" className="primary-btn view-card">VIEW CART</a>
                                        <a href="check-out.html" className="primary-btn checkout-btn">CHECK OUT</a>
                                    </div>
                                </div>
                            </li>
                            <li className="cart-price">$0.00</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="nav-item">
            <div className="container">
                <div className="nav-depart">
                    <div className="depart-btn">
                        <i className="ti-menu"></i>
                        <span>All Poducts</span>
                        <ul className="depart-hover">
                           <li> <Link to="/desktops">Desktops</Link></li>
                            <li><Link to="/laptops">Laptops</Link></li>
                            <li><Link to="/ict-training">ICT Training</Link></li>
                            <li><Link to="/software-developemnt">Software Developemnt</Link></li>
                            
                         </ul>
                    </div>
                </div>
                <nav className="nav-menu mobile-menu">
                    <ul>
                        <li className="li-home" ><Link to="/home">Home</Link></li>
                        <li className="active li-shop"><Link to="/shop">Shop</Link></li>
                        <li className="li-cart"><Link to="/shopping-cart">Shopping Cart</Link></li>
                        <li className="li-checkout"><Link to="/checkout">Checkout</Link></li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap"></div>
            </div>
        </div>
    </header>
    )
}
