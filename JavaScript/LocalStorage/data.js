let user =[];

const userdata=(e)=>{
    e.preventDefault();
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let number=document.getElementById('number').value;
    let pass=document.getElementById('pass').value;
    let z={name,email,phone,pass};
    user.push(z);
    localStorage.setItem("user",JSON.stringify(user));
    console.log(user);
    // alert("hello")

}
document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("form").addEventListener("submit",userdata);
})