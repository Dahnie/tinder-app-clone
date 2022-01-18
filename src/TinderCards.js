import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import "./assets/styles/TinderCards.css";
import axios from "./axios";



function TinderCards() {
    const [people, setPeople] = useState([])

    // Get the data from the db with axios
    useEffect(() => {
        // Using axios to make HTTP requests to the route on the baackend
        async function fetchData() {
            const req = await axios.get("/tinder/cards");
            const data = await req.data;

            setPeople(data)
        }

        fetchData();
    }, [])
    console.log(people);

    const swiped = (direction, nameToDelete) => {
        console.log(`removing ${nameToDelete}`);
    }

    const outOfFrame = (name) => {
        console.log(`${name} left the screen`);
    }
    return (
        <div className='tinderCards'>
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    // <div>{person.name}</div>
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{ backgroundImage: `url(${person.imgUrl})` }} className='cards'>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>

        </div>
    )
}

export default TinderCards;
