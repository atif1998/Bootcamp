import React from 'react';

export const <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action list-group-item-primary active">Active item</a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-primary">Item</a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-primary disabled">Disabled item</a>
</div> (props) => {
    return <li>I am a {props.brand}</li>;
}

function Garage() {
    const cars = [
        { id: 1, brand: 'Ford' },
        { id: 2, brand: 'BMW' },
        { id: 3, brand: 'Audi' }
    ];
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <ul>
                {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
            </ul>
        </>
    );
}