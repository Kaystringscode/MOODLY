
import './Musicapi.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, InputGroup, FormControl, Button, Row, Card, Anchor} from "react-bootstrap";
import { useState,useEffect } from "react";
import React from 'react';
import axios from 'axios' 
import {motion} from "framer-motion"
import PlayWidget from "react-spotify-widgets"




const   client_id = '1e76a724d6db40b4bb2b127638620e92'
const   client_secret = 'f791c6b679b9427eb385a0ea33e44c92'


function App() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [moodPlist, setmoodPlist] = useState([]);
  const [moodPlistID, setmoodPlistID] = useState([]);
  const [title, setTitle] = useState("")



  useEffect(() =>{
 
 var authParameters = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  form: {
    grant_type: 'client_credentials'
  },
  json:  true,
  body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret 
 }
 
 fetch('https://accounts.spotify.com/api/token', authParameters)
 .then(result => result.json())
 .then(data => setAccessToken(data.access_token))
  },[])

  


  //Search//slide button//
  async function search() {
    console.log("Search for " + searchInput);

    // Get request using song mood//
    var artistParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }
    let i=0
    var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=playlist', artistParameters)
       .then(response => response.json())
      .then(data => {
        
        console.log(data)
        const apiresJ = data.playlists.items
        // console.log(apiresJ)
        setmoodPlist([...apiresJ])
       
      
        
         

    
       
      
      })
     
      
    //Get Era for the Song//
  }
    // console.log("playlist moods" + moodPlist)
  useEffect(() => {
   
    search();

  }, []);

  
 

   

  
  return (
        <div className="page-background">
      
          <Container>
            <motion.div style={{borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(219, 52, 235)"}}>
              <InputGroup className="mb-3" size="xl" >
                  <FormControl
                      placeholder='Search for Moods'
                        type="input"
                          onKeyPress={event => {
                            if (event.key == "Enter"){
                              console.log("pressed enter")
                                search();
                                }
                                }}
                                  onChange={event => setSearchInput(event.target.value)}
                                    />
                                      <button onClick={search} fontSize={15}>
                                        Get into Your mood        
                                      </button>

             
                </InputGroup>
              </motion.div>

           </Container>

          <Container>
            <Row className= " row-cols-3  mx-auto g-3" border="dark" style={{ width: '100%' }} xs={1} lg={3} md={3}>
              {moodPlist.map( (moodPlist,) =>{
                // console.log(moodPlist)
                const getplistID = () => {
               console.log(moodPlist.uri)
                    setTitle(moodPlist.uri);
              //  let newPlistId = "https://open.spotify.com/emb ed/playlist/" + [moodPlist.id]
                // console.log([setTitle])
                
                }
                
              return (
            <motion.div style={{borderRadius: "1rem", boxShadow: "4px 1px 30px rgba(219, 52, 235)"}}>
             <Card> 
        
              <Card.Img src={moodPlist.images[0].url}/>
            <Card.Body border="primary">
        <Card.Title >{moodPlist.name}</Card.Title>
      </Card.Body>
      <Card.Footer>"{moodPlist.tracks.total} TRACKS"</Card.Footer>
       <button onClick={getplistID}>Load Mood To Playlist</button>
       
    </Card>
        </motion.div>
          )
          })}
    
  </Row>
  </Container>


  <div className='iplayer'>
  <motion.div className="container"
        style={{borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(219, 52, 235)"}}>
  
          <div className="App" >
            <PlayWidget
            width={1300}
            height={500}
            uri={title}
          
            lightTheme={false}
            showCoverArt={true}
        />
            </div>        
        </motion.div>
  </div>
 
      

</div>
  
);}

export default App;
