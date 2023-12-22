
import React,{useState} from 'react'
import { Modal,Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideos } from '../Services/allapis';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({changeResState}) {

  const [show, setShow] = useState(false);
  const [video,setVideo]=useState({
    id:'',caption:'',thumbnail:'',url:''
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleVideoDetails=(e)=>{
    const {name,value}=e.target
    setVideo({...video,[name]:value})
  }

const handleVideoUrl=(e)=>{
  const {name,value}=e.target
  if(value.includes("v=")){
    let index=value.indexOf("v=")
    let url=value.substring(index+2,index+13)
    let videoUrl=`https://www.youtube.com/embed/${url}`
    setVideo({...video,[name]:videoUrl})
  }
}

const uploadVideo=async()=>{
  const {id,caption,thumbnail,url}=video
  if(!id || !caption ||!thumbnail || !url){
    alert.warning("please fill all video details")
  }
  else{
    let responce =await addVideos(video)
    console.log(responce)
    if(responce.status >=200 || responce.status<300){
      setShow(false)
      changeResState()
      toast.success("new video uploded")
    }
    else{
      toast.error("video upload failed")
    }
  }
}

  return (
      <>

      <div className='btn' onClick={handleShow}>
        <i class="fa-solid fa-square-plus fa-fade "></i>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static"keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel controlId="floatingID"label="VideoId"className="mb-3" >
          <Form.Control type="text" placeholder="video ID"name="id" onChange={(e)=>handleVideoDetails(e)}/>
        </FloatingLabel>

  
        <FloatingLabel controlId="floatingCaption"label="Caption"className="mb-3" >
          <Form.Control type="text" placeholder="video Caption"name="caption" onChange={(e)=>handleVideoDetails(e)} />
        </FloatingLabel>

  
        <FloatingLabel controlId="floatingID"label="Video Image Url"className="mb-3" >
          <Form.Control type="text" placeholder="video Image Url" name="thumbnail" onChange={(e)=>handleVideoDetails(e)}/>
        </FloatingLabel>

  
        <FloatingLabel controlId="floatingID"label="VideoUrl"className="mb-3" >
          <Form.Control type="text" placeholder="Youtube Video Url" name="url" onChange={(e)=>handleVideoUrl(e)}/>
        </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={uploadVideo}>Upload</Button>
        </Modal.Footer>
      </Modal>
    <ToastContainer/>
      </>
  )
}

export default Add