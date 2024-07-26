import { useEffect, useState } from 'react';
import './App.css';

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

    // useEffect(() => {}, [])      it takes 2 things: function, dependency array
    // helping to fetch (at the end, the useEffect will run)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        }).catch((error) => {
            console.error("error in fetching data", error)
            setLoading(false)
        })
    }, [id])
    // why dependency array?: the useEffect will run only one time, to fetch 2, 3, 4, 5, .. for that only we're using dependency array 
    // it carries such type of variables, which will be dynamic
    // normally useEffect will run at the end of the react. But when you use dependency array, it runs everytime the variable is changed. (else, for new dynamic id the data will be loaded, else nopp <try removing id from the dependency array, then see the fetching for other id zz than 1>)

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