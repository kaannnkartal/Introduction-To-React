import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Restapi() {


    const [country, setCountry] = useState([])


    useEffect(() =>{

        const getCountryFromApi = async() =>{
            const response = await axios.get("https://restcountries.com/v3.1/all")
            setCountry(response.data);
        }

        getCountryFromApi()

    }, [])


    console.log("Country" , country);


  return (

    <>
    <div>
        {
            country? country.map((ct,index) => {
                return <div key={index}>{ct.name.common}</div>
            }):
            <>
            </>
        }
    </div>
    </>

  )
}

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// export default function Restapi() {
//   const [country, setCountry] = useState([]);

//   useEffect(() => {
//     const getCountryFromApi = async () => {
//       try {
//         const response = await axios.get("https://restcountries.com/v3.1/all");
//         setCountry(response.data);
//       } catch (error) {
//         console.error("API çağrısı sırasında bir hata oluştu:", error);
//       }
//     };

//     getCountryFromApi();
//   }, []);

//   return (
//     <div>
//       {country.map((ct, index) => (
//         <div key={index}>{ct.name.common}</div>
//       ))}
//     </div>
//   );
// }