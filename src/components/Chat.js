import React, {useState, useEffect, useRef} from "react";
import socket from "./Socket";
import{ Container } from "react-bootstrap";

const Chat = ({user}) =>{

    const [messages, setMessages] = useState([]);

    const divRef = useRef(null) 

    useEffect(()=>{
        socket.on("CHAT", data =>{
            setMessages(msg=>{
                return [...msg, data]})
        });
        return () => {socket.off()};
    }, []);

    useEffect(() => {
        if (divRef) {
            divRef.current.addEventListener('DOMNodeInserted', event => {
            const { currentTarget: target } = event;
            target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
          });
        }
      }, [])

    return(
        <Container className="d-flex">
            <div className="overflow-auto" style={{height:380, width: 600}} ref={divRef}>
                    <div className="d-flex flex-column align-items-start justify-content-end px-3">
                        {messages.map((message) => {
                            return (              
                            <div
                                className={`my-1 d-flex flex-column ${message.name=== user ? 'align-self-end align-items-end' : 'align-items-start'}`}
                            >
                                <div
                                    className={`rounded px-2 py-1 ${message.name === user ? 'bg-primary text-white' : 'border'}`}>
                                    {message.message}
                                </div>
                                <div className={`text-muted small ${message.name === user ? 'text-right' : ''}`}>
                                    {message.name=== user ? 'You' : message.name} <br></br>
                                    Fecha: {Date(message.date)}
                                </div>
                            </div>); 
                            })}
                    </div>
            </div>
        </Container>
    )

};

export default Chat;
