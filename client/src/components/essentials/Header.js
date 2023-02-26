import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export const Header = (props) => {
    const navigator =   useNavigate(); 
    return (
      <Container className='flex a-center j-between'>
          <div className="logo">
              <img src="assests/logo.png" alt="logo" />
  
          </div>
          <button  onClick={()=> {navigator(props.login?"/login":"/signin")}}>
              {props.login ? "LOG IN" : "SIGN UP"}
          </button>
      </Container>
    )
  }
  
  const Container = styled.div`
  padding: 0.4rem;
  .logo{
      img{
          height  :5rem ;
      }
  }
   button{
      padding: .5rem 1rem;
      background-color: #e50914 ;
      border: none;
      cursor: pointer;
      color: white;
      border-radius: 0.2rem;
      font-weight: bolder;
      font-size: 1.05rem;
  
   }
  `
