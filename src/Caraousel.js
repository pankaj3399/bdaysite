import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';

function Caraousel(props) {
	var items = [
		{
			name: 'Cutiee Billlu',
			description: 'I love you so much.',
			src: 'images/1.jpg'
		},
		{
			name: 'Chhotu jaan',
			description: 'You are a beautiful princess.',
			src: 'images/2.jpg'
		},
		{
			name: 'Baby pie',
			description: 'I am so lucky to have you.',
			src: 'images/3.jpg'
		},
		{
			name: 'Choco pie',
			description: 'You are a beautiful person my soulmate.',
			src: 'images/4.jpg'
		},
		{
			name: 'Happy Birthday',
			description:
				'May God bless you with all of the wonderful desires of your heart and bless you to keep the many blessings that you already have. Happy Birthday, dear!',
			src: 'images/5.jpg'
		},
		{
			name: 'Billllu bacchi',
			description: 'You’re a wonderful girlfriend.',
			src: 'images/6.jpg'
		}
	];

	return <Carousel>{items.map((item, i) => <Item key={i} item={item} />)}</Carousel>;
}

function Item(props) {
	return (
		<Paper style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'aqua' }}>
			<img src={props.item.src} alt="Something here" height="250px" width="250px" />
			<h2>{props.item.name}</h2>
			<p>{props.item.description}</p>
		</Paper>
	);
}

export default Caraousel;
