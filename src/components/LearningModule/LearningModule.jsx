import React from 'react';
import './Learningmodule.css';
import smartphone from '../../assets/smartphone (1).svg';
import dashboard from '../../assets/Dashboard.svg';
import layout from '../../assets/layout.svg';
import Card from './Card';

const carddetail = [
    {
        id: 1,
        logo: smartphone,
        title: 'Learn Anything',
        text: 'It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When',
        backgroundColor: '#FFFFFF' // Set background color for the first card
    },
    {
        id: 2,
        logo: dashboard,
        title: 'Flexible Learning',
        text: 'It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When',
        backgroundColor: '#FFF3C7' // Set background color for the second card
    },
    {
        id: 3,
        logo: layout,
        title: 'Expert Connect',
        text: 'It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When',
        backgroundColor: '#FFFFFF' // Set background color for the third card
    }
];

function LearningModule() {
    return (
        <div className='Lmodule-container'>
            <p className='moduletitle'>We provide various kind of learning modules for you</p>
            <p className='modulesubtitle'>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem Ipsum.</p>
            <div className='card-section'>
                {carddetail.map((obj) => {
                    return (
                        <div key={obj.id} className='card-container' style={{ backgroundColor: obj.backgroundColor }}>
                            <Card logo={obj.logo} title={obj.title} text={obj.text} color={obj.color} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default LearningModule;
