import React , { useState, useEffect }  from 'react'
import axios from "axios";



const SuperHeroes = () => {

    const [isloading, setIsLOading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');


  useEffect(() => {
    axios.get("http://localhost:3000/superheroes").then((res) => {
      setData(res.data)
      setIsLOading(false);
    }).catch((error) => {
      setError(error.message)
      setIsLOading(false)
    })
  }, [])

  if (isloading) {
    return <h2 className='text-center mt-40 items-center text-5xl font-extrabold'>Loading......</h2>
  }
  if (error) {
    return <h2 className='text-center mt-40 items-center text-5xl font-extrabold'>{error}</h2>
  }

  return (
    <>
    <div className='text-center items-center font-extrabold text-5xl mt-40'>SuperHeroes Page</div>

    {data.map((hero) => {
      return <div className='text-center mt-20 font-bold items-center' key={hero.name}> {hero.name}</div>
    })}

    </>

  )
}

export default SuperHeroes