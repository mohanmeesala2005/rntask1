// ParentComponent.js
import React from 'react';
import Card from './team';
import './app.css'

const teamrn = () => {
    // Sample data for cards
    const cardsData = [
        { img:"./src/assets/president.jpg" , title: 'President', name: 'Dhiraj Kumar' },
        { img:"./src/assets/vice.png" , title: 'Vice President', name: 'Akshay A Baiju' },
        { img:"./src/assets/gs.jpg" , title: 'General Seceratry', name: 'Priyanshu Burman' },
        { img:"./src/assets/tp.jpg" , title: 'Treasurer', name: 'Kalyan Choubey' },
        { img:"./src/assets/conv.jpg" , title: 'Convenor', name: 'Ashsish Raj' },
        { img:"./src/assets/tech.jpg" , title: 'Tech Head', name: 'Amool Khudia' },
        { img:"./src/assets/el.jpeg" , title: 'Event and Logistics Head', name: 'Sumit Kumar Sah' },
        { img:"./src/assets/fest.jpg" , title: 'Fest Head', name: 'Sankalp Mishra' }
    ];

    return (
        <div className="parent-component">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    img={card.img}
                    title={card.title}
                    name={card.name}
                />
            ))}
        </div>
    );
}

export default teamrn;
