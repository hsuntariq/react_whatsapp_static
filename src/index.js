import React from "react";
import ReactDOM from "react-dom";
import './styles.css'
import Chat from './Chat'
import { data } from "./data";



const WhatsApp = () => {
  return(
    <>
    <div className="container w-25 shadow border rounded d-flex justify-content-center flex-column align-items-center">
        {data.map((chats)=>{
          return <Chat {...chats} />
        })}
    </div>
    </>
  )
}





ReactDOM.render(<WhatsApp/>,document.getElementById('root'));