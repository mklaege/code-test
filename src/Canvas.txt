import React, { useEffect } from 'react';

function Canvas({redValue}) {
	let offset = 5;

  useEffect(() => {
		let obj = document.getElementById(`myCanvas${redValue}`);
		let cxt = obj.getContext('2d');
		for (let i = 1; i < 33; i++) {
			for (let j = 1; j < 33; j++) {
				cxt.fillStyle=`rgb(${(redValue * 8) - 1}, ${(i * 8) - 1}, ${(j * 8) - 1})`;
				cxt.fillRect(((j - 1) * offset) + 1, ((i - 1) * offset) + 1, offset, offset);
			}
		}
		cxt.font = '15px Verdana';
		cxt.fillStyle='rgb(255, 255, 255)';
		cxt.fillText(`Red value: ${(redValue * 8) - 1}`, 10, 20);
  }, []);

  return (
		<canvas
			id={`myCanvas${redValue}`}
			width={32 * offset}
			height={32 * offset}
		></canvas>
  );
}

export default Canvas;
