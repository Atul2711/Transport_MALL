import React, { useEffect,useState } from 'react';
import {useParams} from 'react-router';
import { useDispatch} from 'react-redux';
import {add} from '../store/cartSlice';
import {Link} from 'react-router-dom';
import loader from '../assets/loading.svg';


export default function Product() {

  const [product,setProduct]=useState({});
  const [status,setStatus]=useState(false);

  const {id} =useParams();
  const dispatch=useDispatch();
  
  useEffect(()=>{
    const getProduct=async()=>{
        setStatus(true);
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
         const data = await res.json();
        //  console.log(data);
         setProduct(data);
         setStatus(false);
    };
        getProduct();
  },[]);
  console.log(product);

  const handleAdd=(product)=>{
    //product to be stored in redux store
      dispatch(add(product)); 
    // console.log("clicked");
}

    
if(status===true){
    return  <img src={loader} alt="Loading ..."/>
  }



  return (
      <>
    <div>
        <h2>{product.title}</h2>
        <div className="productWrapper">
        <div className='productImage'>
            <img src={product.image} alt="" />
        </div>
        <div className='details'>
        <h3>{product.title}</h3>
        <h5>{product.description}</h5>
        <h4>Price: ${product.price}</h4>
        <button onClick={()=> handleAdd(product)} className='btn'>Add to card </button>
        <Link className='navLink' to='/cart'>Go to Cart</Link>
        </div>
        
        
        </div>
    </div>
    </>
  )
}
