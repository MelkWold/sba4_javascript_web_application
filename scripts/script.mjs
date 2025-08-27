// import { bookInfoImporter } from "./bookInfoImporter.mjs";

// async function bookImporter (author) {
//     try {
//         const importedBooks = await axios.get(`https://openlibrary.org/search.json?q=${author}`);
//         const importedBookData = importedBooks.data;
//         return importedBookData;
//     } catch(err) {
//         console.error(err.message);
//         return null;
//     }   
// }

// bookImporter("Dan Brown");



// bookImport("Dan Brown")
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => console.error("Error:", err));
// const books = await bookImport("Dan Brown");
// console.log(books)

let bookData = [
    {"title": "The art of Living", "author": "Melkamu", "year": 2026},
    {"title": "The art of Laughing", "author": "Lily", "year": 2026},
    {"title": "The art of Sleeping", "author": "Etsub", "year": 2026},
    {"title": "The art of Working", "author": "Leul", "year": 2026}
]
//===========Works ===================================================================================
// Create a module to create divs in the container divs 
// for each book, I want to create a div with the following properties (title, author, image, year)
// function generateDiv(data) {
//     let mainBody = document.getElementById("body");
//     let bookContainer = document.getElementById("container");
    
//     // clear old content
//     bookContainer.innerHTML = "";

//     // make sure that the container is inside body
//     if (!mainBody.contains(bookContainer)){
//         mainBody.appendChild(bookContainer);
//     }

//     data.forEach(book => {
//     //create a div element
//     let bookDiv = document.createElement("div");
//     bookDiv.classList.add("book");
//     bookDiv.style.border = "1px solid blue";
//     bookDiv.style.justifyContent = "center";
//     bookDiv.style.textAlign= "center";
//     bookDiv.style.width ="700px";
    

//     //create a title element and populate it
//     let title = document.createElement("h2");
//     title.textContent = book.title;

//     //create author element and populate it
//     let author = document.createElement("h4");
//     author.textContent = book.author;

//     //create a p element and populate it
//     let year = document.createElement("p");
//     year.textContent = book.year;

//     // create an image element and populate it
//     // let cover = document.createElement(img);
//     // cover.src = "";
//     // cover.alt ="book.title"

//     //append the contents to the div
//     bookDiv.append(title, author, year);
    
//     bookContainer.appendChild(bookDiv);
//     bookContainer.style.textAlign = "center";

//     mainBody.appendChild(bookContainer);

//     });
// }


// generateDiv(bookData);


