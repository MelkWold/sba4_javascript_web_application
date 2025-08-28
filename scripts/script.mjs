
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

