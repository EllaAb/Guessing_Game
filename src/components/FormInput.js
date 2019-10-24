import React from 'react';
import { connect } from 'react-redux';
import {makeGuess} from '../actions';
import '../styles/guessForm.css';


class FormInput extends React.Component {


  onSubmit(e){
      e.preventDefault();

      const value = this.input.value;
      this.props.dispatch(makeGuess(value));
      this.input.value ='';
      this.input.focus();
  }

  render() {

     

      return (
          <form onSubmit= {e => this.onSubmit(e)}>
              <input 
                type='number'
                name='userGuess'
                id ='userGuess'
                className='text'
                min ='1'
                max='100'
                ref={input => (this.input = input)}
                required
                />
                <button
                    type ='Submit'
                    name ='Submit'
                    id='guessButton'
                    className='button'
                    >
                        Guess!
                  
                </button>
          </form>
      );
  }
}



export default connect ()(FormInput);
