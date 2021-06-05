import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    return (
        <div>
            <div className="animate__animated animate__fadeIn">
                <img src = {url} alt = {title}></img>
                <p>{title}</p>
            </div>
        </div>
    )
}
