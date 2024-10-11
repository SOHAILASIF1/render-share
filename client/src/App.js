import {useEffect, useRef, useState} from 'react'
import './App.css';
import banner from "./assest/banner.jpg"
import { uploadFile } from './service/api.js';

function App() {
  const [file,setFile]=useState('')
  const [result,setResult]=useState('')
  console.log(file);
  const fileInputRef=useRef()
  const onUploadClick=()=>{
    fileInputRef.current.click()
  }
  useEffect(()=>{
    const getImage=async ()=>{
      if (file) {
        const data=new FormData()
        data.append('name',file.name)
        data.append('file',file)
          let response =await uploadFile(data)
          setResult(response.path)
          
      }
      
    }
    getImage()

  },[file])
  return (
    <div className='container'>
      <img src={banner} alt='image'/>
      <div className="wrapper">
        <h1>Simple File Sharing</h1>
        <p>Upload and share the download Link</p>
        <button onClick={()=>onUploadClick()}>Upload</button>
        <input type='file'
        ref={fileInputRef}
        style={{display:'none'}}
        onChange={(e)=>setFile(e.target.files[0])}
        
        />
        <a href={result} target='_blank'>{result}</a>
      </div>
    </div>
  );
}

export default App;
