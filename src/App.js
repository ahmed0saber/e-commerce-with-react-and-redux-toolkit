import './App.css';
import Category from "./components/Category"
import Navbar from "./components/Navbar"
import React, {useState, useEffect} from 'react'
import { Routes, Route } from "react-router-dom";
import Cart from './components/Cart';

function App() {
  const [categoriesData, setCategoriesData] = useState([])
  useEffect(() => {
    const apiUrl = "https://ecom-fake-api.onrender.com/categories"
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setCategoriesData(data)
    })
  }, [])
  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={
            categoriesData.map((categoryData, index) => <Category key={index} data={categoryData}/>)
          } />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
