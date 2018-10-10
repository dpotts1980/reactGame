import React from 'react';
import './Modal.css';



const Modal = props =>
 (
		<div className="modal-instructions">
			<div className="modal-content">
				<h4 className="center">Game Instructions</h4>
				<ol>
					<li>Click on a card to start the game.</li>
					<li>Every time you click a card, the cards get rearranged.</li>
					<li>If you pick the same card twice...You Lose!</li>
					<li>Click all 12 cards without repeating...You Win!</li>
				</ol>
			</div>
			<br />
			<div className="modal-footer white-text center">
				<a className="waves-effect waves-light btn" onClick={() => {
					document.getElementsByClassName('modal-instructions')[0].classList.add('hide');
				}}>Time to Play!!</a>
			</div>	
		</div>
	)

export default Modal;