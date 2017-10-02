'use strict';

import React from 'react';

import GuessClue from './guessclue';
import GuessForm from './guessform';
import GuessCount from './guesscount';
import GuessList from './guesslist';

export default function Game() {
  return (
    <main>
      <GuessClue text='clue'/> {/*figure out how to set this  */}
      <GameForm />
      <GuessCount />
      <GuessList />
    </main>
  );
}