import React from 'react';
import {connect } from 'react-redux';
import {makeGuess} from '../actions';




const Feedback =(props) => {

//const Key =props.guessCount;

let guessAgain;
if (props.guessCount !== 0) {
    guessAgain = <span>Guess Again!</span>;
}

return (
    <h2>
        
        {props.feedback}
         {guessAgain}
    </h2>
    
    );
};


const mapStateToProps=(state) => {
    return (
        {guessCount:state.player.length},
        {feedback:state.feedback}
      

    );
};


export default connect (mapStateToProps,
    {makeGuess}
    )(Feedback);