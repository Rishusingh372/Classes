import { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001"); // Backend server URL

const Home = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prevChat) => [...prevChat, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const handleSubmit = () => {
    socket.emit("send_message", message);
    setChat((prevChat) => [...prevChat, message]);
    setMessage("");
  };

  return (
    <>
    <div>
        <h2>Chat Messages:</h2>
        {chat.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
        
    </div>
      <h1>Welcome to the chat App</h1>
      Enter Message:{" "}
      <input
        type="text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>

    </>
  );
};

export default Home;
