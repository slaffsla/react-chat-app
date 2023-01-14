import logo from "./logo.svg";
import "./App.css";
import { Auth } from "./components/Auth";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

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

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setUserAuthorized(false);
    setRoom(null);
  };

  if (userAuthorized) {
    return (
      <div className="App-header">
        {room ? (
          <Chat room={room} />
        ) : (
          <div className="auth">
            <label>Enter Room Name</label>
            <input ref={roomInputRef} />
            <button onClick={() => setRoom(roomInputRef.current.value)}>
              Enter Chat
            </button>
          </div>
        )}
        <div className="auth">
          <button id="signout_btn" onClick={signUserOut}>
            Sign Out
          </button>
        </div>
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
