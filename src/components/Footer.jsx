import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className='bg-primary p-5' style={{width:'100%' , height:'400px'}}>
        <Row className='p-s'>
       <Col md='4'>
        <h4>  <i class="fa-regular fa-square-caret-up fa-fade "></i>{' '} Media Player</h4>
        <p style={{textAlign:'justify'}}>Media player software is a type of application software for playing multimedia computer files like audio and video files. Media players commonly display standard media control icons known from physical devices such as tape recorders and CD players, such as play , pause , fastforward , rewind , and stop buttons. In addition, they generally have progress bars (or "playback bars"), which are sliders to locate the current position in the duration of the media file.</p>
       </Col>
        <Col md='4' className='d-flex justify-content-center'>
          <div className='d-flex flex-column'>
          <h4>Links</h4>
          <Link to={'/'} style={{textDecoration:'none'}}>Landing Page</Link><br />
          <Link to={'/home'} style={{textDecoration:'none'}}>Home</Link><br />
          <Link to={'/watch history'} style={{textDecoration:'none'}}>Watch History</Link>     
         
          </div>
         
              
        </Col>
        <Col md='4' className='d-flex flex-column'>
          <h4>Guides</h4>
          <Link to={'https://react.dev/'} style={{textDecoration:'none'}}>React</Link><br />
          <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none'}}>React Bootstrap</Link><br />
          <Link to={'https://fontawesome.com/'} style={{textDecoration:'none'}}>Fontawesome</Link>
        </Col>
        </Row>
         <br />
         <br />
         <br />
       <p className='text-center mt-3'> Copyright © 2023 Media Player. Built with React.</p> 
      </div>
    </div>
  )
}

export default Footer