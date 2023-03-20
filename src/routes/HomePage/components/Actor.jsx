import React from 'react';

const Actor = ({info}) => {
    return (
        <div className='actorspremiere__actor actorpremiere'>
            <img src={info.urlImage} alt={`photo of ${info.name}`} className="actorpremiere__image" />
            <span className="actorpremiere__name">{info.name}</span>
            <span className="actorpremiere__character">{info.character}</span>
        </div>
    );
};

export  {Actor};