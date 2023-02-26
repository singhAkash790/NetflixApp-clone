import React from 'react'
// import IMG from 'assests/login.jpg'
import styled from "styled-components"
const index = () => {
  return (
    <Container>
      <img src="assests/login.jpg" alt="/"/>
    </Container>
  )
}

export default index

const Container = styled.div`
 height:100vh;
 width:100vw;
 img{
  height: 100vh;
  width :100vw;
 }
`;