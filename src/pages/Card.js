import React from 'react';
import './Card.css';
import Container from './Container';

const Card = ({ child }) => {
    console.log('imageCount', child.imageCount)
    // [0,1]

    return (
        <div style={{ width: child.grow, display: "inline-block" }}>
            {child.assets ? child.assets.map(index => <img
                key={Math.random()}
                style={{ width: 100 / imageCount }}
                className="img"
                src={child.assets[index].imageUrl}
                alt="hellowidget"
            />) : <Container children={child.children} />}

        </div>
    );
}

export default Card;