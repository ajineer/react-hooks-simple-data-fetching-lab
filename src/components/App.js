import React, {useState, useEffect} from "react"



// create your App component here
function App(){
    const [dogData, setData] = useState([])
    const [isLoaded, setLoaded] = useState(false)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(data => {
            setLoaded(true)
            setData(data)})
    },[])
    if(!isLoaded){
        return <p>Loading...</p>
    }
    return(
        <img src={dogData.message} alt="A Random Dog"></img>
    )
}

export default App