// let head = document.getElementById("head1");
// console.log(head);
// head.textContent = "This is the new heading"; // textContent replaces the text without HTML tags

// // style using JavaScript
// head.style.color = "blue"; // Change the color of the text
// head.style.backgroundColor = "lightyellow"; 

// let head2 = document.getElementById("head2");
// head2.innerHTML = "<i>This is the new heading 2</i>";  // innerHtml allows html tags to be used 


// let list = document.getElementsByTagName("li");
// // for (let i = 0; i < list.length; i++) {
// //     list[i].textContent = "This is the new list item " + (i + 1);
// // }
// list[0].textContent = "Home";
// list[1].textContent = "About Us";
// list[2].textContent = "Contact Us";

// create ul add 10 list and every even list bgcolor blue and text white


// let ul = document.createElement("ul");
// for (let i = 0; i <= 10; i++) {
//     let li = document.createElement("li");
//     li.textContent = "List Item " + i;
//     if (i % 2 === 0) {
//         li.style.backgroundColor = "blue";
//         li.style.color = "white";
//     }
//     ul.appendChild(li);
// }
// document.body.appendChild(ul); 



// image change 

// let image= document.getElementById("image1");
// image.src = "https://picsum.photos/200/300"; // Change the image source


// using setattribute to for styling
let head1 = document.getElementById("head");
head1.setAttribute('align', 'center'); 


let bd = document.body;
bd.removeAttribute('bgcolor'); // Remove the class attribute from the body