let baseurl="http://localhost:3000/products";

const getallproduct=async()=>{
    try{
        let res=await fetch(baseurl);
        let data=await res.json();
        console.log(data);
        let productsDiv=document.getElementById("products");
        productsDiv.innerHTML=data.map((e)=>{
            return `
            <h2>title:${e.title}</h2>
            <p>Price: ${e.price}</p>
            <h1>id:${e.id}</h1>`
        }) // Clear previous content
    }catch(err){
        console.log(err);
    }
}
// Function to hide products
const hideproduct=()=>{
    let productsDiv=document.getElementById("products");
    productsDiv.innerHTML=""; 
}

// Function to add a new product

const addproduct=async(e)=>{
    // e.preventDefault(); // Prevent form submission
    let title=document.getElementById("title").value;
    let price=document.getElementById("price").value;
    try{
        await fetch(baseurl,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title:title,
                price:price
            })

        })

    }
    catch(err){

    }
}
// addproduct();

// Update product
const updateproduct=async(e)=>{
    // e.preventDefault(); // Prevent form submission
    let id=document.getElementById("updateid").value;
    let title=document.getElementById("updatetitle").value;
    let price=document.getElementById("updateprice").value;
    try {
        await fetch(baseurl+"/"+id,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title:title,
                price:price
            })
        })
        

    } catch (error) {
        
    }
}


const getproduct=async(e)=>{
    // e.preventDefault(); //Prevent form submission
    let id=document.getElementById("getid").value;
    try {
        let res=await fetch(baseurl+"/"+id);
        let data = await res.json();
        console.log(data);
        let productsDiv=document.getElementById("products");
        productsDiv.innerHTML=`
            <h2>title:${data.title}</h2>
            <p>Price: ${data.price}</p>
            <h1>id:${data.id}</h1>`
        ;

        
    } catch (error) {
        
    }
}

// Delete product
const deleteproduct=async(e)=>{
    // e.preventDefault(); // Prevent form submission
    let id=document.getElementById("deleteid").value;
    try {
        await fetch(baseurl+"/"+id,{
            method:"DELETE"
        })
        
    } catch (error) {
        
    }
}