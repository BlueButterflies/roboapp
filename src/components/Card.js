import React from "react";


const Card = ({id, name, email}) => {
    return (
        <div className="bg-light-pink dib br4 ma3 grow shadow- o-60">
            <img src={`https://robohash.org/${id}?80x80`} alt="robots" />
            <div className="i-m b tc white-80" >
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card
