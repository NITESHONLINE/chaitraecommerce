import { Link } from "react-router";
import AddProduct from "../components/AddProduct";
import Product from "../components/Product";
import { useState } from "react";

const Home = () => {
  const initialProduct = [
    {
      title: "Mouse",
      price: 9876,
      description: "best gaming mouse.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKByis4JcJz4xVk6z9TUY-ZQmTzWWVNw6Tw&s",
    },
    {
      title: "Keyboard",
      price: 9098675,
      description: "best gaming keyboard.",
      image: "https://m.media-amazon.com/images/I/41SCJZV7VzL._AC_US1000_.jpg",
    },
    {
      tititle: "Mic",
      price: 876566544,
      description: "best gaming mic.",
      image: "https://m.media-amazon.com/images/I/61cKMSTExdL.jpg",
    },
  ];


  const dataFromLocalStorage = JSON.parse(localStorage.getItem('product'))

  const [product,setProduct] = useState(initialProduct)

  const handleProduct = (singleProduct) => {
    const updatedData  = [singleProduct, ...product ];
    setProduct(updatedData);

    localStorage.setItem('product', JSON.stringify(updatedData));
  }
 
const handleDeleteAll = () => {
  localStorage.clear();
  location.reload()
}

  return (
    <>


    <AddProduct addProduct={handleProduct}/>

    <button onClick={handleDeleteAll}>All Clear</button>

    {/* <Product products={product} /> */}
    <Product products={dataFromLocalStorage} />
     
    </>
  );
};

export default Home;
