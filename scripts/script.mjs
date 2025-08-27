
// let's import the functions we need
import { bookInfoImporter } from "./bookDetImporter.mjs";
import { generateBookDiv } from "./generateBookDiv.mjs";

// Automation
//1. Create a dropdown and add the list of authors to it
const searchForm = document.getElementById("authorSearchForm");
const searchBar = document.getElementById("authorSearchBar");

// const selectedAuthor = authorSelection.value;


//2. add an event listener to the dropdown to filter the books by author name
searchForm.addEventListener('submit', function(event){
    event.preventDefault();

    const author = searchBar.value.trim();

    (async function main() {
    const books = await bookInfoImporter (author);
    generateBookDiv(books)
    })()

})



// async function main() {
//     const books = await bookInfoImporter ("Agatha Christie");
//     generateBookDiv(books)
// }

// main();





//===========Works ===================================================================================

// let bookData = [
//     {"title": "The art of Living", "author": "Melkamu", "year": 2026},
//     {"title": "The art of Laughing", "author": "Lily", "year": 2026},
//     {"title": "The art of Sleeping", "author": "Etsub", "year": 2026},
//     {"title": "The art of Working", "author": "Leul", "year": 2026}
// ]

// Create a module to create divs in the container divs 
// for each book, I want to create a div with the following properties (title, author, image, year)
// function generateBookDiv(data) {
//     let mainBody = document.getElementById("body");
//     let bookContainer = document.getElementById("container");
    
    // clear old content
//     bookContainer.innerHTML = "";

    // make sure that the container is inside body
//     if (!mainBody.contains(bookContainer)){
//         mainBody.appendChild(bookContainer);
//     }

//     data.forEach(book => {
    //create a div element
//     let bookDiv = document.createElement("div");
//     bookDiv.classList.add("book");
//     bookDiv.style.border = "1px solid blue";
//     bookDiv.style.justifyContent = "center";
//     bookDiv.style.textAlign= "center";
//     bookDiv.style.width ="700px";
    

    //create a title element and populate it
//     let title = document.createElement("h2");
//     title.textContent = book.title;

    //create author element and populate it
//     let author = document.createElement("h4");
//     author.textContent = book.author;

//     //create a p element and populate it
//     let year = document.createElement("p");
//     year.textContent = book.year;

//     // create an image element and populate it
//     // let cover = document.createElement(img);
//     // cover.src = "";
//     // cover.alt ="book.title"

    //append the contents to the div
//     bookDiv.append(title, author, year);
    
//     bookContainer.appendChild(bookDiv);
//     bookContainer.style.textAlign = "center";

//     mainBody.appendChild(bookContainer);

//     });
// }


// generateDiv(bookData);


//============================= Works =================================================
// export async function bookInfoImporter(author) { 
    
//     try {
//         const response = await axios.get(`https://openlibrary.org/search.json?q=${author}`);
//         const data = response.data;
//         const bookData = data.docs;
//         let booksByAuthor = [];
//         bookData.forEach(book => {
//             if (book.author_name[0].toLowerCase() === author.toLowerCase()){
//                 booksByAuthor.push({
//                     "author name": book.author_name[0],
//                     "title": book.title,
//                     "year": book.first_publish_year,
//                     "author key": book.author_key[0],
//                     "cover image": book.cover_i,
//                 });  
//             }
//         }); 
        
//         return booksByAuthor;

//     } catch(err) {
//         console.error(`Error: ${err.message}`);
//         return [];
//     }  
// }


// define the consumer function
// async function main() {
//     const books = await bookInfoImporter (author);
//     generateDiv(books)
// }

// main();

