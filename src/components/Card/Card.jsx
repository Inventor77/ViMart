import React from 'react'
import './Card.scss'

function Card({ card, q }) {
    return (
        <div className="card">
            {console.log(card)}
            <div className='video_container'>
                <video width="320" height="240" controls>
                    <source src={card.video} type="video/mp4" />
                    <source src={card.video} type="video/ogg" />
                    <source src={card.video} type="video/webm" />
                </video>
            </div>
            <div className='card_info'>
                <div className='card_title'>
                    Title: {card.heading.substring(q.length + 1)}
                </div>
                <div className='card_desc'>
                    Description: {card.text.substring(5, 25)}...
                </div>
                <div className='card_tags'>
                    Tags:
                    {
                        card.tags?.map((tag) =>
                            <div key={tag} className='tag'>{tag}</div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Card