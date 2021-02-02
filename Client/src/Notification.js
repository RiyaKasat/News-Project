import ReactNotification from 'react-notifications-component'
import {store} from 'react-notifications-component'
import 'animate.css'
 import 'react-notifications-component/dist/theme.css'

import React from 'react'

export   function Notification() {
    
    return (
        <div>
            <ReactNotification></ReactNotification>
            <Home/>
        </div>
            )
}

function Home(){
    const handleNotification=()=>{
        store.addNotification({
            // title:"News Notification",
            // message:"Top Headlines Displayed",
            content:MyNotify,
            type:"success",
            container:"top-left",
            insert:"top",
            animationIn:["animated","fadeIn"],
            animationOut:["animated","fadeIn"],

            dismiss:{
                duration:2000,
                showIcon:true,
            },
            width:600

        })
        }
    return(
         <div>
<button onClick={handleNotification}
type="button" class="btn btn-warning btn-rounded btn-sm " style={{fontFamily:"Georgia", color:"black" }}><i class="fas fa-bell fa-lg"></i> &nbsp;  <span class="items_A"> 
 Notifications</span>
 </button>
        </div>
    )
}

function MyNotify(){
    return(
        <div className="bg-primary text-white">
          <h1>news</h1>
          <h3>top Headlines</h3>
        </div>
    )

    
}

export default Notification;