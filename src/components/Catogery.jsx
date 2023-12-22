
import React,{useState,useEffect} from 'react'
import { Modal,Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategory,deletecategory,getCategories,getSpecificVideos, updatecategory } from '../Services/allapis';
import { toast } from 'react-toastify';
import Videocard from '../components/Videocard'

function Catogery() {
  const [show, setShow] = useState(false);
  const [categories,setCategories]=useState([])
  const [categoryDetails,setCategoryDetails]=useState({
    id:'',categoryName:'',allVideos:[]
  })

  const handleCategoryList=async()=>{
    const res=await getCategories()
    console.log(res.data)
    setCategories(res.data)
  }

  const handleCategory=(e)=>{
    const {name,value}=e.target
    setCategoryDetails({...categoryDetails,[name]:value})
  }

const handleRequest=async()=>{
  const res=await addCategory(categoryDetails)
  console.log(res)
  if(res.status>=200 && res.status<=300)
  {
setShow(false)
handleCategoryList()
toast.success("category added")
  }
else{
  toast.error("failed")
}
}
const handleCategorydelete=async(id)=>{
  const res=await deletecategory(id)
  //console.log(res)
  if(res.status>=200 && res.status<300){
    toast.success("category removed")
    handleCategoryList()
  }
  else{
    toast.error("category not removed")
  }
}

console.log(categoryDetails)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    handleCategoryList()
   },[])

   const DragOver=(e)=>{
    e.preventDefault()
    console.log("Dragging Over Category Board!!")
   }

   const onDropHandle=async(e,id)=>{
    console.log("Drop Target category id:",id)
    let videoid=e.dataTransfer.getData("videoid")
    console.log("video ID",videoid);
    const video=await getSpecificVideos(videoid)
    console.log(video.data)

    let selectedCategory=categories?.find(item=>item?.id===id)
    selectedCategory.allVideos.push(video.data)
    // console.log(selectedCategory)
    const res=await updatecategory(id,selectedCategory)
    console.log(res)
    if(res.status>=200 && res.status<300){
      toast.success("video added to category!")
    }
   }
   
  return (
  
<>

<div className='d-grid'>
      <button onClick={handleShow} style={{backgroundColor:'#1888ad'}} className='btn btn-block'>Add Category</button>
    </div>

{
  categories?.map(item=>(
    <div className='bg-primary m-3 p-1 border rounded' droppable onDragOver={e=>DragOver(e)} onDrop={(e)=>onDropHandle(e,item?.id)} >
      <div>
    <span>
      {item?.categoryName}
    </span>
    <span style={{float:'right'}} className='btn' onClick={()=>handleCategorydelete(item?.id)}> <i  class="fa-solid fa-trash fa-bounce  "></i></span>
    </div>
    <div>
      {item?.allVideos.map(video=>(
        <Videocard video={video} isCategory={true}/>
      ))}
    </div>
    </div>))
}

<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
  <Modal.Header closeButton>
    <Modal.Title >Add Category</Modal.Title>
  </Modal.Header>
  <Modal.Body>

  <FloatingLabel controlId="floatingID"label="VideoId"className="mb-3" >
    <Form.Control type="text" placeholder="Enter Uneque ID"name='id'  onChange={(e)=>handleCategory(e)}/>
  </FloatingLabel>

  <FloatingLabel controlId="floatingCategory"label="Category Name"className="mb-3" >
    <Form.Control type="text" placeholder="Category Name" name='categoryName'  onChange={(e)=>handleCategory(e)} />
  </FloatingLabel>

  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="danger" onClick={handleRequest}>Add</Button>
  </Modal.Footer>
</Modal>

</>

  
  )
  }

export default Catogery;