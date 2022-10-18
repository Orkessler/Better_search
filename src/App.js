import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://lh3.googleusercontent.com/drive-viewer/AJc5JmR6o6nAbJOIAOrS5PuKLQRYBvudbW7sKRcSTNBPlxVqP7EhnoywIz0v1e58-zUOpO24kQojH8o=w1920-h937"} className="App-logo" alt="logo" />
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
