import { useState, useEffect } from "react";

const Fruits =() =>{
    const [fruits, setFruits] = useState()
    const [loading , setLoading] = useState(false);
    useEffect(() => {
        products()
    },[])
    const products = ()=>{
     fetch('http://localhost:5000/products/fruits')
     .then(res => res.json())
     .then(
      data => {
        setFruits(data)
        setLoading(true)
        console.log("fetched data----->",data )})
      .catch (err =>{throw  new Error (err.message)});
  }
  if(!loading){
    console.log("loading data----->",loading);
    return <div>Loading.........</div>
  }
      return (
         <div>
          <div className="container">
          <h3>Fruits</h3>
          <div className="fruits">
            {fruits.map(item =>(
          <div key={item.id}>
              <p> {item.name}</p>
          </div>
        ))} </div>
          </div>
        </div>
      )
  }
  export default Fruits;









