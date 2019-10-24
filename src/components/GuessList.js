import React from 'react';
import { connect } from 'react-redux';
import {makeGuess} from '../actions';


const GuessList =(props) => {
	const guesses = props.guessedNumber.map((guess, index) => (
		<li key={index}>
		  {guess}
		</li>
	  ));
	
	
	
	return (
	
	    <ul>
		{guesses}
		</ul>
		
	);
}

const mapStateToProps= (state) => {
  return 	{guessedNumber :state.player.guesses};
};

export default connect (mapStateToProps,
	{makeGuess})(GuessList);

