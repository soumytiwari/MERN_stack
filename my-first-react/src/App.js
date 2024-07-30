import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
    return (
        <>
        <DataFetcher/>
        </>
  )
}

export default App;

function DataFetcher() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [id, setId] = useState(1)

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    //     .then(response => response.json())
    //     .then((data) => {
    //         setData(data)
    //         setLoading(false)
    //     }).catch((error) => {
    //         console.error("error in fetching data", error)
    //         setLoading(false)
    //     })
    // }, [id])


    useEffect(() => {
        const fetchData = async() => {
            try {
                // axios can be used in place of fetch (reduces code)
                // it itself converts response in response.json() and we get the object
                const response = await axios(`https://jsonplaceholder.typicode.com/todos/${id}`)
                // console.log(response.data);
                setData(response.data)
                setLoading(false)
            } catch (error) {
                console.log('error in fetching data ', error)
            }
        }
        fetchData()
    }, [id])
    // whenever the id will change, useEffect will run. Else only at 1st render of the page
   
    function fetchNextItem() {
        setId((prevId) => prevId + 1)
        setLoading(true)
    }

    return(
        <div>
            <button onClick={fetchNextItem}>Fetch Data</button>
            <p>{id}</p>
            {loading ? <p>Loading...</p> : <p>{data.title}</p>}
        </div>
    )
}

// useEfffect will run whenever the page is rendered. useEffect will run when all the UI is rendered.
// "async and await make promises easier to write"

// async makes a function return a Promise
// not bothered about what other functions are doing. Just sitting and waiting for its turn to run

// await makes a function wait for a Promise
// waiting just for the data
