//import axios, { Axios } from 'axios';
import  Axios  from 'axios';
import './App.css';
import React, {useState} from 'react';
//import Iframe from 'react-iframe';
import myLogo from './better_logo.png';

function App() {
  const url="https://googlepp.orikessler.repl.co/result"
  const [data,setData]= useState({the_q:'',the_ans:''})
  const [showResults, setShowResults] = React.useState(false)

  const handleSumbit=(e)=>{
    e.preventDefault();
    //Axios.post(url,{the_q: data.the_q}).then(res=>{console.log(res.data)})
    //this.data.the_ans=Axios.post(url,{the_q: data.the_q})
    const newData={...data}
    newData[e.target.the_ans]=e.target.value;
    setData(newData);
    setData({the_ans:'הניסוי צלח'})
    console.log(data)
    data.the_q!==''&&setShowResults(true);
  
  }

  const handle=(e)=>{
    const newData={...data}
    newData[e.target.id]=e.target.value;
    setData(newData);
    console.log(newData);
  }
  const Results = () => (
    <div>
         <h1>{data.the_q}</h1>
        {/*  < Iframe url="https://googlepp.orikessler.repl.co/"  width="90%" height="300" ></Iframe>*/}
        </div>
  )


  return (
    <div className="App">
      <header className="App-header">
        <img src={myLogo} className="App-logo" alt="logo" />
        <form onSubmit={handleSumbit}>
          <div>
             <input onChange={(e)=> handle(e)} dir="rtl" type="text" id="the_q" className="App-input" />
          </div>
        <button>חפש</button>
        </form>
        { showResults ? <Results/> : null }
      </header>
      
    </div>
  );
}
export default App;
