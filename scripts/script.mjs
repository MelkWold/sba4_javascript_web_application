import { bookInfoImporter } from "./bookInfoImporter.mjs";

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
const books = await bookImport("Dan Brown");
console.log(books)