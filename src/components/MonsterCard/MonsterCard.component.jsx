import React from 'react';

import './MonsterCard.styles.css';

const MonsterCard = (props) => {
    console.log(props);
    return (
        <div className="card-container">
        <img 
            alt = {props.monsterName} 
            src = {`https://robohash.org/${props.monsterId}?set=set2&size=180x180`} />
        <h4>{props.monsterName}</h4>
        <p>{props.monsterEmail}</p>
        </div>
    );

}


export default MonsterCard;