//import axios, { Axios } from 'axios';
import  Axios  from 'axios';
import './App.css';
import React, {useState} from 'react';

function App() {
  const url="http://127.0.0.1:5000/result"
  const [data,setData]= useState({the_q:""})

  const handleSumbit=(e)=>{
    e.preventDefault();
    Axios.post(url,{the_q: data.the_q})//.then(res=>{console.log(res.data)})
  }

  const handle=(e)=>{
    const newData={...data}
    newData[e.target.id]=e.target.value;
    setData(newData);
    console.log(newData);
    //Axios.post(url, {the_q: data.the_q})//.then(res=>{console.log(res.data)})    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://raw.githubusercontent.com/Orkessler/my_search/master/better_logo.png?token=GHSAT0AAAAAAB2CR3CPPE2SLIWJX2EHJ3AGY2ZH5FA" className="App-logo" alt="logo" />
        <form onSubmit={handleSumbit}>
           <input onChange={(e)=> handle(e)} type="text" id="the_q" value={data.the_q} />
        <button>search</button>
        </form>
      </header>
    </div>
  );
}
export default App;
