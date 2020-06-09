import React, {Fragment} from 'react'

export default function Cart() {
    return (
        <Fragment>
                <section className="shopping-cart spad">
        <div className="container">
            <div className="row ">
                <div className="col-lg-12">
                    <div className="cart-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th className="p-name">Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th><i className="ti-close"></i></th>
                                </tr>
                            </thead>
                            <tbody className="ttbody">
                               
                                
                                
                            </tbody>
                        </table>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="cart-buttons">
                                <a href="#" className="primary-btn up-cart">Update cart</a>
                            </div>
                            
                        </div>
                        <div className="col-lg-4 offset-lg-4">
                            <div className="proceed-checkout">
                                <ul>
                                    <li >Subtotal <span className="subtotal">$0.00</span></li>
                                    <li >Total <span className="cart-total">$0.00</span></li>
                                </ul>
                                <a href="check-out.html" className="proceed-btn">PROCEED TO CHECK OUT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </Fragment>
    )
}
