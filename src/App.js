import './App.css';
import Home from './pages/home/Home';
import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchData = async ()=>{
      const url = "https://api.unsplash.com/photos/?client_id=lF2uW3wfDt5MxaYkJPwLQVwM08hTyFYhjf5JjF0-Qpg&per_page=30"
      let data = await fetch(url);
      let parsedData = await data.json()
       setData(parsedData)
    }
    fetchData()
  },[]);
  return (data &&
    <>
    {console.log(data)}
      <Home data = {data}/>
      
    </>
  )
}
export default App;
