import React, { useEffect, useState } from 'react'
import VideoCard from '../components/Videocard'
import {getVideos} from '../Services/allapis'
import { Row,Col } from 'react-bootstrap'

function View({resState}) {
  const [allVideos,setAllVideos]=useState([])
  const [delResponse,setDelResponse]=useState(false)

  const delResUpdate=()=>{
    setDelResponse(true)
  }

 const getVideo=async()=>{
  let res=await getVideos()
  // console.log(res.data)
  setAllVideos(res.data)
  setDelResponse(false)
 }
 useEffect(()=>{
  getVideo()
 },[resState,delResponse])
 
  return (
    <div className='p-5 border border-primary bg shadow-rounded '>
<Row>

  {
   allVideos?.map(item=>(
    <Col sm={12} md={6} className='mb-2'>
    <VideoCard delResUpdate={delResUpdate} video={item}/>

    </Col>
   ))
  }

</Row>

    </div>
  )

  }
export default View