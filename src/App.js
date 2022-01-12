import React from 'react';

class App extends React.Component {
  render() {
    return(
    <div>
      <h1> GITHUB INFO</h1>
      <form>
        <input type='text' placeholder='Github Handle'></input>
        <button>Search</button>
      </form>
      <img src="https://avatars.githubusercontent.com/u/63321977?v=4"/>
    </div>);
  }
}

export default App;
