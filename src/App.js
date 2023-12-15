import house from "./703logo_t.png"
import "@aws-amplify/ui-react/styles.css";
import './App.css'

function App() {
  return (
    <div>
      <div class="two-cols">
        <div class="no-pad">
          <img class="main-img" src={house}/>
        </div>
        <div class="no-pad">
          <h1 class="header">Our 1907 House</h1>
        </div>
        <div class="bottom-div">
          We bought an old house in Central Iowa, and we're going to tell you all about it.
        </div>
      </div>
    </div>
  );
}

export default App;