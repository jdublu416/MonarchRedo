import React from 'react';
import {Button} from '../../Button';
import {Footer} from '../../Footer';

export class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <header className="Main-header">
          <h1 className="App-title">Monarch 2</h1>
        </header>
        <Button>Submit</Button>
        <Footer />
      </div>
    );
  }
}

export default App;
