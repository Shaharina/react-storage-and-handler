import React from 'react';
import Cosmetic from './Cosmetic/Cosmetic';

const Cosmetics = () => {
    // const cosmetics = [
    //     {
    //         id: '62d12b462d51960d0a2fdb02',
    //         price: 228,
    //         name: 'Liliana Gutierrez',
    //     },
    //     {
    //         id: '62d12b4694b5c2915deeede3',
    //         price: 422,
    //         name: 'Roseann Cardenas',
    //     },
    //     {
    //         id: '62d12b460cf70fe87d07a027',
    //         price: 794,
    //         name: 'Eddie Hanson',
    //     },
    //     {
    //         id: '62d12b46e4dd3b9228aa9829',
    //         price: 704,
    //         name: 'Austin Dyer',
    //     },
    //     {
    //         id: '62d12b46e4b6ebf2235a5b5e',
    //         price: 392,
    //         name: 'Corinne Fischer',
    //     },
    // ];
    // { [id: 1, name: 'Alta', price: 100 },
    // { id: 2, name: 'Flta', price: 200 },
    // { id: 3, name: 'Churi', price: 300 },
    // { id: 4, name: 'Scent', price: 400 },
    // { id: 5, name: 'Liner', price: 500 },
    // { id: 6, name: 'Powder', price: 600 },]

    return (
        <div>
            <h1> Welcome to my cosmetics store</h1>

            {cosmetics.map(cosmetic => (
                <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
            ))}
        </div>
    );
};

export default Cosmetics;
