import React from 'react';
import './CardsClick.css';

// function handleClick(props) {
// 	props.reArrangeCards();
// 	props.clickedBird(props.id);
// }

function Bla(name, age){
	console.log(name)
}

const CardClick = props => (
	<div className="card img-container">
		<img alt={props.name} src={props.image} />
		{/* <h1>Color -> {props.color}</h1>
		<h2>Child -> {props.children}</h2> */}
	</div>
)


export default CardClick
