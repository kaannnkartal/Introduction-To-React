import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import arr from "../data/ProductData"

export default function Detail(props) {

    const navigator = useNavigate();
    const {id} = useParams();

    const [data, setData] = useState([]);

    useEffect(() =>{
        setData(arr);
    },[{id}])

    
    return (
        <>
            <div>Detail</div>
            <div>
                <p>Product Details </p>
                <div>
                    <p>{props.product.name}</p>
                    <p>Product id :  {id}</p>
                    <div>
                        {data.filter(dt => dt.id == id)
                        .map((dta,i) => 
                        <div key={i}>
                            {dta.name}
                        </div> 
                        )
                         }
                    </div>
                </div>
            </div>
            <button onClick={() => {
                navigator("/");
            }}>Go Home</button>
        </>
    )
}
