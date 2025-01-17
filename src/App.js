import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logo-box">
        <img src="./twitter.png.png" alt="logo" className="logo"/>
        <h2>Sign in to Twitter</h2>
        <button>
        <img src="./google.png.png" alt="logo"/>
        Sign in with Google
        </button>
        <button>
        <img src="./apple.png.png" alt="logo"/>
        Sign in with apple
        </button>

        <hr></hr>
        <span>Or</span>

        <form>
          <input type="text" placeholder="Phone email or username"/>
          <button>Next</button>
        </form>
        <button>Forget Password</button>
        <p>Don't Have an account <a>Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default App;
