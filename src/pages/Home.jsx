import React,{useState} from 'react'
import { Row,Col, ToastContainer } from 'react-bootstrap'
import Add from '../components/Add'
import Catogery from '../components/Catogery'
import View from '../components/View'
import { Link } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'


function Home() {
const [resState,setResState]=useState(false)
const changeResState=()=>{
  setResState(true)
}

  return (
    <div>
      <h2>All Videos</h2>
<Link style={{float:'right',fontSize:'20px',color:'white',textDecoration:'none'}} to={'/watch-history'}>watch history</Link>

<Row className='mx-3 mt-3 mb-3 p-3'>
  <Col md='2'>
    <Add changeResState={changeResState}/>
  </Col>
  <Col md='7'>
    <View resState={resState}/>
  </Col>
  <Col md='3'>
    <Catogery/>
  </Col>
</Row>

{/* <ToastContainer
position='top-right'
autoClose={5000}/> */}
    </div>
  )
}

export default Home