/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './App.css';
import { useEffect } from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

function App() {

const [imageURL,setImageURL]=useState('')
const[changeImage,setChangeImage]=useState(0)
const[prevImage,setPrevImage]=useState('')
useEffect(
  ()=>{
    getImage()
  },[changeImage]
)
  const URL='https://dog.ceo/api/breeds/image/random';
  

  const getImage=async()=>{
    const respose=await fetch(URL);
    const data=await respose.json();
    console.log(data.message);
    setImageURL(data.message);
    if(changeImage===0){
      setPrevImage(imageURL);
    }

    }


const nextImage=()=>
{
  setPrevImage(imageURL);
  setChangeImage(changeImage+1);
  
}

const PrevImage=()=>
{
  
  setImageURL(prevImage);
  
}




  return (
<div align='center'>
<div class="text-center">
  <img src={imageURL}   className="rounded m-2" alt="..." />
</div>
<button onClick={PrevImage} className='btn btn-danger m-2'>Prev Image</button>
  <button onClick={nextImage} className='btn btn-primary m-2'>Generate Random</button>
  
</div>
  );
}

export default App;
