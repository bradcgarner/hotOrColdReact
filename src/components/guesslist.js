'use strict';

import React from 'react';

export default function GuessList() {
  const rawGuesses = [1, 78, 99, 69, 22, 74];
  const guesses = rawGuesses.map((guess, index) => {
    return (
      <li key={index}>
        {guess}
      </li>
    );
  });
  
  return (
    <ul id="guessList" class="guessBox clearfix">
      {guesses}
    </ul>
  );
}