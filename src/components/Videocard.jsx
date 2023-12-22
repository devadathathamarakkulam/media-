import React,{useState}from 'react'
import { Card,Modal,Button } from 'react-bootstrap'
import { addHistory, deletevideo } from '../Services/allapis';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

function Videocard({video,delResUpdate,isCategory}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {
    setShow(true);
    let date=new Date()
    let id=uuidv4()
    const {caption,url}=video
    console.log(id,caption,url,date)
    let body={id,caption,url,date}
    const res=await addHistory(body)
    console.log(res)
  }

  const removeVideo=async(id)=>{
  console.log(id)
  let res=await deletevideo(id)
  console.log(res)
if(res.status>=200 && res.status<300){
  toast.success("video deleted successfully")
  delResUpdate()
}
else{
  toast.error("video deletion failed")
}
  }

  const ondrag=(e,id)=>{
    // e.preventDefault()
    console.log("target value id")
    e.dataTransfer.setData("videoid",id)
  }

  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img onClick={handleShow} draggable onDragStart={(e)=>ondrag(e,video?.id)} variant="top" 
      src={video?.thumbnail} alt='img' />
      <Card.Body>
        {
          isCategory?"":
            <Card.Title >{video?.caption} <span className='btn' onClick={()=>removeVideo(video.id)} style={{float:'right'}}> <i  class="fa-solid fa-trash fa-bounce "></i></span></Card.Title>
        }
        
       
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="500" height="300" src={`${video?.url}?autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}


export default Videocard