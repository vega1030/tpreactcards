import React from 'react'
import './cards.css'

function Cards(props) {
    const { title, url, description } = props
    return (
        <div className="content">
            <div className="content__title">
                <h1> {title}</h1>
            </div>
            <div className="content__picture">
                <img src={url} alt={description} />
            </div>
            <div className="content__descripcion">
                <h4>{description}</h4>
            </div>
        </div>
    )

}

export default Cards;

