// action creator
export const MAKE_GUESS = 'Make_GUESS';
export const makeGuess = (guess) => {
   return {
   type: 'MAKE_GUESS', 
   guess:guess
   };
};







export const RESET_GAME = 'RESET_GAME';
export const resetGame = (correctAnswer) => {
  return {
	  type: 'RESET_GAME', 
	  correctAnswer:correctAnswer
  };
};

