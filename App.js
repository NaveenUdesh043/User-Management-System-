import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Formtable from './components/Formtable';

axios.defaults.baseURL = "http://localhost:8080/"

function App() {

  const[addSection,setAddSection] = useState(false)
  const[editSection,setEditSection] = useState(false)
  const [formData,setFormData] = useState({
    firstname : "",
    lastname : "",
    email : "",
    telno : "",
    address : "",
    
  })

  const [formDataEdit,setFormDataEdit] = useState({
    firstname : "",
    lastname : "",
    email : "",
    telno : "",
    address : "",
    _id : ""
  })
  const handleLogout = () => {
    window.location.href = "http://localhost:3000";
  };
  

  const [dataList,setDataList] = useState([])
  
const handleOnChange = (e)=>{
  const{value,name} = e.target
  setFormData((preve)=>{
    return{
      ...preve,
      [name] : value
    }
  })
}

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const data = await axios.post("/create",formData)
    console.log(data)
    if(data.data.success){
      setAddSection(false)
      alert(data.data.message)
      getFetchData()
      setFormData({
        firstname :"",
        lastname : "",
        email : "",
        telno : "",
        address : "",
        
      })
    }
  }
const getFetchData = async()=>{
  const data = await axios.get("/")
  console.log(data)
  if(data.data.success){
    setDataList(data.data.data)
  
  }
}
useEffect(()=>{
  getFetchData()
},[])

const handleDelete = async(id)=>{
  const data = await axios.delete("/delete/"+id)
  
  if(data.data.success){
    getFetchData()
    alert(data.data.message)
  }
}

const handleUpdate = async(e)=>{
e.preventDefault()
const data = await axios.put("/update",formDataEdit)
if(data.data.success){
  getFetchData()
  alert(data.data.message)
  setEditSection(false)
}
}

const handleEditOnChange = async(e)=>{
  const{value,name} = e.target
  setFormDataEdit((preve)=>{
    return{
      ...preve,
      [name] : value
    }
  })
}

const handleEdit = (el)=>{
  setFormDataEdit(el)
  setEditSection(true)
}



  return (
    <>
    <div className="contaner">
      
      <button className="btn btn-add" onClick={()=>setAddSection(true)}>Add New User</button> 
      <button className="btn btn-logout" onClick={handleLogout}>Logout</button>
{
  addSection && (
      <Formtable
      handleSubmit={handleSubmit}
       handleOnChange={handleOnChange}
       handleclose={()=>setAddSection(false)}
      rest={formData}
      />
  )
}
{
  editSection &&(
    <Formtable
      handleSubmit={handleUpdate}
       handleOnChange={handleEditOnChange}
       handleclose={()=>setEditSection(false)}
       rest={formDataEdit}
      />
  )
}

<div className='tableContainer'>
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Telephone Number</th>
        <th>Address</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        dataList[0] ? (
        dataList.map((el)=>{
          console.log(el)
          return(
            <tr>
              <td>{el.firstname}</td>
              <td>{el.lastname}</td>
              <td>{el.email}</td>
              <td>{el.telno}</td>
              <td>{el.address}</td>
              <td>
              <button className='btn btn-edit' onClick={()=>handleEdit(el)}>Edit</button>
              <button className='btn btn-delete' onClick={()=>handleDelete(el._id)}>Delete</button>
              </td>
            </tr>
          )
        }))
        :(
          <p style={{textAlign : "center"}}>No Data Found</p>
        )
      }
    </tbody>
  </table>
</div>
</div>


    </>
  );
}

export default App;
