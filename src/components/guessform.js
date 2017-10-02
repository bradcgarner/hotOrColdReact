'use strict';

import React from 'react';

export default function GuessForm() {
 // make this interactive
  return (
    <form>
      <input type='text' class="text" name="userGuess" id="userGuess" maxLength="3" placeholder="Enter your Guess" required>
      </input>
      <input type="submit" id="guessButton" name="submit" class="button" value="Guess">
      </input>
    </form>
  );
}