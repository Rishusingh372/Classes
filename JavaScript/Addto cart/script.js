import products from './ourproduct.js';
console.log(products);

let prod=document.getElementById("prod");
console.log(prod);

prod.innerHTML=products.map((e)=>{
    return `<div class="card" style="height: 300px; width: 300px; border: 2px solid black; ">
                <img src="${e.image}" alt="${e.name} "  style="height: 100px; width: 100px;">
                <h2>${e.name}</h2>
                <p>Price: $${e.price}</p>
                <button onclick=addproduct(${e.price})>Add to Cart</button>
                <button onclick=removeproduct(${e.price})>Remove to Cart</button>

            </div>`;
            console.log(prod)
});
let p=0;
window.addproduct = (price)=>{
  p=p+price;
  alert(p);
}
window.removeproduct = (price)=>{
  p=p-price;
  alert(p);
}
   