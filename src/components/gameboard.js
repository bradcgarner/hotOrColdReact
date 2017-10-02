'use strict';

import React from 'react';

import GuessClue from './guessclue';
import GuessForm from './guessform';
import GuessCount from './guesscount';
import GuessList from './guesslist';

export default function Game() {
  return (
    <section class="game">
      <GuessClue text='clue'/> {/*figure out how to set this  */}
      <GuessForm />
      <GuessCount count="0" />
      <GuessList />
    </section>
  );
}