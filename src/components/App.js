import React from 'react';
import './App.css';
import typicode from '../api/typicode';

import MonsterCardList from './MonsterCardList/MonsterCardList.component';
import SearchBox from './SearchBox/SearchBox';

// Class Component

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            monsters: [],
            searchTerm: ''
        }
    }

    getMonsters = async () => {

        const response = await typicode.get('/users');
        this.setState( { monsters: response.data } );

    }
 
    componentDidMount() {

        // fetch returns promise (then converts promise into 'json' response)
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then((response) => response.json())
        // .then((users) => 
        //     this.setState( { monsters: users } ))

        // Using Axios
        this.getMonsters();
        
    }

    onInputChange = (event) => {
        this.setState( {
            searchTerm: event.target.value
        } );
    }


    render () {
        const { monsters ,  searchTerm} = this.state;

        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchTerm.toLowerCase());
        })

        return (
            <div className="App">
                <h1>Monster Rolodex</h1>
                <SearchBox 
                placeholder = 'Search Monsters'  
                onChange={this.onInputChange} />
                <MonsterCardList monsterList = {filteredMonsters} />
            </div>
        )
    }

}

export default App;