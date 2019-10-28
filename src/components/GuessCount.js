import React from 'react';
import {connect} from 'react-redux';
import {makeGuess} from '../actions';



const GuessCount =(props) => {
	
	const isPlural = props.GuessCount !== 1 ;
	const GuessNoun = isPlural ? 'guesses' : 'guess';
	
	
	
	return  (
		
		
	  <h2>
        You've made {props.guessedNumber.length} {GuessNoun}!
       </h2>
	);
	
	
}

const mapStateToProps=(state) => {
	return {guessedNumber:state.player.guesses};
};

export default connect(mapStateToProps
					  ,{makeGuess}
					  )(GuessCount);
