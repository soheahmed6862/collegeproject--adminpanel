import "./newProduct.css";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/apiCalls";
import  axios  from 'axios';
import { fileupoad } from "../../redux/requestmethod";

export default function NewProduct() {
const dispatch=useDispatch();
  // const [ desc,setProductname] =useState(" ")
  // const [title,setTitle] = useState(" ")
  // const [img,setimage]=useState()
  // console.log(img)
  const [input,setInput]=useState({

    desc: "",
    title: "",
  })
  

const handelinput=(e)=>{

  console.log(...input)
}
  
  const handlechnage = (e) => {
    e.preventDefault();
// const data={title,desc,img} 
// console.log(data)
// fileupoad.post('/product/addproduct', data

// )
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// })

// addProduct(dispatch,{title, desc})
  }
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file"   name="avatar" id="file" />
        </div> 
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" value={input} onChange={handelinput} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" onChange={handelinput}  value={input} />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
     
    
        <button onClick={handlechnage} className="addProductButton">Create</button>
      </form>
    </div>
  );
}
