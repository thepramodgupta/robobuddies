import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    // if(true) {
    //     throw new Error('Nooooooo!');
    // }
    return (
        <div>
            {
               robots.map((user,m_i) => {
                return (
                    <Card 
                        key={m_i} 
                        id={robots[m_i].id} 
                        name={robots[m_i].name} 
                        email={robots[m_i].email}
                    />
                )
                }) 
            }
        </div>
    );
}

export default CardList;