import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
        robots: [],
        searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState( {robots: users}));
    }
    
    onSearchChange = (event) => {
        this.setState(({searchfield:event.target.value}));
    }

    render () {
        const { robots, searchfield } = this.state; //destructring concept
        const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
            <h1>Loading...</h1> :
            (
                <div className='tc'>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <h1 className="f1">Robo Friends</h1>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>                   
                </div>          
            );
        }
}
export default App;