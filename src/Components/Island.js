import React from 'react'

export default function Island(props) {
    return (
        <div className="Island">
            <h3>{props.island.name}</h3>
            <img src={props.island.img} />
        </div>
    )
}
