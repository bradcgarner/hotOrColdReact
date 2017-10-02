'use strict';

import React from 'react';

import GuessClue from './guessclue';
import GuessForm from './guessform';
import GuessCount from './guesscount';
import GuessList from './guesslist';

export default class Game extends React.Component {
  render() {
    const guesses = [1, 3, 5, 7, 9];
    return (
      <section class="game">
        <GuessClue text='clue'/> {/*figure out how to set this  */}
        <GuessForm />
        <GuessCount count={guesses.length} />
        <GuessList guesses={guesses} />
      </section>
    );
  }
}