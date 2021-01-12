import React, {useState, useEffect} from 'react';
import axios from 'axios';

function UserInt() {
   
    const [userList,setuserList]=useState([]);

    const [newEmail,setnewEmail]= useState('');

    useEffect(() => {
        axios.get("http://localhost:1337/signupread").then((res)=>{
        setuserList(res.data);
    })
        
    }, [])

 function changeEmail(id){
    axios.put('http://localhost:1337/signupemail/:id',{
        id:id, 
        newEmail:newEmail,
        
    })
 }

 const deleteAcc=(id)=>{
    axios.delete(`http://localhost:1337/signupdelete/${id}`)
 }





    
    

    return (
        <div className="container" style={{textAlign:"center"}}>
            Admin-interface:
            <div>
                <h1>User List: </h1>
                {userList.map((val,key)=>{
                    return <div key={key} ><h3>{val.fullName}</h3><h3>{val.email}</h3>
                    <input type="text" placeholder="change email" onChange={(e)=>{setnewEmail(e.target.value);}}></input>
                    <button  onClick={()=>changeEmail(val._id)} >Change Email</button>

                    <button onClick={()=>deleteAcc(val._id)}>Deactivate</button>
                    
                    
                    </div>

                })}
            </div>
        </div>
    )
}

export default UserInt
