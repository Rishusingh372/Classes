let head = document.getElementById("head1");
console.log(head);
head.textContent = "This is the new heading"; // textContent replaces the text without HTML tags

// style using JavaScript
head.style.color = "blue"; // Change the color of the text
head.style.backgroundColor = "lightyellow"; 

let head2 = document.getElementById("head2");
head2.innerHTML = "<i>This is the new heading 2</i>";  // innerHtml allows html tags to be used 


let list = document.getElementsByTagName("li");
// for (let i = 0; i < list.length; i++) {
//     list[i].textContent = "This is the new list item " + (i + 1);
// }
list[0].textContent = "Home";
list[1].textContent = "About Us";
list[2].textContent = "Contact Us";

