import { useState } from "react";
import axios from "axios";

function App() {
//   const [file, sefile] = useState(0);
//   const handleImage = (e) => {
//     sefile(e.target.files[0]);
//   };
//     // const handleSubmit = async () => {
//     //   const formdata = new FormData();
//     //   formdata.append("file", file);
//     //   try {
//     //     const res = await fetch("http://localhost:8000/upload", {
//     //       method: "POST",
//     //       body: formdata,
//     //     });
//     //     const data = await res.text();
//     //     console.log(data);
//     //   } catch (error) {
//     //     console.log("Error while uploading file:", error);
//     //   }
//     // };
    
//   const handleSubmit = async () => {
//     const formdata = new FormData();
//     let api ="http://localhost:8000/upload"
//     formdata.append("file", file);
//     try {
//       const res = await axios.post(api, formdata);
//       console.log(res.data);
//     } catch (error) {
//       console.log("Error while uploading file:", error);
      
//     }
//   };

//   return (
//     <>
//       <h1> Insert Data</h1>
//       Roll No: <input type="text" /> <br />
//       Name: <input type="text" /> <br />
//       Address: <input type="text" /> <br />
//       Upload File: <input type="file" onChange={handleImage} />
//       <button onClick={handleSubmit}>Submit</button>
//     </>
//   );
// }
 const [input, setInput] = useState({});
  const [images, setImages] = useState();
  const handleInput=(e)=>{
     let name = e.target.name;
     let value= e.target.value;
     setInput(values=>({...values, [name]:value}));
     console.log(input);
  }
  const handleImage=(e)=>{
        console.log(e.target.files);
        setImages(e.target.files);
  }
const handleSubmit=async()=>{
   let api="http://localhost:8000/upload";
   const formData = new FormData();
   for (let key in input){
      formData.append(key, input[key]);
   }
   for(let a=0; a<images.length; a++)
   {
     formData.append("images", images[a]);
   }
   const response= await axios.post(api, formData);
   console.log(response.data);
}
    return(
        <>
          <h1> Inser Student Records</h1>
          Enter Rollno :<input type="text" name="rollno"  onChange={handleInput}/>
          <br/>
          Enter Name : <input type="text" name="name" onChange={handleInput} />
          <br/>
          Enter Address : <input type="text" name="address" onChange={handleInput} />
          <br />
          Upload Images : <input type="file" multiple onChange={handleImage} />
          <button onClick={handleSubmit}>Upload!</button>
        </>
    )
}

export default App;
