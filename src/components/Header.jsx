import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigateByUrl=useNavigate()
  const goBack=()=>{
    navigateByUrl(-1)
  }
  return (
    <div> 
      <Navbar className="bg-body-secondary">
      <Container>
      <Navbar.Brand >
      <Button onClick={goBack} style={{backgroundColor:'#cee1ed',color:'black'}}><i class="fa-solid fa-backward"></i></Button>
      <Link to={'/'}style={{textDecoration:'none'}}>
        <i class="fa-regular fa-square-caret-up fa-fade me-3 "></i>{' '}
          MEDIA PLAYER
          </Link>
        </Navbar.Brand>
  
        
      </Container>
      </Navbar>
    </div>
  )
}

export default Header