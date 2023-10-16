import React from 'react'
import "../App.css"
import { CgClose } from 'react-icons/cg'


const Formtable = ({handleSubmit, handleOnChange, handleclose,rest}) => {
  return (

        <div className="addContainer">
           
           <form onSubmit={handleSubmit}>
           <div className="close-btn" onClick={handleclose}><CgClose/></div>
             <label htmlFor="firstname">First Name : </label>
             <input type="text" id="firstname" name="firstname" onChange={handleOnChange} value={rest.firstname}/>
    
             <label htmlFor="lastname">Last Name : </label>
             <input type="text" id="lastname" name="lastname"onChange={handleOnChange} value={rest.lastname}/>
    
             <label htmlFor="email">Email : </label>
             <input type="email" id="email" name="email"onChange={handleOnChange} value={rest.email}/>
    
             <label htmlFor="telno">Mobile Number : </label>
             <input type="number" id="telno" name="telno"onChange={handleOnChange} value={rest.telno}/>
    
             <label htmlFor="address">Address : </label>
             <input type="text" id="address" name="address"onChange={handleOnChange} value={rest.address}/>
    
             <button className="btn">Submit</button>
           </form>
         </div>
  )
}

export default Formtable