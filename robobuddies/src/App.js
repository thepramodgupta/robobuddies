import React from 'react';
import CardList from './CardList';
import SearchBox from './Searchbox';
import { robots } from './robots';


const App = () => {
    return (
        <div className='tc'>
            <SearchBox/>
            <h1>Robo Friends</h1>
            <CardList robots={robots}/>
        </div>          
    );
};

export default App;