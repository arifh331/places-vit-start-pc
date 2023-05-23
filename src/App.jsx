import React from 'react'
import data from './data.js'
import Card from './Card.jsx'
import Header from './Header.jsx'
import './index.css'

export default function App(){

    let ar = data.map(function(item){
        return (
            <Card item={item} />
            
            
        )
    })
    
    
    return (
        <div className='appdiv'> 
        <Header />
        {ar}
        
        </div>
    )
}