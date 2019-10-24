import React from 'react';

import GuessList from './GuessList';
import GuessCount from './GuessCount';
import Feedback from './Feedback';
 
const StatusGame=(props) => {
	
	return (
		<section>
		  <GuessCount />
	      <GuessList />
		  <Feedback />
		</section>
	);
	
}

export default StatusGame;