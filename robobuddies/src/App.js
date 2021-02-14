import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './Searchbox';
import { robots } from './robots';

class App extends Component {
    constructor() {
        super();
        this.state = {
        robots: robots,
        searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState(({searchfield:event.target.value}));
    }

    render () {
        const filteredRobots = this.state.robots.filter( robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return (
            <div className='tc'>
                <SearchBox searchChange={this.onSearchChange}/>
                <h1>Robo Friends</h1>
                <CardList robots={filteredRobots}/>
            </div>          
        );
    }
    
}
export default App;