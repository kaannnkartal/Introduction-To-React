import React from 'react'
import ProductData from "../data/ProductData"
import { useNavigate } from 'react-router-dom'


function Home(props) {


  // const setFunction = props.setProduct;

  
  const navigator = useNavigate(); // buton ise link comp kullanılabilir.

  return (
    <>

      <div>
        {
          ProductData.map((product, index) =>{
            return <div key = {index} style={{margin : "10px", border : "1px solid black", color:"blue"}}
            
            onClick={() =>{
              props.setProduct(product);
              navigator(`/detail/${product.id}`);
              
              // props.setProduct(product);
              // setFunction(product);
              
            }}>
              {product.name}</div>
          })
        }

      </div>




      <div>home</div>
      <button onClick={() => {
        navigator("/detail");
      }}>Directing Page</button>
    </>
  )
}

export default Home;
