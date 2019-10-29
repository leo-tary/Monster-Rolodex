import React from 'react';
import MonsterCard from '../MonsterCard/MonsterCard.component';

import './MonsterCardList.styles.css';

const MonsterCardList = (props) => {

    const Monster = props.monsterList.map(( {id , name , email} ) => {
        return <MonsterCard key={id} monsterName = {name} monsterId={id} monsterEmail={email}/>;
    })

    return (
        <div className="card-list">{Monster}</div>
    );

}


export default MonsterCardList;