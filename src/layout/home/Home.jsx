import React, { useState, useEffect } from 'react'
import Nav from '../../components/Nav/Nav'
import './Home.scss'
import { URLContext } from '../../context/URLContext'

function Home() {
    const [q, setQ] = useState("sam")
    const [numResults, setNumResults] = useState(5);
    const [cardData, setCardData] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        const url = `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${q}&numResults=${numResults}`;
        try {
            let res = await fetch(url);
            let data = await res.json();
            setCardData(data);
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
                        {error}
                    </div>
                )}
                {
                    <pre style={{ color: "#fff" }}>{JSON.stringify(cardData.results, null, 3)}</pre>
                }
            </section>
        </div>
    )
}

export default Home