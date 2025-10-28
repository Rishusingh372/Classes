import React from 'react'

const Conection =()=>{
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/home');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const postData = async()=>{
    try{
      const response = await axios.post('http://localhost:5000/data',{name:"Rishabh",age:21});
      console.log(response.data);
    }
    catch(error){
      console.error('Error posting data:', error);
    }
  }

  return(
    <>
     <h1>Welcome to my App</h1>
      <button onClick={fetchData}>Fetch Data from Backend</button>

      <button onClick={postData}> Post Data</button>
     

    </>
  )
}


export default Conection