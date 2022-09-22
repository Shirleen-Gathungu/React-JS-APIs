import { useState, useEffect } from "react";

const Veggies =() =>{
    const [vegetables, setVeggies] = useState()
    const [loading , setLoading] = useState(false);
    useEffect(() => {
        products()
    },[])
    const products = ()=>{
     fetch('http://localhost:5000/products/vegetables')
     .then(res => res.json())
     .then(
      data => {
        setVeggies(data)
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
          <h3>Vegetables</h3>
          <div className="veggies">
            {vegetables.map(item =>(
          <div key={item.id}>
              <p> {item.name}</p>
          </div>
        ))} </div>
          </div>
        </div>
      )
  }
  export default Veggies;









