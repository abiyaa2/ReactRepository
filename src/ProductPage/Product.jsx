import { useEffect } from "react";
import axios from "axios";
import "./Product.css";
import { setProducts } from "./ProductAction";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "./ProductList";


const Product = () => {
 
  const dispatch = useDispatch();
  const products = useSelector((state)=> state.products);
const getProducts=()=>{
    axios.get("https://fakestoreapi.com/products").then((response)=> 
    // console.log(response.data);
    dispatch(setProducts(response.data)));
}
  useEffect(()=>
{
    getProducts();

},[])

  return (
    <>
      <div className="container">
        <div className="row">
     {products.map((product,index)=>(
         <div className="col-md-4" >
            <ProductList key={index}>product={product}</ProductList>
            </div>
        ))}
        </div>
      </div>
    </>
  );
};
export default Product;
