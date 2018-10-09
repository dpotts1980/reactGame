import React from 'react';
import './CardsClick.css';

function handleClick(props) {
	props.reArrangeCards();
	props.clickedBird(props.id);
}

function CardClick(props) {
	return (
		<div className="card img-container" onClick={() => handleClick(props)}>
			<img alt={props.name} src={props.image} />
		</div>
	)
}




export default CardClick
