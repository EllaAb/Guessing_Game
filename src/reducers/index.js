import { combineReducers} from 'redux';






const initialState = {
  guesses:[],
  feedback: 'Make your guess!',
  correctAnswer:Math.round(Math.random() * 100 ) + 1
};

const playerReducer = (state= initialState, action) => {

  

  if(action.type === 'REST_GAME') {
      return   Object.assign({},state,{
        guesses:[],
        feedback: 'Make your guess!',
        correctAnswer: action.correctAnswer
      });
   
       
  } else
          
      
  
  if (action.type === 'MAKE_GUESS'){
    let feedback, guess; 
    guess = parseInt(action.guess, 100);
    if (isNaN(guess)) {
      feedback ='Please enter a valid number';

      return Object.assign({}, state, {
        feedback,
        guesses: [...state.guesses, guess]
      
      });

    }
  const difference = Math.abs(guess - state.correctAnswer);

  if (difference >= 50 ) {
    feedback='Your far a way from the right guess...';

  } else if  (difference >= 30 ) {
    feedback = "Youre a way from the right answer... ";
  } else if (difference >= 10) {
    feedback = "You're close ...";

  } else if (difference >= 1 ) {
    feedback = "You're soo close ";
  
  }else {
    feedback = " You got it ! ";
  }

  return Object.assign({}, state, {
    feedback,
    guesses:[...state.guesses,guess]
  });

  
};
return state;

};




export default combineReducers({
  player :playerReducer
});