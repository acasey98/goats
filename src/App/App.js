import React from 'react';

import goats from './goats';

import './App.scss';


class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    this.setState({ goats });
  }

  render() {
    // eslint-disable-next-line arrow-body-style
    const hello2 = () => {
      return 'hello again';
    };
    return (
      <div className="App">
        <div>Goat Yoga</div>
        {/* <GoatCorral goats={goats}/> */}
      </div>
    );
  }
}

export default App;
