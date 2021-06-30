import React from 'react';
import Cards from '../cards/card'
import './main.css'

function MainContent() {
    const vector = [
        { url: 'https://placeimg.com/80/80/people?id=1', title: 'Titulo 1', description: 'Descripcion imagen 1' },
        { url: 'https://placeimg.com/80/80/people?id=2', title: 'Titulo 2', description: 'Descripcion imagen 2' },
        { url: 'https://placeimg.com/80/80/people?id=3', title: 'Titulo 3', description: 'Descripcion imagen 3' },
        { url: 'https://placeimg.com/80/80/people?id=4', title: 'Titulo 4', description: 'Descripcion imagen 4' }
    ]
    const dates = vector.map((maping, index) =>
        <Cards
            key={index}
            title={maping.title}
            url={maping.url}
            description={maping.description}
        />
    )
    return (
        <>
            {dates}
        </>
    )
}

export default MainContent