import React, {useEffect ,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {add} from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';
import loader from '../assets/loading.svg';
import {Link} from 'react-router-dom';
export default function Products() {

    const dispatch=useDispatch();

    // const Products=useSelector((state)=>state.product);
    // const  { data:products, status }=Products;
    // const [products,setProducts]=useState([]);

    const {data:products,status}=useSelector((state)=>state.product);

  
console.log(products);
    useEffect(()=>{

      dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //         const res = await fetch('https://fakestoreapi.com/products');
        //         const data = await res.json();
        //         console.log(data);
        //         setProducts(data);
        //     };
        //     fetchProducts(); 
    },[]);

    const handleAdd=(product)=>{
        //product to be stored in redux store
          dispatch(add(product)); 
        // console.log("clicked");
    }

    if(status===STATUSES.LOADING){
      return  <img src={loader} alt="Loading ..."/>
    }

    if(status===STATUSES.ERROR){
      return <h2>Something went wrong !</h2>
    }
  return (
    <div className='productsWrapper'>
    {
        products.map(product=>(
            <div className='card' key={product.id}>

                <Link className='navLink' to={`/products/${product.id}`}>
                <img src={product.image}></img>
                <h4>{product.title}</h4>
                <h5>${product.price}</h5>
                </Link>
                <button onClick={()=> handleAdd(product)} className='btn'>Add to card </button>
            </div>
        ))
    }
    </div>
  )
}

