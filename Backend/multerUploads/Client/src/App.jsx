import { useState } from "react";
import axios from "axios";
import Display from "./Display.jsx";
import Student from "./Student.jsx";

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

return(
   <>
       <Student/>
         <Display/>
   </>
)
}

export default App;
