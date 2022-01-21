import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from 'react';
import  axios  from 'axios';
import { userRequest } from "../../redux/requestmethod";

export default function WidgetSm() {
  const [user,setUser]=useState([]);
  console.log(user);

  useEffect(() => {

    const getuser=async()=>{

      try {
        const res=await userRequest.get("/all")
 setUser(res.data)
        
      } catch (error) {
        console.log(error)
      }
    }
    getuser()
  },[])
  return (

    <div className="widgetSm">
      

      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        
  {
    user.map((user,key)=>
      <li className="widgetSmListItem" key={user._id}>
      <img
        src={user.img || "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"}
        alt=""
        className="widgetSmImg"
      />
      <div className="widgetSmUser">
        <span className="widgetSmUsername">{user.username}</span>
        <span className="widgetSmUserTitle">Software Engineer</span>
      </div>
      <button className="widgetSmButton">
        <Visibility className="widgetSmIcon" />
        Display
      </button>
    </li>)
  }
    
      </ul>
    </div>
  );
}
