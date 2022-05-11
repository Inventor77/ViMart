import React, { useState, useEffect } from 'react'
import Nav from '../../components/Nav/Nav'
import './Home.scss'
import { URLContext } from '../../context/URLContext'
import Card from '../../components/Card/Card'

function Home() {
    const [q, setQ] = useState("")
    const [numResults, setNumResults] = useState(5);
    const [cardData, setCardData] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        const url = `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${q}&numResults=${numResults}`;
        try {
            let res = await fetch(url);
            let data = await res.json();
            setCardData(data.results);
            setLoading(false);
        } catch (error) {
            setError(error)
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, [numResults, q])


    return (
        <div>
            <URLContext.Provider
                value={{ setNumResults, setQ }}>
                <Nav />
            </URLContext.Provider>
            <section className='card_container'>
                {loading && (
                    <div className='loading'>
                        Loading <span>.</span> <span>.</span> <span>.</span> <span>.</span>
                    </div>
                )}
                {error && (
                    <div className='error'>
                        <pre>
                            {JSON.stringify(error, null, 3)}
                        </pre>
                    </div>
                )}
                {
                    !loading && cardData?.map((item, idx) =>
                        <Card key={idx} card={item} q={q} />
                    )
                }
                {
                    !loading && JSON.stringify(cardData) === undefined ?
                        (
                            <div className='no_data'>
                                Wow Such Empty <span>.</span> <span>.</span> <span>.</span> <span>.</span>
                            </div>
                        ) : ""
                }
            </section>
        </div>
    )
}

export default Home