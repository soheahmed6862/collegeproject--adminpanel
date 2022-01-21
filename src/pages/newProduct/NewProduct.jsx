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
    image:"",
    categories:"",
    price:"",
    color:"",
    size:""


  })

  // console.log(input)

const handelinput=(e)=>{
const name=e.target.name;
const value=e.target.value;

setInput({...input,[name]:value})
}

const imageinput=(e)=>{
  
  setInput({...input,image:e.target.files[0]})
}
  
  const handlechnage = (e) => {
    e.preventDefault();

    console.log(input)
    const formdata = new FormData();

          formdata.append("image",input.image,input.image.name)
          formdata.append("desc",input.desc)
          formdata.append("title",input.title)
          formdata.append("categories",input.categories)
          formdata.append("price",input.price)
          formdata.append("color",input.color)
          formdata.append("size",input.size)
      

 axios.post('http://localhost:5000/api/product/addproduct', formdata

)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
})


  }
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file"  onChange={imageinput}  name="image" id="file" />
        </div> 
        <div className="addProductItem">
          <label>title</label>
          <input type="text" placeholder="title" name="title" onChange={handelinput}  value={input.title} />
        </div>
        <div className="addProductItem">
          <label>description</label>
          <input type="text" placeholder="Apple Airpods" name="desc" value={input.desc} onChange={handelinput} />
        </div>
        <div className="addProductItem">
          <label>  categories</label>
          <input type="text" placeholder="categories" name="categories" onChange={handelinput}  value={input.categories} />
        </div>
        <div className="addProductItem">
          <label>price</label>
          <input type="number" placeholder="price" name="price" onChange={handelinput}  value={input.price} />
        </div>
        <div className="addProductItem">
          <label>color</label>
          <input type="text" placeholder="color" name="color" onChange={handelinput}  value={input.color} />
        </div>
        <div className="addProductItem">
          <label>Size</label>
          <input type="text" placeholder="size" name="size" onChange={handelinput}  value={input.size} />
        </div>

        {/* <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      */}
    
        <button onClick={handlechnage} className="addProductButton">Create</button>
      </form>
    </div>
  );
}
