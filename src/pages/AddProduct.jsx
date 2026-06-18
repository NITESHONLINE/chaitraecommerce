import { useState } from "react";

const AddProduct = () => {

    const [title, setTitle] = useState("");
    const [ price, setPrice ] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        let singleProduct = {title, price, description, image};
        console.log(singleProduct)
    } 

  return (
    <>
      <form className="border border-gray-600 p-4 rounded w-[300px] mt-16 mx-auto" onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <br />
        <input type="text" onChange={(e)=> setTitle(e.target.value)} className="border border-gray-400 rounded pl-2" placeholder="name" /> <br />
        
        
        <label htmlFor="">Price</label>
        <br />
        <input type="text" onChange={(e)=> setPrice(e.target.value)} className="border border-gray-400 rounded pl-2" placeholder="price" /> <br />
        
        <label htmlFor="">Description</label>
        <br />
        <input type="text" onChange={(e)=> setDescription(e.target.value)} className="border border-gray-400 rounded pl-2" placeholder="description" />
        <br />
        
        <label htmlFor="">Image</label> <br />
        <input type="text" onChange={(e)=> setImage(e.target.value)} className="border border-gray-400 rounded pl-2" placeholder="image" />
        <br />
        <button className="bg-green-300 mt-4 text-white rounded px-6 py-1 hover:cursor-pointer">
          Save
        </button>
      </form>
    </>
  );
};

export default AddProduct;
