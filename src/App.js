import  Axios  from 'axios';
import './App.css';
import React, {useState} from 'react';
import Iframe from 'react-iframe';
import myLogo from './better_logo.png';

function App() {
  const url="https://googlepp.orikessler.repl.co/result"
  const [data,setData]= useState({the_q:'',the_ans:''})
  const [showResults, setShowResults] = React.useState(false)

  const handleSumbit=(e)=>{
    getResponse();
    e.preventDefault(); 
  }
  

  function buildURL(string){ return "https:///www.google.com/search?q=" + encodeURIComponent(string)+"&igu=1"; }


  async function getResponse() {
  await Axios.post(url,{the_q: data.the_q}).then(res=>{data.the_ans= res.data.the_ans})
  setData(data);
  data.the_ans!==''&&setShowResults(true);

  }

  const handle=(e)=>{
    const newData={...data}
    newData[e.target.id]=e.target.value;
    setData(newData);
    //console.log(newData);
  }
  const Results = () => (
    <div>
         <h1>{data.the_ans}</h1>
         < Iframe url={buildURL(data.the_q)}  width="90%" height="1700vh" ></Iframe>
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
