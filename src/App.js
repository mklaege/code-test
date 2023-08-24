import React, { useState } from 'react';
import Canvas from './Canvas';

function App() {
  const [redValues, setRedValues] = useState([
		1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32
	]);

  return (
			<div
				style={{position: 'absolute', left: '20px', width: '1280px'}}
			>
				<div
					style={{border: '1px solid gray', borderRadius: '10px', 
					margin: '20px 0', textAlign: 'center',
					backgroundColor: '#FFC', boxShadow: '5px 10px 8px #888888'}}
				>
					<h1>Code test</h1>
					<p>Each square cycles through green and blue values (with a fixed red value),
						 from 7 to 255 in steps of 8.</p>
				</div>
				{redValues.map((item) => (
					<Canvas redValue={item}/>
				))}
			</div>
  );
}

export default App;
