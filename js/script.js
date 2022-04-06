//question 1
const cat = { 
 complain:function complain (){ 
 console.log("Meow!"); 
 }, 
 };

//question 2

const Heading = document.querySelector("h3");
Heading.innerHTML = "Updated heading";

//question 3

const sizeHeading = document.querySelector("h3");
sizeHeading.style.fontSize = "2em";

//question 4

document.querySelector('h3').classList.add("subheading");


//question 5

const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((paragraph) => (paragraph.style.color = "red"));


//question 6

const resultsContainer = document.querySelector(".results");
const newParagraph = document.createElement("p");
newParagraph.innerText = "New paragraph";
resultsContainer.appendChild(newParagraph);
resultsContainer.style.backgroundColor = "yellow";

//question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function logNames(list) {
for (let i = 0; i < list.length; i++) {
console.log(list[i].name);
}
}

logNames(cats);

//question 8



