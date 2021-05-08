import React from "react";
import "./App.css";
import { Navbar } from "./components/Nav"
import { Playlist } from "./components/pages/playlist"
import { Video } from "./components/pages/video"
import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Switch>
          <Route path="/videos">
            <Video/>
          </Route>
          <Route path="/playlists">
            <Playlist/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
