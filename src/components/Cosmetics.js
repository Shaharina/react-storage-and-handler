import React from 'react';

const Cosmetics = () => {
    const cosmetics = [
        { id: 1, name: 'Alta', price: 100 },
        { id: 1, name: 'Alta', price: 100 },
        { id: 1, name: 'Alta', price: 100 },
        { id: 1, name: 'Alta', price: 100 },
        { id: 1, name: 'Alta', price: 100 },
        { id: 1, name: 'Alta', price: 100 },
    ];
    return (
        <div>
            <h1> Welcome to my cosmetics store</h1>
            <p>ballllllllllllllllllll</p>

            {cosmetics.mao(cosmetic => console.log(cosmetic))}
        </div>
    );
};

export default Cosmetics;
