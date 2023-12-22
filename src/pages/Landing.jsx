import React from 'react'
import { Row ,Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigateByUrl=useNavigate()
    const clickNavigate=()=>{
      navigateByUrl('./home')
    }

  return (
    <div>
      <Row className='mt-5 mb-3 pb-4 align-item-centre border p-5 border-info d-flex rounded mx-3 mt-5 mb-5 '>
      <Col></Col>
      <Col md='4' >
        <h2>Welcome to <span className='text-danger'>MediaPlayer.com</span></h2>
        <p style={{textAlign:'justify'}}>Media player software is a type of application software for playing multimedia computer files like audio and video files. Media players commonly display standard media control icons known from physical devices such as tape recorders and CD players, such as play , pause , fastforward, rewind , and stop  buttons. In addition, they generally
           have progress bars (or "playback bars"), which are sliders to locate the current position in the duration of the media file.</p>
           <button className='btn btn-info' onClick={clickNavigate}>Get Started</button>
      </Col>
      <Col></Col>
      <Col md='6'>
        <img src="https://media.istockphoto.com/id/970248760/sv/vektor/video-player-ikonen-p%C3%A5-laptop-sk%C3%A4rm-platt-tecknad-media-player-symbolen-isolerade-bild.jpg?s=170667a&w=0&k=20&c=Lgwl7QhMhvuMWOqHL4GWPrbff8_4ZxqYBaYwK8CDhl8=" height={'320px'} width={'450px'} alt="banner" />
      </Col>
      </Row>

        <div >
        <h1 className='text-center'>Features</h1>
        <Row className='justify-content-around'style={{textAlign:'justify'}}>
        <Card style={{ width: '18rem' }}className='border p-5 border-info d-flex rounded mx-3 mt-5 mb-5 '>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/1088223/screenshots/4854478/computer-settings.gif" />
      <Card.Body>
        <Card.Title>Managing Vidios</Card.Title>
        <Card.Text>
        Media players commonly display standard media control icons known from physical devices such as tape recorders and CD players, 
        such as play , pause , fastforward , rewind  and stop  buttons. 
        </Card.Text>
      </Card.Body>
    </Card>
     
    <Card style={{ width: '18rem' }} className='border p-5 border-info d-flex rounded mx-3 mt-5 mb-5 '>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/943550/screenshots/2373582/video-marketing_2.gif" />
      <Card.Body>
        <Card.Title>Categorizing Videos</Card.Title>
        <Card.Text>
        A media player is a piece of computer hardware or software tailored for playing back different forms of electronic
         media and multimedia file formats.Category Music software and Category:Audio editors for programs which have editing capabilities.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem'}} className='border p-5 border-info d-flex rounded mx-3 mt-5 mb-5 '>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/04/00/f1/0400f1ae341070283f5441097ef96d39.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
        Watch history makes it easy to find videos you recently watched, and, when it's turned on, allows us to give relevant video recommendations.
        </Card.Text>
      </Card.Body>
    </Card>
   </Row>
       </div>

        <div className='border p-5 border-info d-flex rounded mx-3 mt-5 mb-5 '>
          <Row>
            <Col>
            <h1>Simple Fast And Powerfull</h1>
            <p style={{textAlign:'justify'}}>Media player software is a type of application software for playing multimedia computer files like audio and video files. Media players commonly display standard media control icons known from physical devices such as tape recorders and CD players, such as play , pause , fastforward, rewind , and stop  buttons. In addition, they generally
           have progress bars (or "playback bars"), which are sliders to locate the current position in the duration of the media file.</p>
            </Col>
          <Col>
          <iframe width="860" height="315" src="https://www.youtube.com/embed/JdWTl7ruzic?si=6u8PEtOgzrDcqSkr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Col>
          </Row>

        </div>
    </div>
  )
}

export default Landing