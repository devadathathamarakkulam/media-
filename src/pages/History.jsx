
import React ,{useState,useEffect} from 'react'
import { getHistory } from '../Services/allapis'
import { Table } from 'react-bootstrap'

function History() {

  const [watch,setwatch]=useState([])


  const handleHisoryList=async()=>{
    const res=await getHistory()
    console.log(res.data)
    setwatch(res.data)
  }

  useEffect(()=>{
    handleHisoryList()
  },[])
console.log(watch)
  return (
    <div className='p-3'>
      <h1>Watch History</h1>
      <Table className='table table-striped bg-dark'>
        <tr>
        <th>id</th>
        <th>caption</th>
        <th>url</th>
        <th>date</th>
        </tr>
        {
          watch?.map((item,index)=>(

            <tr>
            <td>{index+1}</td>
            <td>{item.caption}</td>
            <td>{item.url}</td>
            <td>{item.date}</td>
            </tr>

          ))  } :         
           <tr colspan='4'>
            no history awailable..
          </tr>
        
          
       
      </Table>
    </div>
  )
}

export default History