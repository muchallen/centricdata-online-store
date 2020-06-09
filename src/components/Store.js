import React, {useState, useEffect} from 'react'
import {allProducts} from './AllProducts'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './App.css'


export default function Store() {
    
    const [cartnumber , setcartnumber] = useState([])
    const [allProds,setAllProds] = useState([])
    const [quantity, setQuantity] = useState(1)
    var allPoductsagri=[]
    const deleteCart=(prod)=>{
        for ( var i =0 ; i<cartnumber.length; i++){
      
            if(cartnumber[i].product.name===prod.product.name){
                let newcart =[]
                 cartnumber.splice(i,1) 
                 newcart=cartnumber
                 setcartnumber(newcart)
                 return
            }
        }
    }

    const handleClick=(product)=> {
    
        for(var i =0; i<cartnumber.length; i++){
            
             if(cartnumber[i].product.name==product.name){
                alert("product already added")
                    setQuantity(quantity+1)

                 return
             }   
        }
    setcartnumber([...cartnumber,{product}])

    }

    useEffect( 
        ()=>{
        axios.get("http://localhost:9000/allproducts").then(
                async(res)=>{
                        await setAllProds(res.data)
                    
                }
            
    )})

    
  
        allPoductsagri = allProds
        const productzz = allPoductsagri.map((prod)=>{
            const imgsrc= "imagess/"+prod.imageSrc
            return(  
                
    <div className="col-lg-4 col-sm-6" key={prod.pid}> 
    <div className="product-item">
    <div className="pi-pic">
                   <img src={imgsrc} className="imageproduct" style={{width:200,height:250}}  alt=""/>
                   
                   <div className="icon">
                       <h3 className="qty text- "></h3>
                   </div>
                   
    
                   <ul>
                   <li   className="w-icon active "><a  ><i className="icon_bag_alt"></i></a></li>
                       <li className="quick-view add-cart"><a   onClick={()=>handleClick(prod)}>+ Add To Cart</a></li>
                       <li className="remove bg-danger"><a >-</a></li>
                   </ul>
               </div>
               <div className="pi-text">
                   <div className="catagory-name product-name">{prod.category}</div>
                   <a  >
                       <h5 className="pname">${prod.name}</h5>
                   </a>
                   <div className="product-price">
                       {prod.price}.00
                   </div>
               </div>
           </div>
    </div>
            )
        })
        
        

    return (
        <div>
         
                <div className="breacrumb-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb-text">
                        <a ><i className="fa fa-home"></i> Home</a>
                        <span>Shop</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="product-shop spad">
        <div className="container">
            <div className="row main-container">
                <div className="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
                    <div className="filter-widget">
                        <h4 className="fw-title">Categories</h4>
                        <ul className="filter-catagories products-filter">
                            <li  id="all-products" className="active" ><Link to="/all-products">All Products</Link></li>
                            <li  id="insecticides" ><Link to="/laptops">Laptops</Link></li>
                            <li id="hebicides" ><Link to="/desktops">Desktops</Link></li>
                            <li id="fungicides"><Link to="/ict-training">ICT Infrastucture</Link></li>
                            <li id="fungicides"><Link to="/ict-training">ICT Training</Link></li>
                            <li id="nematicides"><Link to="/software-developemnt">Software Development</Link></li>
                            
                        </ul>
                    </div>
                   
                    
                   
                    
                    
                </div>
                <div className="col-lg-9 order-1 order-lg-2">
                    <div className="section-title">
                        <h2 className="section-titlez">All Products</h2>
                    </div>
                    <div className="product-list">
                        <div className="row prod">
                            
                         
                           {productzz}
                            
                            
                                
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}
