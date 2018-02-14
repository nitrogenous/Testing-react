import React, { Component } from 'react';

class App extends Component {

  render() {
    fetch('https://www.reddit.com/r/reddevils/',{client_id: '' mode: 'no-cors'}).then(function(e) { document.getElementById('App').innerHTML= e; })

    return (
      <div id="App">

       

      </div>
    );
  }
}

export default App;
