import React from 'react';
import {connect} from 'react-redux';
import {makeGuess} from '../actions';



const GuessCount =(props) => {
	
	const isPlural = props.GuessCount !== 1 ;
	const GuessNoun = isPlural ? 'guesses' : 'guess';
	
	
	
	return  (
		
		
	  <h2>
        You've made {props.GuessCount} {GuessNoun}!
       </h2>
	);
	
	
}

const mapStateToProps=(state) => {
	return {guesses:state.player.length};
};

export default connect(mapStateToProps
					  ,{makeGuess}
					  )(GuessCount);