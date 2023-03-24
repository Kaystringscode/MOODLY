import React from "react"
import {useEffect, useState} from "react";
import axios from "axios"

// setting up the spotify page 
function Spotify() {
const CLIENT_ID = 'de7b105bd42647258dbad0d2c6e3f867'
const REDIRECT_URI = 'http://localhost:3000/'
// const AUTH_ENDPOINT = "https://accounts.spotify.com/api/token"
const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"



const [token, setToken] = useState("")
const [search,setSearchKey] = useState("")

useEffect( () =>{
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")
//spliting the authoraization page to extract the token
    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    
        console.log(token)
// setting the token into the localstorage so i can recall 
        window.location.hash = ""
        window.localStorage.setItem("token", token)
        
    }
    
    
    setToken(token)
},[])

const logout =() => {
    setToken("")
    window.localStorage.removeItem(token)
}


const searchArtist = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("http://api.spotify.com/v1/search", {
headers : {
    Authorization: `Bearer ${token}`
},
params: {
    q: search,
    type: "artist"
}

    })
     console.log(data);
}

return (
    <div className = "spotify">
        <div className= "music-player">
            <h1>SPOTIFY REACT</h1>
            {!token ?
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}> login to spotify</a>
        : <button onClick={logout}>logout</button>}

       {/* form for search */}
            {token?
        <form onSubmit={searchArtist}>
            <input type = "text" onChange = {e => setSearchKey(e.target.value)}/>
            <button type = {"submit"}> search</button>
        </form>    

        :<h2>please log in</h2>
        }
        </div>
    </div>
);

}

export default Spotify;