import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"} className="App-logo" alt="logo" />
        <form onSubmit={handleSumbit}>
           <input type="text" name="theQuestion" br/>
        <button>search</button>
        </form>
      </header>
    </div>
  );
}

const handleSumbit=(e)=>{
  const first=e.target.theQuestion.value;
  console.log(""+first);
}

export default App;
