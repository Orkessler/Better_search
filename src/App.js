import  Axios  from 'axios';
import './App.css';
import React, {useState} from 'react';
import Iframe from 'react-iframe';
import myLogo from './better_logo.png';
import CircularProgress from '@mui/material/CircularProgress';
//import Button from '@mui/material/Button';                   I decided to remove this button



function App() {

  //const url="https://googlepp.orikessler.repl.co/result"//The first api option (need to restart every time)
  const url="https://okessler.pythonanywhere.com/result"//The api
  const [data,setData]= useState({the_q:'',the_ans:''}) 
  const [ showResults, setShowResults] = React.useState(false) 
  const [ showProgress, setShowProgress] = React.useState(false)

  //When the user press "enter" or on search button
  const handleSumbit=(e)=>{
    setShowProgress(true)
    getResponse();
    e.preventDefault(); 
  }
  
  //Build the google search iframe from the question.
  function buildURL(string){ return "https:///www.google.com/search?q=" + encodeURIComponent(string)+"&igu=1"; }

  //Get the answer from the api and stop the progress circle
  async function getResponse() {
  await Axios.post(url,{the_q: data.the_q}).then(res=>{data.the_ans= res.data.the_ans})
  setData(data);
  data.the_ans!==''&&setShowResults(true);
  setShowProgress(false)
  }

//Get the typing from the user
  const handle=(e)=>{
    const newData={...data}
    newData[e.target.id]=e.target.value;
    setData(newData);
  }

  //The Result components. It only appears when there are results for the search
  const Results = () => (
    <div>
         <h1>{data.the_ans}</h1>
         { data.the_ans!=="לא מצאנו תשובה נוספת לשאלתך מעבר למה שקיים בחיפוש הרגיל בגוגל. אבל הי! אל דאגה! הוספנו למטה את החיפוש שלך!" ? <h3>-התשובה מתורגמת מאנגלית-</h3> : null }
         < Iframe url={buildURL(data.the_q)}  width="90%" height="2500vh" ></Iframe>
        </div>
  )

  return (
    <div  className="App">
     {/*<Button className="App-explane"   margin-top="1px" margin-right= "2px" position="absolute" top="0" right="0">?למה החיפוש כאן יותר טוב מחיפוש הרגיל בגוגל</Button> I decided to remove this button   */}
      <header className="App-header">
        <img src={myLogo} className="App-logo" alt="logo" />
        <form onSubmit={handleSumbit}>
          <div>
             <input onChange={(e)=> handle(e)} dir="rtl" type="text" id="the_q" className="App-input" />
          </div>
        <button>חפש</button>
        </form>
        { showResults ? <Results/> : null }
        { showProgress ? <CircularProgress /> : null }
      </header>  
    </div>
  );
}
export default App;
