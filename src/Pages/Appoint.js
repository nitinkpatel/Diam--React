import React from 'react'
import data from '../Components/data'
import List from '../Components/List';
import { useState, useEffect } from 'react';
import './Appoint.css'

function Appoint() {
    const [people, setPeople] = useState(data)

    return (
        <section className="list">

        <h4>{people.length} appointments today</h4>
        
        <List people={people} />
        <button onClick={() =>
          setPeople([])}>
          clear
        </button>
        </section>
    )
}

export default Appoint
