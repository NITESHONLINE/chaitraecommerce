import { useState } from "react";

const AddProduct = (props) => {

    const [title, setTitle] = useState("");
    const [ price, setPrice ] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        let singleProduct = {title, price, description, image};
        // console.log(singleProduct)

      localStorage.setItem("product", JSON.stringify(singleProduct))

      props.addProduct(singleProduct)

    } 

  return (
    <>
    <h1 className="text-center font-bold text-2xl">Product Add:</h1>
      <form className="border border-gray-600 p-4 rounded w-75 mt-4 mx-auto" onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <br />
        <input type="text" onChange={(e)=> setTitle(e.target.value)} className="border w-full mb-4 border-gray-400 rounded pl-2" placeholder="name" /> <br />
        
        
        <label htmlFor="">Price</label>
        <br />
        <input type="text" onChange={(e)=> setPrice(e.target.value)} className="border w-full mb-4 border-gray-400 rounded pl-2" placeholder="price" /> <br />
        
        <label htmlFor="">Description</label>
        <br />
        <input type="text" onChange={(e)=> setDescription(e.target.value)} className="border w-full mb-4 border-gray-400 rounded pl-2" placeholder="description" />
        <br />
        
        <label htmlFor="">Image</label> <br />
        <input type="text" onChange={(e)=> setImage(e.target.value)} className="border w-full mb-4 border-gray-400 rounded pl-2" placeholder="image" />
        <br />
        <button className="bg-green-300 mt-4 text-white rounded px-6 py-1 hover:cursor-pointer">
          Save
        </button>
      </form>
    </>
  );
};

export default AddProduct;
