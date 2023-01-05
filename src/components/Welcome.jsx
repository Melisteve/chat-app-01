import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
import Logout from "./Logout"

const Welcome = ({currentUser}) => {

    const [userName, setUserName] = useState("");
    useEffect( () => {
      (async() => {
          setUserName(
              await JSON.parse(
                localStorage.getItem("chat-app-user")
              ).username
            );
      })()
      
    }, []);

  return (
    <Container>
    <img src={Robot} alt="" />
    <h1>
      Welcome, <span>{userName}!</span>
    </h1> 
    <h3>Please select a chat to Start messaging.</h3>
    
  </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  @media screen and (min-width: 400px) and (max-width: 799px)  {
            h1{
              padding-left: 3rem;
            }
        }
  
  img {
    height: 20rem;
    @media screen and (min-width: 400px) and (max-width: 799px)  {
            height: 15rem;
        }
  }
  span {
    color: #44bcd1;
  }
`;

export default Welcome
