import "./Musicapi.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
  Anchor
} from "react-bootstrap";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { motion } from "framer-motion";
import PlayWidget from "react-spotify-widgets";
import "../Submit/Submit";

//created variables that store the spotify API keys//
const client_id = "1e76a724d6db40b4bb2b127638620e92";
const client_secret = "f791c6b679b9427eb385a0ea33e44c92";

//App fuction that assigns states to variables//
function App() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [moodPlist, setmoodPlist] = useState([]);
  const [moodPlistID, setmoodPlistID] = useState([]);
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(null);
  const [storedSearches, setStoredSearches] = useState([]);
//useEffect passes stored mood input results into local storage
  useEffect(() => {
    setStoredSearches(JSON.parse(localStorage.getItem("moods")) || []);
  }, []);
//useEffect creates object and fetches data from the API//
  useEffect(() => {
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      form: {
        grant_type: "client_credentials"
      },
      json: true,
      body:
        "grant_type=client_credentials&client_id=" +
        client_id +
        "&client_secret=" +
        client_secret
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token));
  }, []);
//useEffect that stores search input into local storage and console logs "useEffect"//
  useEffect(
    () => {
      if (searchInput.length > 0) {
        localStorage.setItem("moods", JSON.stringify(storedSearches));
        console.log("useEffect");
      }
    },
    [storedSearches]
  );

  //Search//slide button//
  async function search(searchValue) {
    console.log("Search for " + searchInput);
    // if (storedSearches === []) {
    //   setStoredSearches([searchValue]);
    // } else {
      if (!storedSearches.includes(searchValue)){

        setStoredSearches([searchValue, ...storedSearches]);
      }
    // }
    // Get request using song mood//
    var artistParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken
      }
    };
    let i = 0;
    var artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchValue + "&type=playlist",
      artistParameters
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const apiresJ = data.playlists.items;
        // console.log(apiresJ)
        setmoodPlist([...apiresJ]);
      });
  }

// 2 on click functions of the button it takes the search mood and storres it in an item and places it in local storage with animation attributes//
  return (
    <div className="page-background">
      {storedSearches.map(item => {
        return (
          <div className="Newbutton">
          <button className="myButton" key={item} onClick={()=>search(item)} >
      
       
            {item}
          </button>
          </div>
        );
      })}
      <Container>
        <motion.div
          style={{
            borderRadius: "1rem",
            boxShadow: "0px 10px 30px rgba(219, 52, 235)"
          }}
        >
          <InputGroup className="mb-3" size="xl">
            <FormControl
              placeholder="Search for Moods"
              type="input"
              onKeyPress={event => {
                if (event.key == "Enter") {
                  console.log("pressed enter");
                  search(searchInput);
                }
              }}//onChange event  handles changes and sets the value of the target of the setSearchInput//
              onChange={event => setSearchInput(event.target.value)}
            />
            <button onClick={()=>search(searchInput)} fontSize={15}>
              Get into Your mood
            </button>
          </InputGroup>
        </motion.div>
      </Container>
{/* creating the html for the spotify iplayer and providing css styling */}
      <Container>
        <Row
          className=" row-cols-3  mx-auto g-3"
          border="dark"
          style={{ width: "100%" }}
          xs={1}
          lg={3}
          md={3}
        >  
        {/* creating the html for the spotify iplayer and providing css styling */}
          {moodPlist.map(moodPlist => {
              const getplistID = () => {
              setShow(true);
              console.log(moodPlist.uri);
              setTitle(moodPlist.uri);
             
            };

            return (
              <motion.div
                style={{
                  borderRadius: "1rem",
                  boxShadow: "4px 1px 30px rgba(219, 52, 235)"
                }}
              >
                {/* creating the html for the spotify iplayer and providing css styling */}
                <Card>
                  <Card.Img src={moodPlist.images[0].url} />
                  <Card.Body border="primary">
                    <Card.Title>
                      {moodPlist.name}
                    </Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    "{moodPlist.tracks.total} TRACKS"
                  </Card.Footer>
                  <button onClick={getplistID}>Load Mood To Playlist</button>
                </Card>
              </motion.div>
            );
          })}
        </Row>
      </Container>

      <div>
        <motion.div
          className="container"
          style={{
            borderRadius: "1rem",
            boxShadow: "0px 10px 30px rgba(219, 52, 235)"
          }}
        >
          {/* creating the html for the spotify iplayer and providing css styling */}
          <div className={!show ? "hidden" : "App"}>
            <PlayWidget
              width={1100}
              height={500}
              uri={title}
              style={{ minHeight: "360px" }}
              frameBorder="4"
              lightTheme={false}
              showCoverArt={true}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
