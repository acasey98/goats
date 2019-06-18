import React from 'react';

import propTypes from 'prop-types';

import goatShape from '../../helpers/propz/goatShape';

import Goat from '../Goat/Goat';

import './GoatCorral.scss';

class GoatCorral extends React.Component {
  static propTypes = {
    goats: propTypes.arrayOf(goatShape.goatShape),
  }

  render() {
    const { goats } = this.props;
    const makeGoats = goats.map(goat => (
      // <h2>{goat.name}</h2>
      <Goat key={goat.id} goat={goat} />
    ));

    return (
      <div className="GoatCorral d-flex flex-wrap">
        { makeGoats }
      </div>
    );
  }
}

export default GoatCorral;
