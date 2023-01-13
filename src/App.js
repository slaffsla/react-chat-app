import logo from "./logo.svg";
import "./App.css";
import { Auth } from "./components/Auth";

import { useState, useRef } from "react";
import Cookies from "universal-cookie";
import { Chat } from "./components/Chat";
const cookies = new Cookies();
function App() {
  const [userAuthorized, setUserAuthorized] = useState(
    cookies.get("auth-token")
  );
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  if (userAuthorized) {
    return (
      <div>
        {room ? (
          <Chat room={room} />
        ) : (
          <div className="room">
            <label>Enter Room Name</label>
            <input ref={roomInputRef} />
            <button onClick={() => setRoom(roomInputRef.current.value)}>
              Enter Chat
            </button>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <Auth setUserAuthorized={setUserAuthorized} />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
